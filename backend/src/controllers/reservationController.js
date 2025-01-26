"use strict";

const reservationConfirmEmail = require("../helpers/reservationConfirmEmail");
/* -------------------------------------------------------
    NODEJS EXPRESS | Erin's Restaurant
------------------------------------------------------- */

const Reservation = require("../models/reservationModel");
const { v4: uuidv4 } = require('uuid');

module.exports = {
  list: async (req, res) => {
    const check= req.user.isConfirmedAdmin //! Auth Check - Check if the account is authorized
    let data=""
    
    if(check){
       data = await req.getModelList(Reservation);
    }else{
      data="Only admin can view this data"
    }

    res.status(200).send({
      error: false,
      data,
    });
  },

  create: async (req, res) => {
    const { date, timeSlot, full_name, email, phone, guests } = req.body;

    try {
      if (guests >= 50) {
        return res
          .status(400)
          .json({ message: "Please call 0851395554 to discuss details for events with 50+ guests." });
      }

      const dataString = `date=${date}&timeSlot=${timeSlot}&full_name=${full_name}&email=${email}&phone=${phone}&guests=${guests}`;


      const qrCode = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${dataString}`;

      await reservationConfirmEmail(date, timeSlot, full_name, email, phone, guests, qrCode)
      const data = await Reservation.create({
        date,
        timeSlot,
        full_name,
        email,
        phone,
        guests,
        qrCode,
      });

      res.status(201).send({
        error: false,
        data
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



  update: async (req, res) => {
    const check= req.user.isConfirmedAdmin
    let data=""

    if(check){
      await Reservation.updateOne({ _id: req.params.reservationId }, req.body, {
        runValidators: true,
      });

    data=await Reservation.findOne({ _id: req.params.reservationId })
    }else{
     
        data="Only admin can update this data!"
      
    }

    res.status(200).send({
      error: false,
      data
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
