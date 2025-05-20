import { useEffect, useReducer } from "react"
import { initialTaskState } from "./initialTaskState"
import { TaskContext } from "./TaskContext"
import { taskReducer } from "./TaskReducer"

interface TaskContextProviderProps{
    children: React.ReactNode
}

export function TaskContextProvider({ children }: TaskContextProviderProps){
    const [state, dispatch] = useReducer(taskReducer, initialTaskState)

    // Monitoring state
    useEffect(() => {
        console.log(state)
    }, [state])

    return(
        <TaskContext.Provider value={{ state, dispatch }}>
            {children}
        </TaskContext.Provider>
    )
}