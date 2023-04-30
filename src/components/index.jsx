import { useState, useEffect } from "react";
import TodoList from "./TodoList";
import AddTasks from "./AddTasks";
import ShowAddedTasks from "./ShowAddedTasks";

import { v4 as uniqueId } from "uuid";
import Search from "./Search";
import CompletedTasks from "./CompletedTasks";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

function AppContainer() {
  const [Click, setClick] = useState(false);
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")));
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState([]);
  const [msg, setMsg] = useState("");

  const AddTask = () => {
    setClick(true);
  };

  const handleAddTasks = e => {
    e.preventDefault();
    const TaskTitle = e.target.taskTitle.value.trim();
    const taskDescription = e.target.taskDescription.value.trim();
    const splitTaskTitle = TaskTitle.split("+");
    const splitTaskDescription = taskDescription.split("+");
    const TaskTitleLength = splitTaskTitle.length;
    const taskDescriptionLength = splitTaskDescription.length;

    if (TaskTitle && taskDescription) {
      let sucessMessage;
      for (let i = 0; i < TaskTitleLength && i < taskDescriptionLength; i++) {
        const newTask = {
          id: uniqueId(),
          title: splitTaskTitle[i],
          description: splitTaskDescription[i],
          Completed: false
        };
        setTasks(prev => [...prev, newTask]);
        e.target.taskTitle.value = "";
        e.target.taskDescription.value = "";
        sucessMessage = `Task ${newTask.id} added succesfully`;
        setMsg(sucessMessage);
        setTimeout(() => {
          sucessMessage = "";
          setMsg(sucessMessage);
        }, 3000);
      }
    } else {
     let sucessMessage = 'Please enter some text to continue'
      setMsg(sucessMessage);
      setTimeout(()=>{
        setMsg('')
      }, 3000)
    }
  };

  // Completed Task
  const TaskCompleted = index => {
    let errorMessage;
    const newTasks = [...tasks];
    newTasks[index].Completed = true;
    errorMessage = `Task ${index} deleted succesfully`;
    setMsg(errorMessage);
    setTasks(newTasks);
    setTimeout(() => {
      errorMessage = ``;
      setMsg();
    }, 3000);
  };

  // Deleted Tasks
  const DeleteTask = (id) =>{
    let deleteMsg;
    const DeletedTasks = tasks.filter(deletetasks => id !== deletetasks.id);
    deleteMsg = `Task ${id} has succefully been deleted`;
    setTasks(DeletedTasks);
    setMsg(deleteMsg)
    setTimeout(()=>{
      setMsg()
    }, 3000)
  }

  // Restore Tasks
  const RestoreTasks = (index) =>{
    let restoreMsg;
    const oldTasks = [...tasks];
    oldTasks[index].Completed = false;
    restoreMsg = `Task ${index} has succesfully been restored`;
    setMsg(restoreMsg)
    setTasks(oldTasks);
    setTimeout(()=>{
      setMsg()
    },2000)
  }

  //Search Tasks
  const setSearchHandler = e => {
    setSearch(e.target.value);
  };

  const SearchTasks = () => {
    var updatedList = tasks.filter(searchR =>
      searchR.title.toLowerCase().includes(search.toLowerCase())
    );
      setShowSearch(updatedList);
  };

  // Highlight the Clicked Search Reasults

  // const SearchHightlight = (id, index) =>{
  //   var showHightlight = tasks.filter(highlight => id === highlight.id);
  //   console.log(showHightlight[index].id);
  //   if (tasks[index].id === showHightlight[index].id) {
  //     console.log("True")
  //   }
  // }
  // Save Tasks to Local Storage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // // Save Completed Tasks to Local Storage
  // useEffect(()=>{
  //   localStorage.setItem('CompletedTasks', JSON.stringify(completedtask))
  // }, [completedtask])

  return (
    <div>
      <NavBar setSearchHandler={setSearchHandler}  showSearch={showSearch}
            search={search}
            SearchTasks={SearchTasks}/>
      <div className="flex flex-row">
        <div className="w-[100%] flex flex-col items-center justify-center mt-10">
          {msg ? (
            <div className="w-[auto] message show bg-success h-[40px] p-2 text-[15px] text-white text-center">
              {msg}
            </div>
          ) : (
            <div className="w-[500px] message close h-[40px] p-2 text-[15px] text-white text-center"></div>
          )}

          <ShowAddedTasks
            tasks={tasks}
            CompletedTask={TaskCompleted}
            DeleteTask={DeleteTask}
            RestoreTasks={RestoreTasks}
          />

          {Click ? "" : <div className="w-[100%] flex flex-col items-start justify-start container mt-10 px-[285px]"><AddTasks AddTask={AddTask} /></div>}
          {Click ? (
            <div className="mt-10">
                <TodoList
              CancelBtn={() => setClick(false)}
              handleAddTasks={handleAddTasks}
            />
            </div>
          
          
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default AppContainer;
