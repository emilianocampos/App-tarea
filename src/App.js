import './App.css';
import tarea from './img/tarea.png'
import logo from './img/logo.png'
import ListaTarea from './components/ListaTarea'
function App() {
  return (
    <div className="aplicacion-tareas">


      <div className='logo-contenedor'>

        <img src={logo} className='logo' alt=''></img>

      </div>

      <div className='tarea-lista-principal'>

        <h1>Mis Tareas</h1>

        <div className='logo-contenedor'>

          <img src={tarea} className='tar' alt=''></img>

        </div>

        <ListaTarea />
      </div>


    </div>
  );
}

export default App;
