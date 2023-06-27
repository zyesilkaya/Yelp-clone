import db from '../db/index.js'

export async function getAllRestaurants(req, res) {
  try {
    const results = await db.query('SELECT * FROM restaurants')
    res.status(200).json({
      status: 'success',
      results: results.length,
      data: {
        restaurants: results['rows'],
      },
    })
  } catch (err) {
    console.log(err)
  }
}

export async function whereID(req, res) {
  try {
    const results = await db.query(`SELECT * FROM restaurants WHERE id=$1`, [
      req.params.id,
    ])
    res.status(200).json({
      status: 'success',
      results: results.length,
      data: {
        restaurants: results['rows'],
      },
    })
  } catch (err) {
    console.log(err)
  }
}

export async function createRestaurant(req, res) {
  try {
    const results = await db.query(
      `INSERT INTO restaurants (name, price_range, location) VALUES ($1, $2, $3) RETURNING *`,
      [req.body.name, req.body.price_range, req.body.location]
    )
    res.status(200).json({
      status: 'success',
      results: results.length,
      data: {
        restaurants: results['rows'],
      },
    })
  } catch (err) {
    console.log(err)
  }
}

export async function updateRestaurant(req, res) {
  try {
    const results = await db.query(
      `UPDATE restaurants SET name = $1 , price_range = $2, location = $3 WHERE id = $4 returning *`,
      [req.body.name, req.body.price_range, req.body.location, req.params.id]
    )
    res.status(200).json({
      status: 'success',
      results: results.length,
      data: {
        restaurants: results['rows'],
      },
    })
  } catch (err) {
    console.log(err)
  }
}

export async function deleteRestaurant(req, res) {
  try {
    const results = await db.query(
      `DELETE FROM restaurants WHERE id = $1 returning *`,
      [req.params.id]
    )
    res.status(200).json({
      status: 'success',
      results: results.length,
      data: {
        restaurants: results['rows'],
      },
    })
  } catch (err) {
    console.log(err)
  }
}
