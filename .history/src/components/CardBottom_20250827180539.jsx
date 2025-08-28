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
  const [maxChart] = [...chartData].sort((a, b) => {
    return b.value - a.value
  })

  function chartHeight(h) {
    return "h-[150px]"
  }
  
  return (
    <div className='bg-card-white pt-8 p-10 rounded-[1.25rem]'>
      <h1 className='text-dark-brown font-bold text-[2rem] mb-[66px] '>Spending - Last 7 days</h1>
      <ul className=' w-full flex justify-between gap-2 '>
        {chartData.map((ch) => {
          <li className='w-[3.125rem] text-center flex flex-col gap-2' key={ch.id}>
            <div className={`rounded-[5px] w-full ${chartHeight} ${
              

            }`
              ch.value == maxChart.value ? `` ${chartHeight} w-full bg-cyan` : ' ${chart} w-full bg-red'}></div>
            <span className='w-full'>{ch.weekdays}</span>
          </li>
        })}
      </ul>
    </div>
  )
}

export default CardBottom