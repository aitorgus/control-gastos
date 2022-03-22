import { useState } from 'react'
import Mensaje from './Mensaje'

//OJO ERRORES -> Debo de hacer Destructuring para utilizar props
const NuevoPresupuesto = ({ presupuesto, setPresupuesto, setIsValidPresupuesto }) => {


    const [mensaje, setMensaje] = useState('')
    {/*Por defecto el valor será "false", debido a que la primera vez que carga, el valor predeterminado es 0 y no es válido aún */ }


    {/*Verificamos que sobre el input de presupuesto, no entre valores que no sean numéricos */ }

    const handlePresupuesto = (evento) => {
        evento.preventDefault();
        {/*Sólo se debe admitir un valor que sea tipo Number, por otro lado, el presupuesto no puede ser negativo, en el formulario
        ya hemos "obligado" a que sólo entren valores tipo number
    
    */ }
        if (!(presupuesto) || (presupuesto) < 0) {
            setMensaje("No es un presupuesto válido")

            return
            {/*Uso un return aquí para que rompa la linea de ejecución y no muestre por consola el resto de avisos */ }
        } else {
            {/*Reseteo setMensaje, si corrijo el dato del presupuesto, me va a eliminar el error */ }
            setMensaje('')
        }
    }
    return (
        <div className="contenedor-presupuesto contenedor sombra">


            <form onSubmit={handlePresupuesto} className="formulario" >
                <div className="campo">
                    <label >Definir Presupuesto</label>

                    <input type="number"
                        className="nuevo-presupuesto"
                        placeholder='Añade tu Presupuesto'
                        value={presupuesto}
                        onChange={evento => setPresupuesto(evento.target.value)}
                    />
                    {/*Va a imprimir el valor por defecto del presupuesto, el cual es 0
                         1º Con onChange, detecto cambios del valor del mismo, lo recojo con evento.target.value y me lo llevo a SetPresupuesto, que cambiará el valor de presupuesto

                         El formulario, sólo debe aceptar datos de tipo numérico, por lo que tenemos que validar el contenido que entra.

                    */}

                </div>

                <input type="submit" value="Añadir" />
                {/*Se mostrará en caso de que añadamos un valor tipo string o un number negativo */}
                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
            </form>
        </div>
    )
}

export default NuevoPresupuesto