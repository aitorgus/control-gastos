import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'


const Header = (presupuesto, SetPresupuesto) => {
    return (
        <header>
            <h1>Planificador de Gastos</h1>

            <NuevoPresupuesto

                presupuesto={presupuesto}
                SetPresupuesto={SetPresupuesto}

            />
        </header>
    )
}

export default Header