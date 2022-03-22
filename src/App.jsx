import { useState } from 'react'
import Header from './components/Header'

function App() {
  {/*El presupuesto por defecto es 0, hasta que el usuario indique un valor. */ }
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)

  return (
    <div>
      {/*Utilizamos los props, para extraer las variables a otros componentes */}
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />
    </div>
  )
}

export default App
