import React from "react";
import './formularios.css'

const ComponenteTerminos = (props) =>{
    return(
        <div className="contenedorTerminos">
          <label htmlFor={props.id}>
            <input type="checkbox" name={props.id} id={props.id} />
            {props.label}
          </label>
</div>
    );
}

export default ComponenteTerminos;



