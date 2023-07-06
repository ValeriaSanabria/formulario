import React from "react";
import './modal.css'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Modal = ( ) => {
    return(
        <>
            <div>
                <div className="container">
                    <div className="encabezado">
                        <h3>Titulo</h3>
                    </div>
                    <button>
                    <FontAwesomeIcon className="boton" icon={faCircleXmark} />
                    </button>
                </div>
            </div>
        </>
    )
};

export default Modal;
