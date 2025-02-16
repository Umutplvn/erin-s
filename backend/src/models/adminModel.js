"use strict"

/* -------------------------------------------------------
    NODEJS EXPRESS | Erin's Restaurant
------------------------------------------------------- */

const express = require('express')
const mongoose=require("mongoose")

const adminSchema = new mongoose.Schema({

    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        index: true
    },

    password: {
        type: String,
        trim: true,
        required: true
    },

    first_name: {
        type: String,
        trim: true,
        required: true
    },

    last_name: {
        type: String,
        trim: true,
        required: true
    },

    isConfirmedAdmin:{
        type:Boolean,
        default:false
    }


}, {collection:"admins", timeStamps:true})






module.exports =mongoose.model("Admin", adminSchema)
