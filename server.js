const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.post('/send-email', async (req, res) => {
  const { to, subject, html } = req.body; // Change 'text' to 'html'

  // Configure your transporter
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "djs77320@gmail.com",
      pass: "cwaz etnh kcyb rbav",
    },
  });

  try {
    await transporter.sendMail({
      from: '"Bures Navette" <djs77320@gmail.com>',
      to,
      subject,
      html // Use the html from req.body
    });
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to send email', error });
  }
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});