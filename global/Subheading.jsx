import React from 'react'

const Subheading = ({text,className}) => {
  return (
    <p className={`text-primary font-bold text-xl mb:text-base ${className}`}>{text}</p>
  )
}

export default Subheading