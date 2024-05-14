import React, {useState, useEffect, useContext} from "react";
import { Context } from "../store/appContext"
import "../../styles/home.css";
import { Cards } from "../component/Cards";

export const Home = () => {

	const {store, actions} = useContext(Context)

	useEffect(()=>{
		
	}, [])

	return(
		<div className="mt-5 pb-5 accordion accordion-flush">
			<Cards category="Characters"/>
			<Cards category="Starships"/>
			<Cards category="Planets"/>
			<Cards category="Vehicles"/>
		</div>
	);
};