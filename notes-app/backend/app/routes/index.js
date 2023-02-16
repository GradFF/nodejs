const express = require('express')
const router = express.Router()

require('./note.routes.js')(router)

module.exports = router
