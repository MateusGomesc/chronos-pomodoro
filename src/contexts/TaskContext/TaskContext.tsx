import { createContext } from "react"
import { TaskStateModel } from "../../models/TaskStateModel"
import { initialTaskState } from "./initialTaskState"
import { TaskActionModel } from "./TaskActions"

interface TaskContextProps{
    state: TaskStateModel
    dispatch: React.Dispatch<TaskActionModel>
}

const initialContextValue = {
    state: initialTaskState,
    dispatch: () => {}
}

export const TaskContext = createContext<TaskContextProps>(initialContextValue)