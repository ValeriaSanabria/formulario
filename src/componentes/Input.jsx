import React, {useState} from "react";
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './formularios.css';


const ComponenteInput = (props) =>{

    const [datos, setDatos] = useState ({
        nombre: '',
        email: ''
    
      })
    
      const handleInputChange = (event) => {
        console.log(event.target.value);
        setDatos({
          ...datos,
          [event.target.name] : event.target.value
        })
      }
    return(
        <div>
            <label htmlFor={props.id}>{props.label}</label>
            <div className="grupoInput">
                <input type={props.type} placeholder={props.placeholder} id={props.id} onChange={handleInputChange}/>
                <FontAwesomeIcon className="iconoValidacion" icon={faCheckCircle} />
            </div>
            <h3>{datos.nombre}</h3>
        </div>
    );
}

export default ComponenteInput;