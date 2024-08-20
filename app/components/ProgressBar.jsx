import React from 'react'

const ProgressBar = ({meter,perc}) => {
  return (
    <div className='my-2'>
        <div>{meter}</div>
        <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-slate-200">
            <div class="bg-orange-600 h-2.5 rounded-full" style={{width: `${perc}%`}}></div>
        </div>
    </div>
  )
}

export default ProgressBar

