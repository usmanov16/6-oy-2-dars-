
import React from 'react'
import CardTop from './CardTop'
import CardBottom from './CardBottom'

function Card() {
  return (
    <div className='flex flex-col  gap-6'>
        <CardTop/>
        <CardBottom
    </div>
  )
}

export default Card