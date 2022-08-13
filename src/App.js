import Header from "./components/Header";
import IcoNuevoGasto from "./img/nuevo-gasto.svg"
import Modal from "./components/Modal";
import {useState} from 'react'

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const[validPresupuesto, setValidPresupuesto] = useState(false) // iniciar con false porque inicia con 0 y no es un presupuesto válido.
  const [modal, setModal] = useState(false) // porque al iniciar no tiene que aparecer el modal
  const [modalAnimado, setModalAnimado] = useState(false) // No inicia con la animación del modal

  const handleNuevoGasto = () => {
    setModal(true)

    setTimeout(() =>{
      setModalAnimado(true)
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
        <div className="nuevo-gasto">
        <img 
        src={IcoNuevoGasto}
        alt='Nuevo Gasto'
        onClick={handleNuevoGasto}   
        />
        </div>
     }   
    
     {modal &&                // el && indica que si existe el modal muestra lo siguiente 
     <Modal 
     setModal={setModal}
     modalAnimado={modalAnimado}
     setModalAnimado={setModalAnimado}
     />
     }
    </div>
    
  );
}

export default App;
