import { TaskModel } from "../models/TaskModel";

export interface SortTasksOptions{
    tasks: TaskModel[]
    direction?: 'asc' | 'desc'
    field?: keyof TaskModel
}

export function sortTasks({ field='startDate', direction='desc', tasks=[] }: SortTasksOptions): TaskModel[]{
    return [...tasks].sort((a, b) => {
        // taking proprieties values chosen
        const aValue = a[field]
        const bValue = b[field]

        // null values
        if(aValue === null && bValue === null) return 0
        if(aValue === null) return 1
        if(bValue === null) return -1

        // numeric compare
        if(typeof aValue === 'number' && typeof bValue === 'number')
            return direction === 'asc' ? aValue - bValue : bValue - aValue

        // string compare
        if(typeof aValue === 'string' && typeof bValue === 'string')
            return direction === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue)

        return 0
    })
}