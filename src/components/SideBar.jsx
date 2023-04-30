import React from 'react'

function SideBar() {
  return (
    <div className="h-[100vh] w-[100px] bg-blue p-3">
    <div className="flex flex-col">
    <ul>
        <li>Add new Task</li>
        <li>Recent Added Tasks</li>
    </ul>
    </div>
    </div>
  )
}

export default SideBar
