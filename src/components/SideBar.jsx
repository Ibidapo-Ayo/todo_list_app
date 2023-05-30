import React from 'react'
import { FiSettings, FiHome, FiCheckCircle, FiTrash2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Search from './Search';

function SideBar({AddTask,setSearchHandler, search, SearchTasks, showSearch}) {
  return (
    <div className="h-[100vh] w-[250px] border-gray border-r-[1px] px-5 py-5 flex flex-col space-y-5">
    <div className="flex flex-row items-center justify-between">
    <div>
      <span className="text-[13px] text-gray">Ibidapo Ayomide</span>
    </div>
    <div>
      <FiSettings />
    </div>
    </div>
    <Search
            setSearchHandler={setSearchHandler}
            search={search}
            SearchTasks={SearchTasks}
            showSearch={showSearch}
          />
    <div className="">
     <button onClick={AddTask} className="w-[100%] text-[20px] bg-brandColor rounded-[30px] px-[13px] text-white py-[6px] focus:outline-none cursor-not-allowed">+</button>
    </div>

    <div>
      <ul className="text-[12px] text-gray space-y-3">
        <div className="flex flex-row space-x-3 cursor-pointer text-[13px] px-3 py-2 hover:bg-gray rounded-[20px] items-center text-white">
        <FiHome />
        <li>Home</li>
        </div>
        <div className="flex flex-row space-x-3 cursor-not-allowed text-[13px] px-3 py-2 bg-danger-200 rounded-[20px] items-center text-white">
        <FiTrash2 />
        <li>Trash</li>
        </div>
      </ul>
    </div>
    </div>
  )
}

export default SideBar
