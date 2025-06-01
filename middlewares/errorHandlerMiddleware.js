function errorHandlerMiddleware(err, req, res, next){
    if(err.name === 'JsonWebTokenError') return res.status(401).send({ message: 'Invalid token' })
    if(err.name === 'Unauthorized') return res.status(403).send({ message: err.message })
}