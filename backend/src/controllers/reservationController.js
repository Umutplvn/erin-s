"use strict";

/* -------------------------------------------------------
    NODEJS EXPRESS | Erin's Restaurant
------------------------------------------------------- */

const Reservation = require("../models/reservationModel");
const { v4: uuidv4 } = require('uuid');

module.exports = {
  list: async (req, res) => {
    const data = await req.getModelList(Reservation);

    res.status(200).send({
      error: false,
      data,
    });
  },

  create: async (req, res) => {
    const { date, timeSlot, full_name, email, phone, guests } = req.body;
    const reservationQrId = uuidv4()

    try {
      if (guests >= 50) {
        return res
          .status(400)
          .json({ message: "Please call 0851395554 to discuss details for events with 50+ guests." });
      }
      

      const qrCode = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${reservationQrId}`;

      const data = await Reservation.create({
        date,
        timeSlot,
        full_name,
        email,
        phone,
        guests,
        qrCode,
        reservationQrId
      });

      res.status(201).send({
        error: false,
        data,
        reservationQrId,
      });
    } catch (error) {
      res.status(500).json({ message: "Error creating reservation", error });
    }
  },

  read: async (req, res) => {
    const { reservationId } = req.body;
    const data = await Reservation.findOne({ _id: reservationId });

    res.status(200).send({
      error: false,
      data,
    });
  },

  scan:async(req, res)=>{
    const { reservationQrId } = req.params; 

    try {
      const data = await Reservation.findOne({ reservationQrId });
      if (!data) {
        return res.status(404).json({ message: "Reservation not found." });
      }
  
      res.status(200).send({
        error: false,
        data,
      });
    } catch (error) {
      res.status(500).json({ message: "Error retrieving reservation", error });
    }
    
    },


  update: async (req, res) => {

    await Reservation.updateOne({ _id: req.params.reservationId }, req.body, {
      runValidators: true,
    });

    res.status(200).send({
      error: false,
      data: await Reservation.findOne({ _id: req.params.reservationId }),
    });
  },

  delete: async (req, res) => {
    const { reservationId } = req.body;
    const data = await Reservation.deleteOne({ _id: reservationId });

    if (data.deletedCount >= 1) {
      res.send({
        message: "Reservation successfully deleted",
      });
    } else {
      res.send({
        message: "There is no recording to be deleted.",
      });
    }
  },
};
