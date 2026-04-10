import jwt from "jsonwebtoken";

const authadmin = (req,res,next)=>{
    try {
        const {token} = req.headers;
        if(!token)
            return res.json({success:false,message:"Not authorized!!"})
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        if(decoded !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD)
            return res.json({success:false,message:"User not authorized"});
        next();
    } catch (error) {
        console.log("Error authenticating admin!1");
        res.json({success:false,message:"Admin login failed"});
        
    }
}


export {authadmin};