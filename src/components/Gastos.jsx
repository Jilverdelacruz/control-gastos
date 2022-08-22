
const Gastos = ({gasto}) =>{
   const {nombreGasto, categoria } = gasto
    return (
        <div className="gasto sombra">
            <div className="contenido-gasto">

                <div className="descripcion-gasto">
                    <p className="categoria">{nombreGasto}</p>
                    <p className="nombre-gasto">{categoria}</p>
                    
                </div>
            </div>
        </div>
    )
}

export default Gastos