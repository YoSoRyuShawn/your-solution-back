const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
require("dotenv").config();
const moment = require("moment");

router.post("/", (req, res) => {
  console.log;
  nodemailer.createTestAccount((err, account) => {
    const date = moment(`${req.body.date}`).format("MMM Do YYYY");
    const htmlEmail = `
        <h3>Dear ${req.body.userName}</h3>
        <h3>Meeting Confirmation</h3>
        <p>Meeting with ${req.body.doctorName} at ${req.body.time}, ${date}</p>
        <a href=${req.body.url}>Here is the zoom link! ${req.body.url}</a>
        `;
    let transporter = nodemailer.createTransport({
      host: "in-v3.mailjet.com",
      port: 587,
      auth: {
        user: process.env.MAILJET_USER,
        pass: process.env.MAILJET_PASS,
      },
    });
    let mailOptions = {
      from: "bayezid1989@live.jp",
      to: `${req.body.email}`,
      replyTo: "bayezid1989@live.jp",
      subject: "Hey, Doc Booking Confirmation",
      text: "Booking complleted!",
      html: htmlEmail,
    };
    const res = transporter.sendMail(mailOptions, (err, info) => {
      if (err) return console.log(err);
      console.log("Message sent", info.message);
      console.log("Message URL", nodemailer.getTestMessageUrl(info));
    });
    console.log(res);
  });
});

module.exports = router;
