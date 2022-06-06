exports.errorHandler = (err , req , res, next) =>{
    const statusCode = err.statusCode || 500
    const message = err.message
    const data  = err.data
    return res.status(statusCode).json({message , data})
}