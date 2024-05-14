import React, {useEffect, useState, useContext} from 'react';
import { Context } from '../store/appContext';
import "../../styles/Cards.css"
import { Card } from './Card';

export const Cards = (props) =>{
    
    const {store, actions} = useContext(Context)
    const [character, setCharacter] = useState(false)
    const [starship, setStarship] = useState(false)
    const [planet, setPlanet] = useState(false)
    const [vehicle, setVehicle] = useState(false)

    useEffect(()=>{
        switch (props.category){
            case "Characters":
                actions.getCharacters()
                setCharacter(true)
                break;
            case "Starships":
                actions.getStarships()
                setStarship(true)
                break;
            case "Planets":
                actions.getPlanets()
                setPlanet(true)
                break;
            case "Vehicles":
                actions.getVehicles()
                setVehicle(true)
                break;     
        }
    }, [props.category])
    return(
        <div className="accordion-item">
            <h1 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#${props.category}`} aria-expanded="false" aria-controls={props.category}>
                <span className='ms-3 my-3'>{props.category ? props.category : "Ejemplo"}</span>
            </button>
            </h1>
            <div id={props.category} className="accordion-collapse collapse mt-3">
                <div className="accordion-body d-flex pb-3 overflow-x-auto">
                    {character && store.characters.map((item)=>{return <Card key={item.uid} name={item.name} category={props.category.toLowerCase()} id={item.uid}/>})}
                    {starship && store.starships.map((item)=>{return <Card key={item.uid} name={item.name} category={props.category.toLowerCase()} id={item.uid}/>})}
                    {planet && store.planets.map((item)=>{return <Card key={item.uid} name={item.name} category={props.category.toLowerCase()} id={item.uid}/>})}
                    {vehicle && store.vehicles.map((item)=>{return <Card key={item.uid} name={item.name} category={props.category.toLowerCase()} id={item.uid}/>})}
                </div>
            </div>
        </div>
    );
};