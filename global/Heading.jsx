import React from 'react'

const Heading = ({text,className}) => {
  return (
    <p className={`text-5xl font-semibold text-primaryDark sm:text-3xl lg:text-4xl mb:text-2xl ${className}`}>{text}</p>
  )
}

export default Heading