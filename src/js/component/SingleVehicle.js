//NOTE: At first I considered to use a single component for all Single Character, Planet, Starship and Vehicle.
//Specially because de format is pretty much the same. The idea was to Map the object stating the
//key and the value of it, but unfortunatelly the information coming from the API was dissorganise and this was 
//afecting the final result in the site, so I was forced to set individual component for each category.

import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export const SingleVehicle = () =>{
    
    const {category, id} = useParams()
    
    return(
        <div>
            <h2>Detalles de la tarjeta</h2>
            <p>Categoría: {category}</p>
            <p>ID: {id}</p>
            {/* Aquí puedes mostrar el resto de los detalles de la tarjeta */}
        </div>
    );
};