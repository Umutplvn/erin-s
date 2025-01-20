"use strict";

/* -------------------------------------------------------
    NODEJS EXPRESS | Erin's Restaurant
------------------------------------------------------- */

const Admin = require("../models/adminModel");

module.exports = {
  list: async (req, res) => {
    const data = await User.getModelList();

    res.status(200).send({
      error: false,
      data
    });
  },

  create: async (req, res) => {

    req.body.isConfirmedAdmin=false
    const data = await User.create(req.body)

    res.status(201).send({
        error:false,
        data,
        // token:tokenData for autologin after register
    })

  },

  read: async (req, res) => {

    const filters= (req.user.isConfirmedAdmin) && {_id:req.params.id}
    const data= await User.findOne(filters)

    res.status(200).send({
        error:false,
        data
    })


  },

  update: async (req, res) => {

    const filters = (req.user?.isConfirmedAdmin) ? req.body.isConfirmedAdmin : false

    await User.updateOne(filters, req.body, { runValidators: true })

    res.status(200).send({
        error:false,
        data: await User.findOne(filters)
    })
  },

  delete: async (req, res) => {


    const {userId}=req.body
    const filters = (req.user?.isConfirmedAdmin) && { _id: userId }
    const data = await User.deleteOne(filters)

    res.status(data.deletedCount >0 ?200 : 400).send({
        error: !data.deletedCount,
        message:"User successfully deleted"
    })

  },
};
