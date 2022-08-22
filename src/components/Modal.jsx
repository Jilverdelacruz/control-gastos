import { useState } from 'react'            // PRIMERO IMPORTA EL USESTATE
import Mensaje from './Mensaje'                                           // LUEGO IMPORTA UN COMPONENTE
import CerrarModal from '../img/cerrar.svg'  // FINALMENTE IMPORTA UNA IMAGEN


const Modal = ({setModal, modalAnimado, setModalAnimado, guardarGasto}) =>{
    const [nombreGasto, setNombreGasto] = useState('')
    const [cantidadGasto, setCantidadGasto] = useState('')
    const [categoria, setCategoria] =useState('')
    const [mensaje, setMensaje] = useState('')

    const handleCerrarModal = () =>{
       
        setModalAnimado(false)
        setTimeout(() =>{   // lo hace de esta manera porque primero quita la animación porque usará el estilo que dice 
             setModal(false)
        }, 500)
    }

    // Validacion para guardar gasto
    const handleGasto = e =>{
        e.preventDefault()
        if([nombreGasto, cantidadGasto, categoria].includes('')){
            setMensaje('Completar todos los Campos')
            setTimeout(()=>{
                setMensaje('')
            }, 2000)
            return;
        }
        // si en caso pasa la validación lo guardamos en estado
        guardarGasto({nombreGasto, cantidadGasto, categoria})
        setNombreGasto('')
        setCantidadGasto('')
        setCategoria('')

    }
    return (
        <div className="modal">
            <div className='cerrar-modal'>
                <img
                src={CerrarModal}
                alt='Cerrar Modal'
                onClick={handleCerrarModal}
                />
            </div>
            <form className={`formulario ${modalAnimado? "animar" : 'cerrar'}`}
            onSubmit={handleGasto}
            > // su esa template string para hacer una condiicion
                    <legend>Nuevo Gasto</legend>
                    {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
                    <div className='campo'>
                        <label htmlFor='nombre'> Nombre de Gasto</label>
                        <input 
                        id='nombre'
                        type='text'
                        placeholder='Añade el Nombre del Gasto'
                        value={nombreGasto}
                        onChange={e=>setNombreGasto(e.target.value)}
                        />
                    </div>
                    <div className='campo'>
                        <label htmlFor='gasto'> Cantidad de de Gasto</label>
                        <input 
                        id='gasto'
                        type='number'
                        placeholder='Añade la cantidad del Gasto'
                        value={cantidadGasto}
                        onChange={e =>setCantidadGasto(Number(e.target.value))}
                        />
                    </div>
                    <div className='campo'>
                        <label htmlFor='categoria'> Categoría</label>
                        <select
                        id='categoria'
                        value={categoria}
                        onChange={e => setCategoria(e.target.value)}
                        >
                            <option value=''>--Seleccione--</option>
                            <option value='ahorro'>Ahorro</option>
                            <option value='comida'>Comida</option>
                            <option value='casa'>Casa</option>
                            <option value='gastos'>Gastos varios</option>
                            <option value='ocio'>Ocio</option>
                            <option value='salud'>Salud</option>
                            <option value='supcripciones'>Suscripciones</option>
                     
                        </select>
                    </div>
                    <input 
                    type='submit'
                    value='Añadit Gasto'
                    />
            </form>
       
        </div>
    )
}
export default Modal