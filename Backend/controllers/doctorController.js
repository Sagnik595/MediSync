import doctorModel from "../models/doctorModel.js";

const changeAvailability = async (req, res) => {
  try {
    const { docID } = req.body;

    const doctor = await doctorModel.findById(docID);

    await doctorModel.findByIdAndUpdate(docID, {
      available: !doctor.available,
    });

    res.json({ success: true, message: "Availability changed" });

  } catch (error) {
    console.log(error);
    res.json({ success: false, error: error.message });
  }
};


const getallDoctors = async(req,res)=>{

  try {
   const doctorsdata = await doctorModel.find({}).select(['-password','-email']) 
   res.json({success:true, doctorsdata})
  } catch (error) {
    console.log("Error");
    res.json({success:false, message:"Data cannot be fetched!!"})
    
  }
}

export { changeAvailability, getallDoctors};