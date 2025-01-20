"use strict";

/* -------------------------------------------------------
    NODEJS EXPRESS | Erin's Restaurant
------------------------------------------------------- */

const express = require("express");
const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      index: true,
    },

    phone: {
      type: String,
      trim: true,
      required: true,
    },

    full_name: {
      type: String,
      trim: true,
      required: true,
    },

    guests: {
      type: Number,
      trim: true,
      required: true,
    },

    timeSlot: {
      type: String,
      trim: true,
      required: true,
    },

    date: {
      type: String,
      trim: true,
      required: true,
    },

    qrCode: {
      type: String,
      trim: true,
      required: true,
    },

    randomId: { type: String, required: true, unique: true },
  },
  { collection: "reservation", timeStamps: true }
);

module.exports = mongoose.model("Reservation", reservationSchema);
