import { User } from "../model/schema/userSchema.js";
import jwtWebToken from "jsonwebtoken";
import bcrypt from "bcrypt";
import nodeMailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const createUser = async (req, res) => {
  try {
    const { firstName, lastName, email, phoneNo, password } = req.body;
    let user = await User.find({ email: email?.toLowerCase() });
    if (user?.length)
      res.status(400).send({
        message: "Sorry this email has been already registred with us.",
      });
    let createUser = await User.create({
      ...req.body,
      email: email.toLowerCase(),
    });

    const transporter = nodeMailer.createTransport({
      service: "gmail",
      secure: true,
      port: 465,
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASS,
      },
    });
    const reciever = {
      from: process.env.NODEMAILER_EMAIL,
      to: email,
      subject: "Your OTP Verification Code",
      text: `Hello ${firstName},\n\nYour OTP code is: 1234\n\nThis code is valid for 10 minutes. Please do not share it with anyone.\n\nThank you,\nYour Company Name`,
      html: `
      <h1>Hello ${firstName},</h1>
      <p>Your OTP code is: <strong>1234</strong></p>
      <p>This code is valid for 10 minutes. Please do not share it with anyone.</p>
      <p>Thank you,</p>
      <p>Your Company Name</p>
    `,
    };

    transporter.sendMail(reciever, (request, response) => {
      if (error) {
        throw error;
      } else {
        console.log("Mail sent sucessfully");
      }
    });

    res.json(createUser);
  } catch (error) {
    console.log(
      "eror will occured while createuser-----------",
      error?.message
    );
    res.status(400).send({ message: "Something went wrong.", status: 400 });
  }
};

const getUsers = async (req, res) => {
  const user = await User.find();
  res.json(user);
};

const getUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
};

const updateUser = async (req, res) => {
  const user = User.findById(req, params.id);
};

const deleteUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  await user.remove();
};

export { createUser, getUsers, getUserById, updateUser, deleteUser };
