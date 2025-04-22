require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors()); 

// Order API
app.post("/order", async (req, res) => {
  try {
    const { name, email, product, address } = req.body;
  

    // Email Config
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });

    const mailOptions = {
      from: `${name} <${process.env.USER}>`,
      to: process.env.USER, 
      subject: "New Order Received",
      text: `Name: ${name}\nEmail: ${email}\nProduct: ${product}\nAddress: ${address}`,
    };

    // Send Email
    await transporter.sendMail(mailOptions);
   res.status(200).send("Order placed and email sent successfully!")
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Something went wrong. Email not sent")
  }


});


// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

