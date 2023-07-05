import ComponenteInput from './componentes/Input'
import ComponenteTerminos from './componentes/Terminos';

const Formulario = () => {

    return(
        <form className='formulario' onSubmit={enviarDatos}>
        <ComponenteInput 
          label="Nombre Completo"
          placeholder="Juan Perez"
          id="nombre"
          name="nombre"/>
        <ComponenteInput 
          label="Ciudad"
          placeholder="Ingrese ciudad"
          id="ciudad"/>
        <ComponenteInput 
          label="Email"
          placeholder="email@correo.com"
          type="email"
          id="email"/>
        <ComponenteInput 
          label="Numero de telefono"
          placeholder="2901xxxxxx"
          type="number"
          id="telefono"/>

        <ComponenteTerminos
          label="Soy mayor de 18 años" 
          id="edad"/>
          <ComponenteTerminos
          label="Acepto los terminos y condiciones"
          id="terminos" />

        {/* {false && <MensajeError>
          <p>
            <FontAwesomeIcon icon={faExclamationTriangle}/>
            <b>Error:</b> Por favor rellena el formulario correctamente.
          </p>
        </MensajeError>} */}

        <div className="contenedorBotonCentrado">
          <button type='submit'>Enviar</button>
          <p className="mensajeExito">Formulario enviado exitosamente!</p>
        </div>
      </form>
    );
}

export default Formulario;

