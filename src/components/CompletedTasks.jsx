import React from "react";
function CompletedTasks({ completedtask }) {
  return (
    <div className="flex flex-col space-y-5">
      {completedtask.length > 0 ? (
          completedtask.map(complete =>{
              const {id, title, description } = complete;
              return (
                <div className="flex flex-row justify-between bg-danger-200 text-danger-100 items-center space-x-6 w-[350px] shadow-2xl p-3 rounded-[10px]" key={id}>
                <ul>
                  <li className="text-[18px] font-[600] text-danger-100 db-stike">
                  <strike>{title}</strike>
                  </li>
                  <li className="text-[13px]"> <strike>{description}</strike> </li>
                </ul>
                <div>
                    <p className="cursor-pointer">delete</p>
                </div>
              </div>
              )
          })
      ) : "0 Completed Tasks"}
    </div>
  );
}

export default CompletedTasks;
