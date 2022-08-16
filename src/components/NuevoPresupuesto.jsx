
import Mensaje from "./Mensaje"
import { useState } from "react"
const NuevoPresupuesto= ({presupuesto, setPresupuesto, setValidPresupuesto}) =>{
    
    const [mensaje, setMensaje]= useState('')

    const handlePresupuesto = e =>{
        e.preventDefault()
        if(!presupuesto || presupuesto < 0){
            setMensaje('No es un valor válido')
            return 
        }
            setMensaje('')
           setValidPresupuesto(true)
    }

    return(
        
        <div className="contenedor-presupuesto contenedor sombra">
        <form className="formulario" 
        onSubmit={handlePresupuesto}>
            <div className="campo">
                <label>Definir Presupuesto</label>
                <input 
                type="number" className="nuevo-presupuesto" placeholder="Añade tu presupuesto"
                value={presupuesto}
                onChange={(e) => setPresupuesto(Number(e.target.value))} // así el input sea text o number el resultado lo coloca como string por eso es que aqui se convierte anumber
                />
            </div>
                <input type="submit" value="Añadir"/> 
                {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>} 
        </form>  
    </div>  
        
    )
}
export default NuevoPresupuesto