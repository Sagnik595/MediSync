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

export { changeAvailability };