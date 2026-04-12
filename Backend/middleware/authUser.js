import jwt from "jsonwebtoken";

const authUser = (req,res,next)=>{
    try {
        const {token} = req.headers;
        if(!token)
            return res.json({success:false,message:"Not authorized!!"})
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.body.userID = token.id
        next();
    } catch (error) {
        console.log("Error authenticating user!!");
        res.json({success:false,message:"User login failed"});
        
    }
}


export {authUser};