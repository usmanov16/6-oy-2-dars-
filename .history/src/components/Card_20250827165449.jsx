
import React from 'react'
import CardTop from './CardTop'
import CardBottom from './CardBottom'

function Card() {
  return (
    <div className='w-full maxwflex flex-col  gap-6'>
        <CardTop/>
        <CardBottom/>
    </div>
  )
}

export default Card