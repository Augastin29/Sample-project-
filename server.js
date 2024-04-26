var app = require('./app.js')
port = 8080
app.listen(port, () => {
    console.log(` app listening on port${port}`)
})
