import React, { useState } from "react";


function TodoList({ CancelBtn, handleAddTasks }) {
  return (
    <section className="bg-transparent rounded-[15px]  px-2 py-3 md:w-[700px] w-100">
      <div className="space-y-6">
        <form action="#" onSubmit={handleAddTasks}>
          <div className="flex flex-col space-y-4 text-white">
            {/* <label>Input Task</label> */}
            <textarea
              type="text"
              className="p-2 focus:outline-none bg-dark"
              id="taskTitle"
              placeholder="Go to meeting..."
            />
            {/* <textarea
              className="p-2 focus:outline-none bg-dark"
              id="taskDescription"
              placeholder="Description"
            /> */}
            <div className='flex justify-end space-x-5'>
            {/* <button className="bg-gray w-[100px] p-3 rounded-[10px] text-black" onClick={CancelBtn} >Cancel</button> */}
            <button
            id="AddBtn"
              className="bg-brandColor w-[100px] p-2 rounded-[10px] text-white cursor-pointer"
              type="submit" value='Add Task' 
            >
              Add Task 
            </button>
            </div>
          </div>
        </form>
      </div>
      
    </section>
  );
}

export default TodoList;
