"use strict";

/* -------------------------------------------------------
    NODEJS EXPRESS | Erin's Restaurant
------------------------------------------------------- */

const Admin = require("../controllers/adminController");
const router = require("express").Router();

router.route("/").get(Admin.list).post(Admin.create);

router
  .route("/:id")
  .get(Admin.read)
  .put(Admin.update)
  .patch(Admin.update)
  .delete(Admin.delete);

module.exports = router;
