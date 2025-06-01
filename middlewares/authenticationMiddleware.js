const { verifyToken } = require("../helpers/jwt");

async function authenticationMiddleware(req, res, next){
    try {
        const { authorization } = req.headers;
        if(!authorization) throw { name: 'Unauthorized', message: 'Invalid token' }

        const [ type, token ] = authorization.split(' ');
        if(type !== 'Bearer' || !token) throw { name: 'Unauthorized', message: 'Invalid token' };

        const decoded = verifyToken(token)
        if(!decoded) throw { name: 'Unauthorized', message: 'Invalid token' };

        req.user = {
            id: decoded.id,
            username: decoded.username
        }

        next();

        
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports = authenticationMiddleware;