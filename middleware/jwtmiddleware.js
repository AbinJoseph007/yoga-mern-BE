  const jwt = require('jsonwebtoken')


const jwtmiddleware = (req,res,next)=>{
    console.log('inside jwt middleware');

    const tokens = req.headers['authorization'].split(' ')[1]
    console.log(tokens);

    try {
        const jwtResponse = jwt.verify(tokens,"superteacher")
        console.log(jwtResponse); 
        req.payload = jwtResponse.teacherId
        next()
        
    } catch (err) {
      res.status(401).json('autherization failed pls login')  
    }
    
}

module.exports = jwtmiddleware