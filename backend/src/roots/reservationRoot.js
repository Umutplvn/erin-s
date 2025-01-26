"use strict";

/* -------------------------------------------------------
    NODEJS EXPRESS | Erin's Restaurant
------------------------------------------------------- */

const Reservation = require("../controllers/reservationController");
const router = require("express").Router();


router.route("/").get(Reservation.list)
router.route("/create").post(Reservation.create)
router.route("/read").get(Reservation.read)
router.route("/update/:reservationId").put(Reservation.update)
router.route("/update/:reservationId").patch(Reservation.update)
router.route("/delete").delete(Reservation.delete)


module.exports = router;
