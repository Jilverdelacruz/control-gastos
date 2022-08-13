import CerrarModal from '../img/cerrar.svg'

const Modal = ({setModal, modalAnimado, setModalAnimado}) =>{

    const handleCerrarModal = () =>{
       
        setModalAnimado(false)
        setTimeout(() =>{   // lo hace de esta manera porque primero quita la animación porque usará el estilo que dice 
             setModal(false)
        }, 500)
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
            <form className={`formulario ${modalAnimado? "animar" : 'cerrar'}`}> // su esa template string para hacer una condiicion
                    <legend>Nuevo Gasto</legend>
            </form>
       
        </div>
    )
}
export default Modal