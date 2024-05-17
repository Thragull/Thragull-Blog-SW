//NOTE: At first I considered to use a single component for all Single Character, Planet, Starship and Vehicle.
//Specially because de format is pretty much the same. The idea was to Map the object stating the
//key and the value of it, but unfortunatelly the information coming from the API was dissorganise and this was 
//afecting the final result in the site, so I was forced to set individual component for each category.

import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext"
import "../../styles/SingleCard.css"

export const SingleCharacter = () =>{

    const {store, actions} = useContext(Context)
    const [dataLoaded, setDataLoaded] = useState(false)
    const [planetLoaded, setPlanetLoaded] = useState(false)
    const {id} = useParams()
    
    useEffect(()=>{
        if (!dataLoaded){
            actions.getSingleCharacter(id)
                .then(()=>setDataLoaded(true))
                .catch((error) => console.log(error))
        }
        else if (!planetLoaded){
            const urlPlanet = store.singleCharacter.properties.homeworld.split('/')
            const planetId = urlPlanet[urlPlanet.length-1]

            actions.getSinglePlanet(planetId)
                .then(()=>setPlanetLoaded(true))
                .catch((error) => console.log(error))
        }
    }, [store.singleCharacter, dataLoaded, planetLoaded])    
    
    if (dataLoaded && planetLoaded){
        return(
            <div className="container row bgSingleCard rounded-5 py-4">
                <div className="col-12 col-lg-4">
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} 
                        onError={(element)=>{element.target.src="https://starwars-visualguide.com/assets/img/placeholder.jpg"}}
                        className="img-fluid rounded-3"/>
                </div>
                <div className="col-12 col-lg-8 row dataText">
                    <div className="col-12">
                        <h1 className="singleName text-center">{store.singleCharacter.properties.name.toLowerCase()}</h1>
                    </div>
                    <div className="col-12 col-xl-6">Height: {store.singleCharacter.properties.height} cm</div>
                    <div className="col-12 col-xl-6">Weight: {store.singleCharacter.properties.mass} Kg</div>
                    <div className="col-12 col-xl-6">Gender: {store.singleCharacter.properties.gender} </div>
                    <div className="col-12 col-xl-6">Hair Color: {store.singleCharacter.properties.hair_color}</div>
                    <div className="col-12 col-xl-6">Eye Color: {store.singleCharacter.properties.eye_color} </div>
                    <div className="col-12 col-xl-6">Skin Color: {store.singleCharacter.properties.skin_color}</div>
                    <div className="col-12 col-xl-6">Birth: {store.singleCharacter.properties.birth_year} </div>
                    <div className="col-12 col-xl-6">Home Planet: {store.singlePlanet.properties.name}</div>
                </div>
            </div>
        );
    }
    else{
        return(
            <img src="https://media2.giphy.com/media/JsDzMHc0Edo4YnDQxP/200w.gif?cid=6c09b9527pxbsm4fz11ieesmfzymnd9jmv5cmk8ytzbi5uhf&ep=v1_gifs_search&rid=200w.gif&ct=g"/>
        );
    };
};