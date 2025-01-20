"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// Token Controller:

const Token = require('../models/token')

module.exports = {

    list: async (req, res) => {
   
        const data = await req.getModelList(Token)

        res.status(200).send({
            error: false,
            details: await req.getModelListDetails(Token),
            data
        })
        
    
    },

    create: async (req, res) => {
 
        const data = await Token.create(req.body)

        res.status(201).send({
            error: false,
            data
        })
    },

    read: async (req, res) => {
  
        const data = await Token.findOne({ _id: req.params.id })

        res.status(200).send({
            error: false,
            data
        })
    },

    update: async (req, res) => {
  
        const data = await Token.updateOne({ _id: req.params.id }, req.body, { runValidators: true })

        res.status(202).send({
            error: false,
            data,
            new: await Token.findOne({ _id: req.params.id })
        })
    },

    delete: async (req, res) => {


        const data = await Token.deleteOne({ _id: req.params.id });
    
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
}