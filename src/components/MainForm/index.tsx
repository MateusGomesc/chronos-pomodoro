import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { useRef } from "react";

import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { Tips } from "../Tips";

import { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { TaskActionTypes } from "../../contexts/TaskContext/TaskActions";

export function MainForm(){
    const { state, dispatch } = useTaskContext()
    const TaskNameInput = useRef<HTMLInputElement>(null)

    // cycles
    const nextCycle = getNextCycle(state.currentCycle)
    const nextCycleType = getNextCycleType(nextCycle)

    const handleCreateNewTask = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        
        if(!TaskNameInput.current) return

        const taskName = TaskNameInput.current.value.trim()

        if(!taskName){
            alert('Digite o nome da tarefa')
            return
        }

        const newTask: TaskModel = {
            id: Date.now().toString(),
            name: taskName,
            startDate: Date.now(),
            completeDate: null,
            interruptDate: null,
            duration: state.config[nextCycleType],
            type: nextCycleType
        }

        dispatch({ type: TaskActionTypes.START_TASK, payload: newTask })
    }

    const handleInterruptTask = () => {
        dispatch({ type: TaskActionTypes.INTERRUPT_TASK })
    }

    return (
        <form onSubmit={handleCreateNewTask} className='form' action="">
            <div className="formRow">
                <DefaultInput 
                    type='text' 
                    id='defaultInput' 
                    label='Task' 
                    placeholder='Digite algo' 
                    ref={TaskNameInput} 
                    disabled={!!state.activeTask}
                />
            </div>
            <div className="formRow">
                <Tips/>
            </div>
            {state.currentCycle > 0 && (
                <div className="formRow">
                    <Cycles/>
                </div>
            )}
            <div className="formRow">
                {!state.activeTask ? (
                    <DefaultButton 
                        icon={<PlayCircleIcon/>}
                        type="submit" 
                        aria-label='Iniciar nova tarefa'
                        title='Iniciar nova tarefa'
                        key='submitButton'
                    />
                ) : (
                    <DefaultButton 
                        icon={<StopCircleIcon/>}
                        type="button" 
                        aria-label='Interromper tarefa atual'
                        title='Interromper tarefa atual'
                        color="red"
                        onClick={handleInterruptTask}
                        key='normalButton'
                    />
                )}
            </div>
        </form>
    )
}