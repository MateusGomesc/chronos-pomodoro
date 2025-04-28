import { TaskStateModel } from "./TaskStateModel"

export interface TaskModel{
    id: string
    name: string
    duration: number
    startDate: number
    completeDate: number | null
    interruptDate: number |null
    type: keyof TaskStateModel['config']
}