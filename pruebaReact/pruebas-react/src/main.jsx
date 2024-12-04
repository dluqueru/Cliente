import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Ternario from './Ternario.jsx'
import Amper from './&&.jsx'
import DrinkList from './If.jsx'
import Ejercicio1 from './Ejercicio1.jsx'
import Ejercicio2 from './Ejercicio2.jsx'
import Ejercicio3 from './Ejercicio3.jsx'
import Ejercicio4 from './Ejercicio4.jsx'
import Ejercicio5 from './Ejercicio5.jsx'
import Ejercicio6 from './Ejercicio6.jsx'
import Ejercicio7 from './Ejercicio7.jsx'
import Contador from './estados/Counter.jsx'
import CambiadorTexto from './estados/CambiadorTexto.jsx'
import MostrarOcultar from './estados/MostrarOcultar.jsx'
import ClickCounter from './estados/ClickCounter.jsx'
import ClickLimiter from './estados/ClickLimiter.jsx'
import TaskList from './estados/TaskList.jsx'
import ShowRequest from './estados/ShowRequest.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Ternario /> */}
    {/* <Amper /> */}
    {/* <DrinkList /> */}
    {/* <Ejercicio1 /> */}
    {/* <Ejercicio2 /> */}
    {/* <Ejercicio3 /> */}
    {/* <Ejercicio4 /> */}
    {/* <Ejercicio5 /> */}
    {/* <Ejercicio6 /> */}
    {/* <Ejercicio7 /> */}
    {/* <Contador /> */}
    {/* <CambiadorTexto /> */}
    {/* <MostrarOcultar /> */}
    {/* <ClickCounter /> */}
    {/* <ClickLimiter /> */}
    <TaskList />
    {/* <ShowRequest /> */}
  </StrictMode>
)
