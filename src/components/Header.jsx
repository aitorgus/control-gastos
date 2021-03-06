import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'

//OJO ERRORES -> Debo de hacer Destructuring para utilizar props
const Header = ({ gastos,setGastos,
    presupuesto
    , setPresupuesto,
    isValidPresupuesto,
    setIsValidPresupuesto
}) => {
    return (
        <header>
            <h1>Planificador de Gastos</h1>

            {/*Carga condicional de componentes, en funcion de si el presupuesto es válido o no
            Si es válido mostramos: 
            SI NO es válido, mostramos el Nuevo presupuesto 
            */}
            {isValidPresupuesto ? (

                <ControlPresupuesto
                    gastos={gastos}
                    setGastos={setGastos}
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                    setIsValidPresupuesto={setIsValidPresupuesto}
                />

            ) : (
                <NuevoPresupuesto

                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                    setIsValidPresupuesto={setIsValidPresupuesto}
                />
            ) }

        </header>
    )
}

export default Header