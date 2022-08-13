
const Mensaje = ({children, tipo}) =>{
    return (// se puso llaves y el uso del backtick `` para integrar un variable dentro de la clase
        <div className={`alerta ${tipo}`}> 
            {children}
        </div>
    )
}

export default Mensaje