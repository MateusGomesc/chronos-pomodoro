import { useEffect, useState } from "react"
import { initialTaskState } from "./initialTaskState"
import { TaskContext } from "./TaskContext"

interface TaskContextProviderProps{
    children: React.ReactNode
}

export function TaskContextProvider({ children }: TaskContextProviderProps){
    const [state, setState] = useState(initialTaskState)

    // Monitoring state
    useEffect(() => {
        console.log(state)
    }, [state])

    return(
        <TaskContext.Provider value={{ state, setState }}>
            {children}
        </TaskContext.Provider>
    )
}