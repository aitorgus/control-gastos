import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'

//OJO ERRORES -> Debo de hacer Destructuring para utilizar props
const Header = ({ presupuesto, setPresupuesto }) => {
    return (
        <header>
            <h1>Planificador de Gastos</h1>

            <NuevoPresupuesto

                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}

            />
        </header>
    )
}

export default Header