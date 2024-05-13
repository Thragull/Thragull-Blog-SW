const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			count: 0,
			characters:[],
			starships:[],
			planets:[],
			vehicles:[]
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
				.then((data) => {setStore({starships: data['results']})})
				.catch((err) => err)
			}
		}
	};
};

export default getState;
