const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send({ status: "server working" })
})

module.exports = router