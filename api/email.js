const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
require("dotenv").config();

router.post("/", (req, res) => {
  console.log;
  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
        <h3>Meeting Confirmation</h3>
        <p>Meeting with ${req.body.firstName} ${req.body.lastName} at ${req.body.time}</p>
        <a href=${req.body.url}>Here is the zoom link!</a>
        `;
    let transporter = nodemailer.createTransport({
      host: "in-v3.mailjet.com",
      port: 587,
      //   service: "gmail",
      auth: {
        user: "38a2fdc1f3970185e881f5048f6f7e5d",
        pass: "6b88263c59f852545f654b97773b22f4",
      },
    });
    let mailOptions = {
      from: "bayezid1989@live.jp",
      to: `${req.body.email}`,
      replyTo: "test@testaccount.com",
      subject: "Hey, Doc Booking Confirmation",
      text: "Booking complleted!",
      html: htmlEmail,
    };
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) return console.log(err);
      console.log("Message sent", info.message);
      console.log("Message URL", nodemailer.getTestMessageUrl(info));
    });
  });
});

module.exports = router;
