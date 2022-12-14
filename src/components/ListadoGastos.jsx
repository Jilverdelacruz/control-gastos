import Gasto from "./Gastos"

const ListadoGastos = ({gastos}) =>{ 
    return(

        <div className="listado-gastos contenedor">
            <h2>{gastos.length ? 'Gastos' : 'No has agregado gastos'}</h2>
            {gastos.map(gasto =>
            <Gasto 
            key={gasto.id}
            gasto={gasto}
            />
            )}
        </div>
    )
}

export default ListadoGastos