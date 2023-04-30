import React, { useState, useEffect } from "react";

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
        <h2 className="text-[20px] font-[700]">
          Today <span className="text-[10px]">{day}</span>
        </h2>
        <div className="flex flex-col">
            <div className="grid grid-cols-2 gap-4">
              {tasks.length > 0 ? (
                tasks.map((task, index) => {
                  const { id, title, description, Completed } = task;
                  return (
                    <div
                      className={Completed ? 'bg-danger-200 flex flex-row items-center space-x-6 w-[350px] shadow-2xl p-3 rounded-[10px]': 'flex flex-row items-center space-x-6 w-[350px] shadow-2xl p-3 rounded-[10px]'}
                      key={id}
                    >
                      {Completed ?'': <input
                        type="checkbox"
                        className="cursor-pointer"
                        onClick={() => CompletedTask(index)}
                      />}
                      <ul style={{textDecoration: Completed ? 'line-through' : ''}}>
                        <li className="text-[18px] font-[600] text-blue">
                          {title}
                        </li>
                        <li className="text-[13px]">{description}</li>
                      </ul>
                      {Completed ? <div>
                        <button onClick={() => DeleteTask(id)}>Delete</button>
                        <button onClick={() => RestoreTasks(index)}>Restore</button>
                      </div>: ''}
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
