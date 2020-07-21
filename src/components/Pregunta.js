import React, {Fragment, useState} from 'react';
import Error from './Error';

const Pregunta = ({guardarRestante, guardarPresupuesto, actualizarPregunta}) => {

    //definir el state
    const[cantidad, guardarCantidad]=useState(0);
    const[error, guardarError]=useState(false);

    //Función que lee el presupuesto
    const definirPresupuesto = (e)=>{
        guardarCantidad(parseInt(e.target.value, 10))
        // console.log(cantidad)
    }

    
    //submit para definir presupuesto
    const agregarPresupuesto = (e)=>{
        e.preventDefault();
        // console.log('funciona')

        // //vamos a validar
        
        if(cantidad <1 || isNaN(cantidad)){
            // console.log('funciona2')
            guardarError(true);
            return;
        }
        guardarError(false);
        //si se pasa la validacion
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);
        
    }



    return ( 
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            {error ? <Error mensaje='El Presupuesto es incorrecto'/>  :null}
            <form
            onSubmit={agregarPresupuesto}
            >
                <input
                type='number'
                className='u-full-width'
                placeholder='Coloca tu presupuesto'
                onChange={definirPresupuesto}
                />
                <input
                type='submit'
                className='button-primary u-full-width'
                value='Definir Presupuesto'
                />
            </form>
        </Fragment>

     );
}
 
export default Pregunta;