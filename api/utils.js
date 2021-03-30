function reverseText (str) {
  if (!str || typeof str !== 'string') return false

  return str.split('').reverse().join('')
}

function isPalindrome (str) {
  if (!str || typeof str !== 'string') return false

  str = str.replace(/\W/g, '').toLowerCase()
  return str === str.split('').reverse().join('')
}

module.exports = { reverseText, isPalindrome }
