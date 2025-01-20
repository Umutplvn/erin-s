"use strict";

/* -------------------------------------------------------
    NODEJS EXPRESS | Erin's Restaurant
------------------------------------------------------- */

const Reservation = require("../models/reservationModel");
const QRCode = require("qrcode");


module.exports = {
  list: async (req, res) => {
    const data = await req.getModelList(Reservation);

    res.status(200).send({
      error: false,
      data
    });
  },


create: async (req, res) => {
  const { date, timeSlot, full_name, email, phone } = req.body;

  try {
    const count = await Reservation.countDocuments({ date, timeSlot });
    if (count >= 50) {
      return res.status(400).json({ message: "This time slot is fully booked." });
    }

    const qrData = `${date}|${timeSlot}|${full_name}|${email}|${phone}`;
    const qrCode = await QRCode.toDataURL(qrData);

    const data = await Reservation.create({ date, timeSlot, full_name, email, phone, qrCode });

    res.status(201).send({
      error: false,
      data,
    });
  } catch (error) {
    res.status(500).json({ message: "Error creating reservation", error });
  }
},

  read: async (req, res) => {

    const data= await Reservation.findOne( {_id:req.params.id})

    res.status(200).send({
        error:false,
        data
    })


  },

  update: async (req, res) => {

    const {reservationId} = req.body

    await Reservation.updateOne( {_id:reservationId}, req.body, { runValidators: true })

    res.status(200).send({
        error:false,
        data: await Reservation.findOne( {_id:reservationId})
    })
  },

  delete: async (req, res) => {

    const {reservationId} = req.body
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

  }
};
