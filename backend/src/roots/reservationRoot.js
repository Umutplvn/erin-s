"use strict";

/* -------------------------------------------------------
    NODEJS EXPRESS | Erin's Restaurant
------------------------------------------------------- */

const Reservation = require("../controllers/reservation");
const router = require("express").Router();


router.route("/").get(Reservation.list)
router.route("/create").post(Reservation.create)
router.route("/read").get(Reservation.read)
router.route("/update/:id").put(Reservation.update)
router.route("/update/:id").patch(Reservation.update)
router.route("/delete/:id").delete(Reservation.delete)


module.exports = router;
