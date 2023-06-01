import {createContext, useState} from 'react';

export const tasksContext = createContext()

export const TaskProvider = ({children}) => {
    const [users, setUsers] = useState([])
    const [completedTask, setCompletedTask] = useState(JSON.parse(localStorage.getItem('CompletedTasks')))
    return(
        <tasksContext.Provider value={{
            loadUser: [users,setUsers],
            completedTasks: [completedTask, setCompletedTask]
            
            }}>
            {children}
        </tasksContext.Provider>
    )
}