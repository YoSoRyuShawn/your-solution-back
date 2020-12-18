const express = require("express");
const router = express.Router();
// const axios = require("axios"); <-- Want to replace request to axios but not sure the syntax...
const request = require("request");
require("dotenv").config();

router.post("/", async (req, res) => {
  const options = {
    method: "POST",
    url: `https://api.zoom.us/v2/users/${process.env.ZOOM_API_EMAIL}/meetings`,
    headers: {
      authorization: `Bearer ${process.env.ZOOM_API_TOKEN}`,
    },
    json: {
      topic: `Doctor Consultation (User: ${req.body.username} / Doctor: ${req.body.doctorName})`,
      type: "2",
      start_time: req.body.time,
      timezone: "Asia/Tokyo",
      settings: {
        use_pmi: "false",
      },
    },
  };

  const result = await request(options, function (error, response, body) {
    if (error) throw new Error(error);
    res.json(response);
  });
});

module.exports = router;
