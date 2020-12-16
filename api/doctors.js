const express = require("express");

const router = express.Router();

const queries = require("../db/queries");

router.get("/", (req, res) => {
  queries.getAll().then((doctors) => {
    res.json(doctors);
  });
});

router.get("/:id", (req,res) => {
  queries.getOne(req.params.id).then(doctor => {
    res.json(doctor)
  })
})

router.put("/:id", (req, res, next) => {
  queries.update(req.params.id, req.body).then(doctors => {
    res.json(doctors[0]);
  })
})

module.exports = router;
