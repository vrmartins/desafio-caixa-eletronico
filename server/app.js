const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')

const routes = require('./routes')
const expressSwagger = require('./config/express-swagger')
const errorHandling = require('./middlewares/error-handling')

require('dotenv-safe').config()

const app = express()

app.use(cors())
app.use(helmet())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', routes)

expressSwagger.startup(app)

errorHandling(app)

module.exports = app
