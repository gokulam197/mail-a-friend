// Import necessary modules
const nodemailer = require("nodemailer");
// require("dotenv").config();

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: "gmail", 
  auth: {
    user:'gokulmadhavan002@gmail.com', 
    pass: 'kwzo ukgm kjms bmkz', 
  },
});

// Define the email options
const mailOptions = {
  from: 'gokulmadhavan002@gmail.com',
  to: "gokulmadhavannechoor197@gmail.com", 
  subject: "Hello from Nodemailer!",
  text: "This is a test email sent using Nodemailer. Hope you're doing well!",
};


transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log("Error occurred: ", error.message);
  }
  console.log("Email sent: ", info.response);
});
