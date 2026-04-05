import express from "express";

const addDoc = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      speciality,
      experience,
      about,
      fees,
      address,
    } = req.body;

    const imagefile = req.file;
    
    console.log(name,email,password,speciality,experience,about,fees,address,imagefile);

    // Send response so Postman doesn't hang
    res.json({ success: true, message: "Data logged successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { addDoc };
