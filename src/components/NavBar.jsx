import React from 'react'
import Search from './Search';

function NavBar({setSearchHandler, search, SearchTasks, showSearch}) {
  return (
    <div className="w-100 p-3 px-[30px] bg-blue flex flex-row">
      <div className="w-1/4">
      <h1 className="text-[20px] font-[600] text-white">Toda</h1>
      </div>
      <div className="w-1/3">
      <Search
            setSearchHandler={setSearchHandler}
            search={search}
            SearchTasks={SearchTasks}
            showSearch={showSearch}
          />
      </div>
    </div>
  )
}

export default NavBar
