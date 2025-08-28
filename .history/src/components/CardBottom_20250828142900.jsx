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
    let {value} = maxChart;

    return `${((h  * 100) / value).toFixed(1)}% `
    // return "h-[150px]"
  }
  
  return (
    <div className='bg-card-white pt-8 p-10 rounded-[1.25rem]'>
      <h1 className='text-dark-brown font-bold text-[2rem] mb-[66px] '>Spending - Last 7 days</h1>
      <ul className=' w-full flex justify-between gap-2 '>
        {chartData.map((ch) => {
          <li className='w-[3.125rem] text-center flex flex-col gap-2' key={ch.id}>

            <div className='h-[150px] flex items-end relative'>
              
              <div style={{height: chartHeight(ch.value) }}
               className={`chart-item rounded-[5px] w-full ${
                ch.value == maxChart.value ? "bg-cyan" : "bg-red"
              } relative ` }>
                <span className='absolute -top-2 left-[50%] -translate-x-[50%] -translate-y-[100%]'>${ch.value}</span>
              </div>
            </div>
            <span className='w-full'>{ch.weekdays}</span>
          </li>
        })}
      </ul>
      <span className='w-[460px] h-0.5 bg-card-white'></span>
      <div>
      <span className="text-medium-brown font-normal leading-[1]">Total this month</span>
      <span className='text-dark-brown text- '></span>
      </div>
    </div>
  )
}

export default CardBottom