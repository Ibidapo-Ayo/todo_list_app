import {createContext} from 'react';

const tasksContext = createContext()

export const taskProvider = ({children}) =>{
    return(
        <tasksContext.Provider value={}>
            {children}
        </tasksContext.Provider>
    )
}