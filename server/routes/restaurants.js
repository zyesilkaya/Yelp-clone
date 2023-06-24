import express from 'express'
import {
  createRestaurant,
  deleteRestaurant,
  getAllRestaurants,
  updateRestaurant,
  whereID,
} from '../controllers/restaurants.js'

const router = express.Router()

router.get('/', getAllRestaurants)
router.get('/:id', whereID)
router.post('/', createRestaurant)
router.put('/:id', updateRestaurant)
router.delete('/:id', deleteRestaurant)

export default router
