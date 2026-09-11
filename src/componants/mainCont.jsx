import React from 'react'
import './mainCont.css'
function MainCont() {
  return (
    <div className='flex flex-col gap-6 w-full items-center justify-around'>
    
        <a className='text-2xl bg-[rgba(255,255,255,0.2)] w-3/4 md:max-w-150 text-center text-blue-50 p-2 shadow-[0px_0px_10px_white]'href="#">Deshboard</a>
        <a className='text-2xl bg-[rgba(255,255,255,0.2)] w-3/4 md:max-w-150 text-center text-blue-50 p-2 shadow-[0px_0px_10px_white]'href="#">Add Expenses</a>
        <a className='text-2xl bg-[rgba(255,255,255,0.2)] w-3/4 md:max-w-150 text-center text-blue-50 p-2 shadow-[0px_0px_10px_white]'href="#">Total Expenses</a>
        <a className='text-2xl bg-[rgba(255,255,255,0.2)] w-3/4 md:max-w-150 text-center text-blue-50 p-2 shadow-[0px_0px_10px_white]'href="#">Category wise Expense</a>
        <a className='text-2xl bg-[rgba(255,255,255,0.2)] w-3/4 md:max-w-150 text-center text-blue-50 p-2 shadow-[0px_0px_10px_white]'href="#">Show all Expenses</a>
        <a className='text-2xl bg-[rgba(255,255,255,0.2)] w-3/4 md:max-w-150 text-center text-blue-50 p-2 shadow-[0px_0px_10px_white]'href="#">Save to file</a>
    </div>
    
  )
}

export default MainCont
