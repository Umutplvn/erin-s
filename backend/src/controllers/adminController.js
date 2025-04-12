"use strict";

/* -------------------------------------------------------
    NODEJS EXPRESS | Erin's Restaurant
------------------------------------------------------- */

const Admin = require("../models/adminModel");
const Token = require("../models/token");
const passwordEncrypt = require('../helpers/passwordEncrypt')

module.exports = {
  list: async (req, res) => {
    const data = await req.getModelList(Admin);

    res.status(200).send({
      error: false,
      data
    });
  },

  create: async (req, res) => {
    req.body.isConfirmedAdmin=false
    const {password}=req.body
    req.body.password=passwordEncrypt(password)
    const data = await Admin.create(req.body)
    const tokenData = await Token.create({
      user_id: data._id,
      token: passwordEncrypt(data._id + Date.now())
  })
    res.status(201).send({
        error:false,
        data,
        token:tokenData
    })

  },

  read: async (req, res) => {

    // const filters= (req.user.isConfirmedAdmin) ? {_id:req.params.id} : false
    const data= await Admin.findOne({_id:req.params.id})

    res.status(200).send({
        error:false,
        data
    })


  },

  update: async (req, res) => {

    // const filters = (req.user?.isConfirmedAdmin) ? req.body.isConfirmedAdmin : false

    await Admin.updateOne( {_id:req.params.id}, req.body, { runValidators: true })

    res.status(200).send({
        error:false,
        data: await Admin.findOne( {_id:req.params.id})
    })
  },

  delete: async (req, res) => {

    const data = await Admin.deleteOne({ _id: req.params.id });

    await Token.deleteOne({ user_id:  req.params.id });

    if (data.deletedCount >= 1) {
      res.send({
        message: "Successfully deleted",
      });
    } else {
      res.send({
        message: "There is no recording to be deleted.",
      });
    }

  }
};
