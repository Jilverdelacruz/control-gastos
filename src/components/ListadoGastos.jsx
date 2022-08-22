import Gasto from "./Gastos"

const ListadoGastos = ({gastos}) =>{
 console.log(gastos.length)
    return(

        <div className="listado-gastos contenedor">
            <h2>{gastos.length ? 'Gastos' : 'No has agregado gastos'}</h2>
            {gastos.map(gasto =>
            <Gasto 
            gasto={gasto}
            />
            )}
        </div>
    )
}

export default ListadoGastos