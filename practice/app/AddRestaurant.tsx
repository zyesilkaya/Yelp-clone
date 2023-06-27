import React from 'react'

type Props = {}

const AddRestaurant = (props: Props) => {
  return (
    <div className='mb-4 h-14'>
      AddRestaurant
      <form action={''} className='relative h-full'>
        <div className='flex items-center justify-between px-2 mx-auto w-full'>
          <div className='h-full'>
            <input
              className='add-restaurant-input py-1'
              type='text'
              placeholder='Name'
            />
          </div>
          <div className='h-full'>
            <input
              className='add-restaurant-input py-1'
              type='text'
              placeholder='Location'
            />
          </div>
          <div className='h-full'>
            <select className='add-restaurant-input py-[0.25rem]'>
              <option disabled selected>
                Price Range
              </option>
              <option value='1'>$</option>
              <option value='2'>$$</option>
              <option value='3'>$$$</option>
              <option value='4'>$$$$</option>
              <option value='5'>$$$$$</option>
            </select>
          </div>
          <button className='px-2 py-1 m-2 bg-blue-600 text-white rounded-sm'>
            Add
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddRestaurant
