import logo from './logo.svg';
import './App.css';
import FreeCodeLogo from './componentes/freecodelogo.js';
import LstaDeTareas from './componentes/listadetareas.js';
import Tarea from './componentes/tarea.js';
import ListadeTareas from './componentes/listadetareas.js';
function App() {
  return (
    <div className="App">
      <FreeCodeLogo/>
      <div className='tarea-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListadeTareas/>
        
      </div>
    </div>
  );
}

export default App;
