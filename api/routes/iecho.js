const express = require('express')
const router = express.Router()
const { reverseText, isPalindrome } = require('../utils')

router.get('/iecho', (req, res) => {
  const text = req.query.text

  if (!text) return res.status(400).send({ error: 'no text' })

  res.json({ text: reverseText(text), palindrome: isPalindrome(text) })
})

module.exports = router
