
const ControlPresupuesto = ({presupuesto}) =>{
    
    const formatearCantidad = (cantidad) =>{ // esta función formatea la data para que se transforme a soles sin mutar el state inicial
     return  cantidad.toLocaleString('es-PE', {
            style:'currency',
            currency:'PEN'
        })
    }

    return(
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>
                <p>Gráfica aquí</p>
            </div>
            <div className="contenido-presupuesto">
                <p>
                    <span>Presupuesto: </span> {formatearCantidad(presupuesto)}
                </p>
                <p>
                    <span>Disponible: </span> {formatearCantidad(0)}
                </p>
                <p>
                    <span>Gastado: </span> {formatearCantidad(0)}
                </p>
            </div>
        </div>
    )
}

export default ControlPresupuesto