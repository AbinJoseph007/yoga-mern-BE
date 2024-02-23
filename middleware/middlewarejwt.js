const jwt = require("jsonwebtoken")


const middlewarejwt = (req,res,next)=>{
    console.log('inside jwt middleware');

    const token = req.headers['authorization'].split(' ')[1]
    console.log(token);

    try {
        const jwtResponse = jwt.verify(token,"superman007")
        console.log(jwtResponse); 
        req.payload = jwtResponse.userId
        next()
        
    } catch (err) {
      res.status(401).json('autherization failed pls login')  
    }
    
}

module.exports = middlewarejwt