import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "vodabsv@gmail.com",
    pass: "purb gyvh desk gcha",
  },
});

export const mailOptions = {
  from: email,
  to: "blohinnote3@gmail.com",
};
