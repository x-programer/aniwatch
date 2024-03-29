const jwt = require('jsonwebtoken')

function verify(req,res, next){
    console.log("verify Token");

    // Toke is a header menas is a key...
    const authHeader = req.headers.token
    if(authHeader){

        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.SECRET_KEY, (err, user)=>{

            if(err) return res.status(403).json("Token is not valid");
            req.user = user;
            next();

        })

    } else{
        return res.status(401).json("You Are not authenticated.");
    }
    
}


module.exports = verify;