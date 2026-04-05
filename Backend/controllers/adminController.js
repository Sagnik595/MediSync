import express from "express";
import validator from 'validator'
import bcrypt from 'bcrypt'
import {v2 as cloudinary} from 'cloudinary'
import doctorModel from "../models/doctorModel.js";

const addDoc = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      speciality,
      degree,
      experience,
      about,
      fees,
      address,
    } = req.body;

    const imagefile = req.file;
    
    if(!name || !email || !password || !speciality || !experience ||!about ||!fees ||!address ||!degree || !imagefile)
      return res.json({Error:"Incomplete Input data!!"})

    //validating the right email
    if(!validator.isEmail(email))
      return res.json({Error:"Please enter a valid email!!"})

    //validating password length
    if(password.length < 8)
      return res.json({Error:"Please enter a strong password!!"})



    // hash the password
    const saltRounds = 10;
    const salt = await bcrypt.genSaltSync(saltRounds);
    const hash = await bcrypt.hashSync(password, salt);// new password


    //upload image to cloudinary
    const imageUpload = await cloudinary.uploader.upload(imagefile.path,{resource_type:"image"});
    const imageurl = imageUpload.secure_url;

    const doctorData = {
      name,
      email,
      image:imageurl,
      password:hash,
      speciality,
      degree,
      experience,
      about,
      fees,
      available:true,
      address:JSON.parse(address),// in form data we have to convert it into string,
      date:Date.now()
    }

    const newDoctor = new doctorModel(doctorData);
    await newDoctor.save();

    return res.json({ success: true, message: "Data logged successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { addDoc };
