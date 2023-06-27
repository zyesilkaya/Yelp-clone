'use client'
import React, { useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { baseUrl } from '@/app/api/restaurant'

type Props = {}

const Page = (props: Props) => {
  const params = useParams()
  const router = useRouter()
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [priceRange, setPriceRange] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await fetch(baseUrl + '/' + params.id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          location,
          price_range: priceRange,
        }),
      })
      router.replace('/')
      router.refresh()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='mb-4 w-[70%] h-screen flex items-center justify-center mx-auto'>
      <form action={''} className='relative flex flex-col gap-2 w-full h-[70%]'>
        <div className='relative flex flex-col items-center justify-between px-2 mx-auto w-full h-[70%]'>
          <div className='w-full'>
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
          <div className='w-full'>
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
          <div className='w-full'>
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
            className='px-2 py-1 m-2 bg-blue-600 text-white rounded-sm w-full'
          >
            Add
          </button>
        </div>
      </form>
    </div>
  )
}

export default Page
