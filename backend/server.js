const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000
const connectDB = require('./config/db')

connectDB()
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(errorHandler)

app.use('/v1/api/products', require('./routes/productRoutes'))
app.use('/v1/api/users', require('./routes/userRoutes'))
app.use('/v1/api/admin', require('./routes/adminRoutes'))


app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})