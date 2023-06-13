import { useState, useEffect, useContext } from "react";
import TodoList from "./TodoList";
import AddTasks from "./AddTasks";
import ShowAddedTasks from "./ShowAddedTasks";

import { v4 as uniqueId } from "uuid";
import Search from "./Search";
import CompletedTasks from "./CompletedTasks";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import { FiFileText } from "react-icons/fi";
import { tasksContext } from "./taskContext";

function AppContainer() {
  const [Click, setClick] = useState(false);
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")));
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState([]);
  const [msg, setMsg] = useState("");
  const [user, setUser] = useState('')
  const {completedTasks} = useContext(tasksContext)
  const [completedTask, setCompletedTask] = completedTasks;

  const AddTask = () => {
    setClick(true);
  };

  const handleAddTasks = e => {
    e.preventDefault();
    const TaskTitle = e.target.taskTitle.value.trim();
    const splitTaskTitle = TaskTitle.split("+");
    const TaskTitleLength = splitTaskTitle.length;

    if (TaskTitle) {
      let sucessMessage;
      for (let i = 0; i < TaskTitleLength; i++) {
        const newTask = {
          id: uniqueId(),
          title: splitTaskTitle[i],
          Completed: false,
          DateAdded: new Date().toJSON().slice(0, 10)
        };
        setTasks(prev => [...prev, newTask]);
        e.target.taskTitle.value = "";
        sucessMessage = `Task ${newTask.id} added succesfully`;
        setMsg(sucessMessage);
        setTimeout(() => {
          sucessMessage = "";
          setMsg(sucessMessage);
        }, 3000);
      }
    } else {
      let sucessMessage = "Please enter some text to continue";
      setMsg(sucessMessage);
      setTimeout(() => {
        setMsg("");
      }, 3000);
    }
  };

  // Completed Task
  const TaskCompleted = index => {
    let errorMessage;
    const newTasks = [...tasks];
    newTasks[index].Completed = true;
    errorMessage = `Task ${index} completed succesfully`;
    setMsg(errorMessage);
    const completed = tasks.filter(completed => completed.Completed === true)
    const notCompletedTasks = tasks.filter(notcompleted => notcompleted.Completed !== true)
    setTasks(notCompletedTasks)
    setCompletedTask(prev => [...prev, completed])
    setTimeout(() => {
      errorMessage = ``;
      setMsg();
    }, 3000);
  };

  // Deleted Tasks
  const DeleteTask = id => {
    let deleteMsg;
    const DeletedTasks = completedTask.filter(deletetasks => id !== deletetasks[0].id);
    deleteMsg = `Task ${id} has succefully been deleted`;
    setCompletedTask(DeletedTasks)
    setMsg(deleteMsg);
    setTimeout(() => {
      setMsg();
    }, 3000);
  };
  //Search Tasks
  const setSearchHandler = e => {
    setSearch(e.target.value);
  };

  const SearchTasks = () => {
    var updatedList = tasks.filter(searchR => searchR.title.toLowerCase().includes(search.toLowerCase())
    );
    setShowSearch(updatedList);
  };
  // Save Tasks to Local Storage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(()=>{
    localStorage.setItem('CompletedTasks', JSON.stringify(completedTask))
  }, [completedTask])

  // Show Registered Users
  const loadUser = (users) =>{
    setUser(users)
  }

  return (
    <div className="bg-homeBg md:h-[100vh] flex md:flex-row flex-col w-100 h-[100%] pb-10">
      <SideBar 
      AddTask={AddTask}
        setSearchHandler={setSearchHandler}
        showSearch={showSearch}
        search={search}
        SearchTasks={SearchTasks}
      />

      <div className="w-[350px] border-gray md:border-r-2 text-white">
        <ShowAddedTasks
          tasks={tasks}
          CompletedTask={TaskCompleted}
        />
      </div>
      <div className="px-3 pt-3">
        <div className="flex flex-row items-center space-x-3 text-white">
        {msg ? (
            <div className="w-[auto] message show bg-success h-[40px] p-2 text-[15px] text-white text-center">
              {msg}
            </div>
          ) : (
            <div className="w-[auto] message close h-[40px] p-2 text-[15px] text-white text-center">{msg}</div>
          )}
          <FiFileText />
          <h1 className="text-[18px]"> Add Tasks</h1>
        </div>
        <div className="mt-2">
          <TodoList
            CancelBtn={() => setClick(false)}
            handleAddTasks={handleAddTasks}
          />
        </div>

        <div className="pt-3 text-white">
          <h1>CompletedTasks</h1>
          <CompletedTasks  DeleteTask={DeleteTask} />
        </div>
      </div>
      {/* <NavBar
        setSearchHandler={setSearchHandler}
        showSearch={showSearch}
        search={search}
        SearchTasks={SearchTasks}
      />
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

          {Click ? (
            ""
          ) : (
            <div className="w-[100%] flex flex-col items-start justify-start container mt-10 px-[285px]">
              <AddTasks AddTask={AddTask} />
            </div>
          )}
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
      </div> */}
    </div>
  );
}

export default AppContainer;
