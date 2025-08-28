import React from 'react'

const chartData = [
  {
    id: 1,
    weekdays: "mo",
    value: 56
  },
  {
    id: 2,
    weekdays: "tu",
    value: 40
  },
  {
    id: 3,
    weekdays: "we",
    value: 44
  },
  {
    id: 4,
    weekdays: "th",
    value: 81
  },
  {
    id: 5,
    weekdays: "fr",
    value: 76
  },
  {
    id: 6,
    weekdays: "sa",
    value: 15
  },
  {
    id: 7,
    weekdays: "su",
    value: 11
  }

]

function CardBottom() {
  return (
    <div className='bg-card-white pt-8 p-10 rounded-[1.25rem]'>
      <h1 className='text-dark-brown font-bold text-[2rem] mb-[66px] '>Spending - Last 7 days</h1>
      <div className=' w-full flex '></div>
    </div>
  )
}

export default CardBottom