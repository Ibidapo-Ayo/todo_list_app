import React from 'react'

function Search({setSearchHandler, search, SearchTasks, showSearch}) {
  return (
    <div className="">
     <input onInput={SearchTasks} type="text" className="p-2 border-2 border-blue focus:outline-blue"   placeholder="Make a search" value={search} onChange={setSearchHandler} />
     <div className="border-blue w-[300px] text-left border-2 absolute bg-white">
            {search.length < 1
              ? ""
              : showSearch.map((search, index) => {
                  const { id, title, description } = search;
                  return (
                    <div
                      className="cursor-pointer"
                      key={id}
                    >
                      <ul>
                        <li className="text-[18px] font-[600]">{title}</li>
                        <li className="text-[13px]">{description}</li>
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
