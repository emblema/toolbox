const app = require('../server')
const request = require('supertest')(app)
const expect = require('chai').expect

describe('GET /iecho', function () {
  it('returns success if a text parameter is provided', async function () {
    const response = await request.get('/iecho?text=test')

    expect(response.status).to.eql(200)
  })

  it('returns an error if no text is provided', async function () {
    const response = await request.get('/iecho')

    expect(response.status).to.eql(400)
  })

  it('returns an object with the text parameter reversed', async function () {
    const response = await request.get('/iecho?text=test')

    expect(response.body).to.include({ text: 'tset' })
  })

  it('returns an object with the flag palindrome set to true if the text is palindrome', async function () {
    const response = await request.get('/iecho?text=level')

    expect(response.body).to.include({ palindrome: true })
  })

  it('returns an object with the flag palindrome set to false if the text is not palindrome', async function () {
    const response = await request.get('/iecho?text=any')

    expect(response.body).to.include({ palindrome: false })
  })
})
