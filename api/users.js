const express = require("express");

const router = express.Router();

const queries = require("../db/queries");

router.get("/", (req, res) => {
  queries.getAllUsers().then((users) => {
    res.json(users);
  });
});

router.get("/:id", (req,res) => {
  queries.getOneUser(req.params.id).then(user => {
    res.json(user)
  })
})

// to update table by id
router.put("/:id", (req, res, next) => {
  queries.updateUser(req.params.id, req.body).then(users => {
    res.json(users[0]);
  })
})

router.post('/', (req, res, next) => {
    queries.createUser(req.body).then(user => {
        res.json(user)
    })
})

module.exports = router;
