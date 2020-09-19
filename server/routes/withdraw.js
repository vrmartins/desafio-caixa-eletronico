const express = require('express')
const Joi = require('@hapi/joi')
const WithdrawController = require('../controllers/withdraw')
const validate = require('../utils/joi/validate')

const router = new express.Router()

const withdrawSchema = Joi.object().keys({
  amount: Joi.number().required()
})

/**
 * @typedef Withdraw
 *
 * @property {Object} banknotes - Cédulas
 */

/**
 * @typedef Withdraw_Request
 *
 * @property {number} amount - Valor para saque
 */

/**
  * Realiza o saque do valor solicitado
  * @route GET /withdraw
  * @group Saque
  * @param {number} amount.query.required Valor a sacar
  * @returns {string} 200 - Ok
  * @return  {Error} 500 - Unexpected error
*/
router.route('/')
  .get(validate({ query: withdrawSchema }), WithdrawController.get)

module.exports = router
