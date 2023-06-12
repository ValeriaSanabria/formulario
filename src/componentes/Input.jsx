import React from "react";
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './formularios.css';



const ComponenteInput = (props) =>{
    return(
        <div>
            <label htmlFor={props.id}>{props.label}</label>
            <div className="grupoInput">
                <input type={props.type} placeholder={props.placeholder} id={props.id}/>
                <FontAwesomeIcon className="iconoValidacion" icon={faCheckCircle} />
            </div>
        </div>
    );
}

export default ComponenteInput;