"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// app.use(authentication):

const jwt = require('jsonwebtoken')
const Token = require('../models/token')

module.exports = async (req, res, next) => {

    const auth = req.headers?.authorization || null // Token ...tokenKey... // Bearer ...accessToken...
    const tokenKey = auth ? auth.split(' ') : null // ['Token', '...tokenKey...'] // ['Bearer', '...accessToken...']

    if (tokenKey) {
        if (tokenKey[0] == 'Token') { 
            const tokenData = await Token.findOne({ token: auth}).populate('user_id')
            req.user = tokenData ? tokenData.user_id : undefined
        } else if (tokenKey[0] == 'Bearer') { // JWT
            jwt.verify(tokenKey[1], process.env.ACCESS_KEY, (err, userData) => req.user = userData)
        }
    }

    next()
}
