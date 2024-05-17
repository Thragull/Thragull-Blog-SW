const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			count: 0,
			characters:[],
			starships:[],
			planets:[],
			vehicles:[],
			singleCharacter:{},
			singleStarship:{},
			singlePlanet:{},
			singleVehicle:{},
		},
		actions: {
			// Use getActions to call a function within a fuction
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			getCharacters: () => {
					fetch("https://www.swapi.tech/api/people/")
					.then((response)=> response.json())
					.then((data) => {setStore({characters: data['results']})})
					.catch((err) => err)
			},
			getStarships: () => {
				fetch("https://www.swapi.tech/api/starships/")
				.then((response)=> response.json())
				.then((data) => {setStore({starships: data['results']})})
				.catch((err) => err)
			},
			getPlanets: () => {
				fetch("https://www.swapi.tech/api/planets/")
				.then((response)=> response.json())
				.then((data) => {setStore({planets: data['results']})})
				.catch((err) => err)
			},
			getVehicles: () => {
				fetch("https://www.swapi.tech/api/vehicles/")
				.then((response)=> response.json())
				.then((data) => {setStore({vehicles: data['results']})})
				.catch((err) => err)
			},
			getSingleCharacter: (id) => {
				return new Promise ((resolve, reject) => {fetch("https://www.swapi.tech/api/people/"+id)
					.then((response)=> response.json())
					.then((data) => {setStore({singleCharacter: data['result']});
									resolve();
								})
					.catch((err) => reject(err))
				});
			},
			getSingleStarship: (id) => {
				return new Promise ((resolve, reject) => {fetch("https://www.swapi.tech/api/starships/"+id)
				.then((response)=> response.json())
				.then((data) => {setStore({singleStarship: data['result']})
								resolve();
							})
				.catch((err) => reject(err))
				});
			},
			getSinglePlanet: (id) => {
				return new Promise ((resolve, reject) => {fetch("https://www.swapi.tech/api/planets/"+id)
				.then((response)=> response.json())
				.then((data) => {setStore({singlePlanet: data['result']})
								resolve();
							})
				.catch((err) => reject(err))
				});
			},
			getSingleVehicle: (id) => {
				fetch("https://www.swapi.tech/api/vehicles/"+id)
				.then((response)=> response.json())
				.then((data) => {setStore({singleVehicle: data['result']})})
				.catch((err) => err)
			},
		}
	};
};

export default getState;
