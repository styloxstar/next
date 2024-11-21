'use client'
import { useParams } from 'next/navigation'
import React from 'react'

const user = () => {

    const user = useParams()
  return (
    <div>Hello user, {user.user}</div>
  )
}

export default user