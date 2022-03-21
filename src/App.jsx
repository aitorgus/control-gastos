import { useState } from 'react'
import Header from './components/Header'

function App() {
  {/*El presupuesto por defecto es 0, hasta que el usuario indique un valor. */}
  const [presupuesto, SetPresupuesto] = useState(0);

  return (
    <div>
      {/*Utilizamos los props, para extraer las variables a otros componentes */}
      <Header
        presupuesto={presupuesto}
        SetPresupuesto={SetPresupuesto}
      />
    </div>
  )
}

export default App
