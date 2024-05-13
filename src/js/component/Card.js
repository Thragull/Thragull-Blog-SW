import React from 'react';
import "../../styles/Card.css"
//import alterImage from "https://starwars-visualguide.com/assets/img/placeholder.jpg"

export const Card = (props) => {
  return (
    <div className='card rounded-4 mx-2'>
        <img src="https://starwars-visualguide.com/assets/img/placeholder.jpg" className="card-img-top rounded-top-4"  />
        <div className="card-body rounded-bottom-4">
          <h3 className="card-title">{props.name ? props.name : "Card Title"}</h3>
          <div className='row justify-content-between mt-4'>
            <button href="#" className="btn ms-3 more-btn col-6">Learn more!</button>
            <button href="#" className="btn me-3 like-btn col-2"><i className="fa-regular fa-heart"></i></button>
          </div>
        </div>
    </div>
  );
};

