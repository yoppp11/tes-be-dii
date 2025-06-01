function errorHandlerMiddleware(err, req, res, next){
    if(err.name === 'SequelizeValidationError' || err.name === 'SequelizeForeignKeyConstraintError') return res.status(400).send({ message: err.errors[0].message });
    if(err.name === 'BadRequest') return res.status(400).send({ message: err.message })
    if(err.name === 'JsonWebTokenError') return res.status(401).send({ message: 'Invalid token' })
    if(err.name === 'Unauthorized') return res.status(401).send({ message: err.message })

    return res.status(500).send({
        message: 'Internal server error'
    });
}

module.exports = errorHandlerMiddleware;