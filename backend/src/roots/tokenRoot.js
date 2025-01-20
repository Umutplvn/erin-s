"use strict";

/* -------------------------------------------------------
    NODEJS EXPRESS | Erin's Restaurant
------------------------------------------------------- */

const Token = require("../controllers/token");
const router = require("express").Router();


router.route("/").get(Token.list)
router.route("/:id").get(Token.read)
router.route("/delete/:id").delete(Token.delete)


module.exports = router;
