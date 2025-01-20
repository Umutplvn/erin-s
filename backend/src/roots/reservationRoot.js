"use strict";

/* -------------------------------------------------------
    NODEJS EXPRESS | Erin's Restaurant
------------------------------------------------------- */

const Reservation = require("../controllers/reservation");
const router = require("express").Router();


router.route("/").get(Reservation.list)
router.route("/create").post(Reservation.create)
router.route("/read").get(Reservation.read)
router.route("/scan/:reservationQrId").get(Reservation.scan)
router.route("/update").put(Reservation.update)
router.route("/update").patch(Reservation.update)
router.route("/delete").delete(Reservation.delete)


module.exports = router;
