import React from 'react'

function Search({setSearchHandler, search, SearchTasks, showSearch}) {
  return (
    <div className="">
    <div className="">
      <input type="text" onInput={SearchTasks}  value={search} onChange={setSearchHandler}  placeholder="Search Todo" className="w-[100%] text-[12px] bg-gray rounded-[30px] px-[13px] py-[10px] focus:outline-none text-[#000]"/>
    </div>
     <div className="border-blue w-[200px] text-left border-2 absolute bg-white">
            {search.length < 1
              ? ""
              : showSearch.map((search, index) => {
                  const { id, title, Completed } = search;
                  return (
                    <div
                      className="cursor-pointer"
                      key={id}
                    >
                      <ul>
                        {Completed ? <li className="text-[18px] font-[600] line-through bg-danger-200 ">{title}</li>:<li className="text-[18px] font-[600]">{title}</li>}
                      </ul>
                      <div></div>
                    </div>
                  );
                })}
                </div>
    </div>
  )
}

export default Search
