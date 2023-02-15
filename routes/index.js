import { Router } from 'express'

const router = require('express').Router()

export { router }

// GET localhost:3000/
router.get('/', function(req, res) {
  res.status(200).json({ msg: 'hello, friend' })
})

module.exports = router

export default router
