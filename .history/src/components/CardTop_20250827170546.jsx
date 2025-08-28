import React from 'react'

function CardTop() {
  return (
    <div className='px-8 py-6.5 bg-red rounded[0.5rem]'>
        <div className='flex flex-col gap-2'>
            <span className='text-white'>My balance</span>
            <span className='fbold'>$921.48</span>
        </div>
    </div>
  )
}

export default CardTop 