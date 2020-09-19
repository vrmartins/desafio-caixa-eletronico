const InvalidAmountError = require('../errors/InvalidAmountError')

const defaultBanknotes = [100, 50, 20, 10]

const validAmount = amount => amount % Math.min(...defaultBanknotes) === 0

const calculateBanknotes = (amount) => {
  let calculate = amount
  return defaultBanknotes.reduce((previousValue, currentValue) => {
    if (currentValue > calculate) return previousValue

    const banknoteCounter = Math.floor(calculate / currentValue)
    calculate -= banknoteCounter * currentValue

    return {
      ...previousValue,
      [currentValue]: banknoteCounter
    }
  }, {})
}

const WithdrawController = {
  get: (req, res, next) => {
    if (!validAmount(req.query.amount)) {
      const errorMessage = `Nós não temos cédulas para atender a requisição. Cédulas disponíveis: ${defaultBanknotes.join(', ')}.`
      return next(new InvalidAmountError(errorMessage))
    }
    res.status(200).json({
      banknotes: calculateBanknotes(parseFloat(req.query.amount))
    })
  }

}

module.exports = WithdrawController
