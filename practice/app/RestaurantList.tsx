'use client'
import React from 'react'
import { Restaurant } from './page'
import { baseUrl } from './api/restaurant'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

type Props = {
  restaurants: Restaurant[]
}

const RestaurantList = (props: Props) => {
  const router = useRouter()

  const handleDeleteRequest = async (id: number) => {
    const response = await fetch(baseUrl + '/' + id, {
      method: 'DELETE',
      cache: 'no-cache',
    })
    router.refresh()
  }

  return (
    <div>
      RestaurantList
      <table className='table-auto text-center w-full text-white'>
        <thead className='bg-blue-500'>
          <tr>
            <th scope='col'>Restaurant</th>
            <th scope='col'>Location</th>
            <th scope='col'>Price Tag</th>
            <th scope='col'>Ratings</th>
            <th scope='col'>Edit</th>
            <th scope='col'>Delete</th>
          </tr>
        </thead>
        <tbody className='bg-gray-800'>
          {props.restaurants.map((item) => (
            <tr className='border-b border-white'>
              <td className='border-r'>{item.name}</td>
              <td className='border-x'>{item.location}</td>
              <td className='border-x'>{'$'.repeat(item.price_range)}</td>
              <td className='border-x'>Ratings</td>
              <td className='border-x'>
                <Link
                  href={'/restaurants/' + item.id + '/update'}
                  className='bg-orange-600 px-2 py-1 rounded-sm'
                >
                  Update
                </Link>
              </td>
              <td className='border-l px-4 py-2 text-white'>
                <button
                  onClick={(e) => handleDeleteRequest(item.id)}
                  className='bg-red-600 px-2 py-1 rounded-sm'
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default RestaurantList
