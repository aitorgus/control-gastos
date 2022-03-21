import React from 'react'


//OJO ERRORES -> Debo de hacer Destructuring para utilizar props
const NuevoPresupuesto = ({ presupuesto, setPresupuesto }) => {
    return (
        <div className="contenedor-presupuesto contenedor sombra">


            <form className="formulario" >
                <div className="campo">
                    <label >Definir Presupuesto</label>

                    <input type="text"
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
            </form>
        </div>
    )
}

export default NuevoPresupuesto