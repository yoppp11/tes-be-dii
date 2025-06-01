const { comparePassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')
const { User } = require('../models')

class UserController {

    static async routeLogin(req, res, next){
        try {
            const { username, password } = req.body
            if(!username) throw { name: 'BadRequest', message: 'Username is required' }
            if(!password) throw { name: 'BadRequest', message: 'Password is required' }

            const user = await User.findOne({
                where: {
                    username
                }
            })

            if(!user) throw { name: 'Unauthorized', message: 'Invalid username or password' }

            const isValidPassword = comparePassword(password, user.password)
            if(!isValidPassword) throw { name: 'Unauthorized', message: 'Invalid username or password' }

            const payload = {
                id: user.id,
                username: user.username
            }

            const access_token = generateToken(payload)
            return res.status(200).send({
                message: 'Login successful',
                access_token,
                user: {
                    id: user.id,
                    username: user.username
                }
            })

        } catch (error) {
            console.log(error);
            next(error)
        }
    }

}

module.exports = UserController