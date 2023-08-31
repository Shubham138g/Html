import User from '../schema/user-schema.js';


//insert user data
export const adduser= async(req,res)=>{
    const user=req.body;
    
    const newUser= new User(user);

    try {
         await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({message: error.message});
        
    }   
};

 //get  all user
export const getUser= async (req,res)=>{
try {
  const users= await User.find({});
  res.status(200).json(users)
} catch (error) {
    res.status(404).json({message: error.message});
}
}

export const getUserr=async(req,res)=>{
    try {
        const users= await User.find({_id: req.params.id});
        res.status(200).json(users)
      } catch (error) {
          res.status(404).json({message: error.message});
      }
}