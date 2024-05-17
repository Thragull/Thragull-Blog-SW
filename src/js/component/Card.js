import React from 'react';
import "../../styles/Card.css"
import { useNavigate } from 'react-router-dom';

export const Card = (props) => {

  const navigate = useNavigate()

  const handleLearnMore = () => {
    
  }

  return (
    <div className='card rounded-4 mx-2 d-flex flex-column'>
        <img 
            src={`https://starwars-visualguide.com/assets/img/${props.category}/${props.id}.jpg`} 
            onError={(element)=>{element.target.src="https://starwars-visualguide.com/assets/img/placeholder.jpg"}}
            className="card-img-top rounded-top-4"/>
        <div className="card-body rounded-bottom-4 d-flex flex-column justify-content-between">
          <h3 className="card-title">{props.name ? props.name : "Card Title"}</h3>
          <div className='row justify-content-between pt-3 mt-auto'>
            <button href="#" className="btn ms-3 more-btn col-6">Learn more!</button>
            <button href="#" className="btn me-3 like-btn col-2"><i className="fa-regular fa-heart"></i></button>
          </div>
        </div>
    </div>
  );
};
