"use strict";

/* -------------------------------------------------------
    NODEJS EXPRESS | Erin's Restaurant
------------------------------------------------------- */

const Admin = require("../controllers/adminController");
const router = require("express").Router();


router.route("/").get(Admin.list)
router.route("/create").post(Admin.create)
router.route("/:id").get(Admin.read)
router.route("/update/:id").put(Admin.update)
router.route("/update/:id").patch(Admin.update)
router.route("/delete/:id").delete(Admin.delete)


module.exports = router;
