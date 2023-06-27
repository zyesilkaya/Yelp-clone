//import express from "express";
import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import db from './db/index.js'
import restaurantRouter from './routes/restaurants.js'

dotenv.config()

const app = express()

app.use(cors())

app.use(express.json())

app.use('/api/v1/restaurants', restaurantRouter)

const port = process.env.PORT || 3001
app.listen(port, () => {
  console.log('aaa')
})
