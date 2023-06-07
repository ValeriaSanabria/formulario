import logo from './logo.svg';
import './App.css';
import { Formulario, Label, GrupoInput, Input, LeyendaError, IconoValidacion } from './elementos/Formulario';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
function App() {
  return (
    <main>
      <Formulario>
        <div>
          <Label htmlForm="nombre">Nombre completo</Label>
          <GrupoInput>
            <Input type="text" placeholder="nombre completo" id="nombre"/>
            <IconoValidacion icon={faCheckCircle} />
          </GrupoInput>
        </div>
        <div>
          <Label htmlForm='email'>Email</Label>
          <GrupoInput>
            <Input type="email" placeholder="email@correo.com" id='email'/>
            <IconoValidacion icon={faCheckCircle} />
          </GrupoInput>
          <LeyendaError>El email debe contener "@"</LeyendaError>
        </div>
        <div>
          <Label htmlFor='edad'>
            <input type="checkbox" name="edad" id="edad" />
            Soy mayor de 18 años
          </Label>
          <Label htmlFor='terminos'>
            <input type="checkbox" name="terminos" id="terminos" />
            Acepto los Terminos y Condiciones
          </Label>
        </div>
      </Formulario>
    </main>
    );

}



export default App;
