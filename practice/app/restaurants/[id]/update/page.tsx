'use client'
import React, { useState } from 'react'
import { useRouter, useParams } from 'next/navigation'

type Props = {}

const Page = (props: Props) => {
  const params = { useParams }
  const router = { useRouter }
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [priceRange, setPriceRange] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {}

  return <div>Page</div>
}

export default Page
