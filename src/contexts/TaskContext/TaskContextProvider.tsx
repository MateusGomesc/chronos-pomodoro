import { useEffect, useReducer, useRef } from "react"
import { initialTaskState } from "./initialTaskState"
import { TaskContext } from "./TaskContext"
import { taskReducer } from "./TaskReducer"
import { TimerWorkerManager } from "../../workers/timerWorkerManager"
import { TaskActionTypes } from "./TaskActions"
import { loadBeep } from "../../utils/loadBeep"

interface TaskContextProviderProps{
    children: React.ReactNode
}

export function TaskContextProvider({ children }: TaskContextProviderProps){
    const [state, dispatch] = useReducer(taskReducer, initialTaskState)
    let playBeepRef = useRef<() => void | null>(null)

    const worker = TimerWorkerManager.getInstance()

    worker.onmessage(e => {
        const countDownSeconds = e.data
        console.log(countDownSeconds)


        if(countDownSeconds <= 0){
            if(playBeepRef.current){
                playBeepRef.current()
                playBeepRef.current = null
            }
            dispatch({ type: TaskActionTypes.COMPLETE_TASK })
            worker.terminate()
        }
        else{
            dispatch({ type: TaskActionTypes.COUNT_DOWN, payload: { secondsRemaining: countDownSeconds } })
        }
    })

    useEffect(() => {
        console.log(state)
        if(!state.activeTask){
            worker.terminate()
        }

        worker.postMessage(state)
    }, [worker, state])

    useEffect(() => {
        if(state.activeTask && playBeepRef.current === null){
            playBeepRef.current = loadBeep()
        }
        else{
            playBeepRef.current = null
        }
    }, [state.activeTask])

    return(
        <TaskContext.Provider value={{ state, dispatch }}>
            {children}
        </TaskContext.Provider>
    )
}