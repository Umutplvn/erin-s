"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | Erin's Restaurant
------------------------------------------------------- */
const mongoose=require("mongoose")
/* ------------------------------------------------------- */

const TokenSchema = new mongoose.Schema({

    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin',
        required: true,
        index: true,
    }, 

    token: {
        type: String,
        trim: true,
        required: true,
        index: true,
    }, 

}, { collection: 'tokens', timestamps: true })

/* ------------------------------------------------------- */
module.exports = mongoose.model('Token', TokenSchema)