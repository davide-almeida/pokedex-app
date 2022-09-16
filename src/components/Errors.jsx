import React from 'react'
import { useParams } from 'react-router-dom'

const Errors = () => {
  const { id } = useParams()

  return (
    <div>
      { id }
    </div>
  )
}

export default Errors
