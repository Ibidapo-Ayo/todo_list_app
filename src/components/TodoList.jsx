import React, { useState } from "react";


function TodoList({ CancelBtn, handleAddTasks }) {
  return (
    <section className="bg-white rounded-[15px] border-gray border-[1px] px-2 py-3 w-[700px]">
      <div className="space-y-6">
        <form action="#" onSubmit={handleAddTasks}>
          <div className="flex flex-col space-y-4">
            {/* <label>Input Task</label> */}
            <textarea
              type="text"
              className="p-2 focus:outline-none"
              id="taskTitle"
              placeholder="Task Title"
            />
            <textarea
              className="p-2 focus:outline-none"
              id="taskDescription"
              placeholder="Description"
            />
            <div className='flex justify-end space-x-5'>
            <button className="bg-gray w-[100px] p-3 rounded-[10px] text-black" onClick={CancelBtn} >Cancel</button>
            <button
            id="AddBtn"
              className="bg-blue w-[100px] p-3 rounded-[10px] text-white opacity-1000 cursor-pointer"
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
