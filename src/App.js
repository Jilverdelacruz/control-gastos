import Header from "./components/Header";
import ListadoGastos from "./components/ListadoGastos";
import IcoNuevoGasto from "./img/nuevo-gasto.svg"
import Modal from "./components/Modal";
import {generarId} from './components/helpers'
import {useState} from 'react'


function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const[validPresupuesto, setValidPresupuesto] = useState(false) // iniciar con false porque inicia con 0 y no es un presupuesto válido.
  const [modal, setModal] = useState(false) // porque al iniciar no tiene que aparecer el modal
  const [modalAnimado, setModalAnimado] = useState(false) // No inicia con la animación del modal
  const [gastos, setGastos] = useState([])
  

  const handleNuevoGasto = () => {
    setModal(true)

    setTimeout(() =>{
      setModalAnimado(true)
    }, 500)
  }

  // crearemos una funciona para obtener el objeto obtenido del formulario nuevo gasto
  const guardarGasto = gasto =>{
    gasto.id = generarId()
    setGastos([...gastos, gasto])
    setModalAnimado(false)
        setTimeout(() =>{   // lo hace de esta manera porque primero quita la animación porque usará el estilo que dice 
             setModal(false)
        }, 500)
    
  }

  return (
    <div>
        <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        validPresupuesto={validPresupuesto}
        setValidPresupuesto={setValidPresupuesto}
        />
     {validPresupuesto &&
        <>
          <main>
              <ListadoGastos 
              gastos={gastos}
              />
          </main>
          <div className="nuevo-gasto">
          <img 
          src={IcoNuevoGasto}
          alt='Nuevo Gasto'
          onClick={handleNuevoGasto}   
          />
          </div>
        </>
        
     }   
    
     {modal &&                // el && indica que si existe el modal muestra lo siguiente 
     <Modal 
     setModal={setModal}
     modalAnimado={modalAnimado}
     setModalAnimado={setModalAnimado}
     guardarGasto={guardarGasto}

     />
     }
    
    </div>
    
  );
}

export default App;
