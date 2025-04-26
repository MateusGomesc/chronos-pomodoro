import { StopCircleIcon } from "lucide-react";

import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";

export function MainForm(){
    return (
        <form className='form' action="">
            <div className="formRow">
                <DefaultInput type='text' id='defaultInput' label='Task' placeholder='Digite algo' />
            </div>
            <div className="formRow">
                <p>
                    Lorem ipsum dolor sit amet.
                </p>
            </div>
            <div className="formRow">
                <Cycles/>
            </div>
            <div className="formRow">
                <DefaultButton icon={<StopCircleIcon/>} color='red' />
            </div>
        </form>
    )
}