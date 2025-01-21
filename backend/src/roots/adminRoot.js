"use strict";

/* -------------------------------------------------------
    NODEJS EXPRESS | Erin's Restaurant
------------------------------------------------------- */

const Admin = require("../controllers/adminController");
const auth = require("../controllers/auth");
const router = require("express").Router();

// Login - Logout
router.route("/login").post(auth.login)
router.route("/logout").post(auth.logout)

// Admin Roots
router.route("/").get(Admin.list)
router.route("/create").post(Admin.create)
router.route("/:id").get(Admin.read)
router.route("/update/:id").put(Admin.update)
router.route("/update/:id").patch(Admin.update)
router.route("/delete/:id").delete(Admin.delete)


module.exports = router;
