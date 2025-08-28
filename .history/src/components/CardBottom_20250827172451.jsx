import React from 'react'

const chartData = [
  {
    id: 1,
    weekdays: "mo",
    value: 42
  },
  {
    id: 2,
    weekdays: "mo",
    value: 42
  },
  {
    id: 1,
    weekdays: "mo",
    value: 42
  },
  {
    id: 1,
    weekdays: "",
    value: 42
  },
  {
    id: 1,
    weekdays: "fr",
    value: 42
  },
  {
    id: 7,
    weekdays: "sa",
    value: 42
  },
  {
    id: 7,
    weekdays: "su",
    value: 42
  }

]

function CardBottom() {
  return (
    <div className='bg-card-white pt-8 p-10 rounded-[1.25rem]'>
      <h1 className='text-dark-brown font-bold text-[2rem] mb-[66px] '>Spending - Last 7 days</h1>
    </div>
  )
}

export default CardBottom