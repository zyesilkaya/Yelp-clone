'use client'
import React, { useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { baseUrl } from './api/restaurant'

type Props = {}

const AddRestaurant = (props: Props) => {
  const router = useRouter()
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [priceRange, setPriceRange] = useState('Price Range')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await fetch(baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          location,
          price_range: priceRange,
        }),
      })
      router.refresh()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='mb-4 h-14'>
      <form action={''} className='relative h-full'>
        <div className='flex items-center justify-between px-2 mx-auto w-full'>
          <div className='h-full'>
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value)
              }}
              className='add-restaurant-input py-1'
              type='text'
              placeholder='Name'
            />
          </div>
          <div className='h-full'>
            <input
              value={location}
              onChange={(e) => {
                setLocation(e.target.value)
              }}
              className='add-restaurant-input py-1'
              type='text'
              placeholder='Location'
            />
          </div>
          <div className='h-full'>
            <select
              value={priceRange}
              onChange={(e) => {
                setPriceRange(e.target.value)
              }}
              className='add-restaurant-input py-[0.25rem]'
            >
              <option disabled>Price Range</option>
              <option value={1}>$</option>
              <option value={2}>$$</option>
              <option value={3}>$$$</option>
              <option value={4}>$$$$</option>
              <option value={5}>$$$$$</option>
            </select>
          </div>
          <button
            onClick={handleSubmit}
            className='px-2 py-1 m-2 bg-blue-600 text-white rounded-sm'
          >
            Add
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddRestaurant
