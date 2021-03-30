const app = require('./server')

const port = process.env.PORT || 9001

app.listen(port, () => {
  console.log(`Node server started on port ${port}.`)
})
