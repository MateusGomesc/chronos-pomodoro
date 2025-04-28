import './styles/theme.css'
import './styles/global.css'

import { Home } from './pages/Home'
import { Notfound } from './pages/NotFound'
import { AboutPomodoro } from './pages/AboutPomodoro'

import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider'




export function App(){
    return(
        <TaskContextProvider>
            <Home/>
        </TaskContextProvider>
        
    )
}