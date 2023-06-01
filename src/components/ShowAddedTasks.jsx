import React, { useState, useEffect } from "react";
import { FiTrash2, FiCheckCircle, FiRefreshCw, FiCalendar, FiFileText } from "react-icons/fi";

function ShowAddedTasks({ tasks, CompletedTask, showSearch, search, DeleteTask, RestoreTasks }) {
  const [day, setDay] = useState("");

  useEffect(() => {
    const weekday = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

    const day = new Date();
    setDay(weekday[day.getDay()]);
  });

  return (
    <div>
      <div className="space-y-5 flex flex-col items-center justify-center">
        {/* <h2 className="text-[15px] font-[700] text-left">
          Today <span className="text-[10px]">{day}</span>
        </h2> */}
        <div className="flex flex-col px-3 pt-5 space-y-5">
        <div className="flex flex-row space-x-3 px-3">
        <FiFileText />
        <h1 className="text-[14px]"> Tasks</h1>
        </div>
        
            <div className="flex flex-col space-y-5">
              {tasks.length > 0 ? (
                tasks.map((task, index) => {
                  const { id, title, Completed, DateAdded } = task;
                  return (
                    <div
                      className='flex flex-row items-center space-x-6 w-[300px] shadow-2xl py-5 px-2 rounded-[10px]'
                      key={id}
                    >
                      <button  onClick={() => CompletedTask(index, id)}><FiCheckCircle /></button>
                      <ul>
                        <li className="text-[18px] font-[600] text-blue">
                          {title}
                        </li>
                      </ul>
                      <div className="mt-5 ml-5">
                        <p className="text-[8px]"><FiCalendar />{DateAdded}</p>
                        </div>
                    </div>
                  );
                })
              ) : (
                <h2>
                  No task to show, click on the add button below to add new task
                </h2>
              )}
            </div>
          </div>
        </div>
      </div>
  );
}

export default ShowAddedTasks;
