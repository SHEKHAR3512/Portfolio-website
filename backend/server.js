require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// ✅ Email Configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ✅ Handle Contact Form Submission
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: "All fields are required" });
  }

  try {
    // 📩 Send Message to Yourself
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Message from ${name}`,
      text: `From: ${name} <${email}>\n\nMessage:\n${message}`,
    });

    // 🤖 Auto Reply to User
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thanks for Contacting Me! 🚀",
      text: `Hi ${name},\n\nThanks for reaching out! I’ll get back to you soon.\n\nBest,\nSHEKHAR JAAT`,
    });

    res.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Failed to send email" });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
