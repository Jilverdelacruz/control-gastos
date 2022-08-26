import { formatearFecha, gasto} from './helpers/index'
import iconoAhorro from '../img/icono_ahorro.svg'
import iconoCasa from '../img/icono_casa.svg'
import iconoComida from '../img/icono_comida.svg'
import iconoGastos from '../img/icono_gastos.svg'
import iconoOcio from '../img/icono_ocio.svg'
import iconoSalud from '../img/icono_salud.svg'
import iconoSuscripciones from '../img/icono_suscripciones.svg'

const Gastos = ({gasto}) =>{
   const {id, nombreGasto,cantidadGasto, categoria, fecha } = gasto
   
   const iconCategoria ={
    ahorro:iconoAhorro,
    comida:iconoComida,
    casa:iconoCasa,
    gastos:iconoGastos,
    ocio:iconoOcio,
    salud:iconoSalud,
    supcripciones:iconoSuscripciones
   }
    return (
        <div className="gasto sombra">
            <div className="contenido-gasto">
                <img src={iconCategoria[categoria]}/>
                <div className="descripcion-gasto">
                    <p className="categoria">{nombreGasto}</p>
                    <p className="nombre-gasto">{categoria}</p>
                    <p className='fecha-gasto'>
                    <span>{formatearFecha(fecha)}</span>
                    </p>
                    
                </div>
            </div>
            <p className='cantidad-gasto'>${cantidadGasto}</p>
        </div>
    )
}

export default Gastos