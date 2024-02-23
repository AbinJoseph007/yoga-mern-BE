//applicable middleware

const appMiddleware = (req,res,next) =>{
    console.log('inside application specific middlware');
    next()
}

module.exports = appMiddleware