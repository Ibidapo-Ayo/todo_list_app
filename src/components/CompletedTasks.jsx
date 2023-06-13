import React, { useContext } from "react";
import { tasksContext } from "./taskContext";
import { FiTrash2, FiRefreshCw, FiCalendar } from "react-icons/fi";
function CompletedTasks({DeleteTask}) {
  const {completedTasks} = useContext(tasksContext)
  const [completedTask, setCompletedTask] = completedTasks;  
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-2 mt-5">
   {
     completedTask.map((complete, index) =>{
      //  const {id, title, DateAdded, Completed} = complete;
       return(
        <div
        className='bg-danger-200 flex flex-row items-center space-x-6 w-[300px] shadow-2xl p-3 rounded-[10px]'
        key={complete[0].id}
      >
          <button onClick={() => DeleteTask(complete[0].id)}><FiTrash2 /></button>
        <ul style={{textDecoration: complete[0].Completed ? 'line-through' : ''}}>
          <li className="text-[18px] font-[600] text-blue">
            {complete[0].title}
          </li>
        </ul>
        <div className="mt-5 ml-5">
          <p className="text-[8px]"><FiCalendar />{complete[0].DateAdded}</p>
          </div>
       
      </div>
       )
     })}
    </div>
  );
}

export default CompletedTasks;
