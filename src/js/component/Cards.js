import React from 'react';
import "../../styles/Cards.css"
import { Card } from './Card';

export const Cards = (props) =>{
    return(
        <div className="accordion-item">
            <h1 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                <span className='ms-3 my-3'>{props.category ? props.category : "Ejemplo"}</span>
            </button>
            </h1>
            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show mt-3">
                <div className="accordion-body d-flex pb-3 overflow-x-auto">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    );
};