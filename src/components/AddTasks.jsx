import React, { useState } from 'react'

function AddTasks({AddTask}) {
  return (
    <div className='flex flex-row space-x-3 w-[350px] h-[150px] items-center justify-center shadow-2xl p-3 rounded-[10px]'>
      <div onClick={AddTask} className="cursor-pointer flex flex-row items-center justify-start space-x-3 hover:text-blue">
      <span className='text-blue text-[70px] flex justify-center items-center hover:text-[80px]'>+ </span>
      </div>
    </div>
  )
}

export default AddTasks
