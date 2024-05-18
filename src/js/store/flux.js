const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            count: 0,
            characters: [],
            starships: [],
            planets: [],
            vehicles: [],
            singleCharacter: {},
            singleStarship: {},
            singlePlanet: {},
            singleVehicle: {},
            pilotList: []
        },
        actions: {
            getCharacters: (page = 1) => {
                const store = getStore();
                return fetch(`https://www.swapi.tech/api/people?page=${page}&limit=10`)
                    .then((response) => response.json())
                    .then((data) => {
                        setStore({ characters: [...store.characters, ...data.results] });
                        return data.next !== null; // Devuelve true si hay más páginas
                    })
                    .catch((err) => {
                        console.error(err);
                        return false; // En caso de error, considera que no hay más páginas
                    });
            },
            getStarships: (page = 1) => {
                const store = getStore();
                return fetch(`https://www.swapi.tech/api/starships?page=${page}&limit=10`)
                    .then((response) => response.json())
                    .then((data) => {
                        setStore({ starships: [...store.starships, ...data.results] });
                        return data.next !== null;
                    })
                    .catch((err) => {
                        console.error(err);
                        return false;
                    });
            },
            getPlanets: (page = 1) => {
                const store = getStore();
                return fetch(`https://www.swapi.tech/api/planets?page=${page}&limit=10`)
                    .then((response) => response.json())
                    .then((data) => {
                        setStore({ planets: [...store.planets, ...data.results] });
                        return data.next !== null;
                    })
                    .catch((err) => {
                        console.error(err);
                        return false;
                    });
            },
            getVehicles: (page = 1) => {
                const store = getStore();
                return fetch(`https://www.swapi.tech/api/vehicles?page=${page}&limit=10`)
                    .then((response) => response.json())
                    .then((data) => {
                        setStore({ vehicles: [...store.vehicles, ...data.results] });
                        return data.next !== null;
                    })
                    .catch((err) => {
                        console.error(err);
                        return false;
                    });
            },
            getSingleCharacter: (id) => {
                return new Promise((resolve, reject) => {
                    fetch(`https://www.swapi.tech/api/people/${id}`)
                        .then((response) => response.json())
                        .then((data) => {
                            setStore({ singleCharacter: data.result });
                            resolve();
                        })
                        .catch((err) => reject(err));
                });
            },
            getSingleStarship: (id) => {
                return new Promise((resolve, reject) => {
                    fetch(`https://www.swapi.tech/api/starships/${id}`)
                        .then((response) => response.json())
                        .then((data) => {
                            setStore({ singleStarship: data.result });
                            resolve();
                        })
                        .catch((err) => reject(err));
                });
            },
            getSinglePlanet: (id) => {
                return new Promise((resolve, reject) => {
                    fetch(`https://www.swapi.tech/api/planets/${id}`)
                        .then((response) => response.json())
                        .then((data) => {
                            setStore({ singlePlanet: data.result });
                            resolve();
                        })
                        .catch((err) => reject(err));
                });
            },
            getSingleVehicle: (id) => {
                return new Promise((resolve, reject) => {
                    fetch(`https://www.swapi.tech/api/vehicles/${id}`)
                        .then((response) => response.json())
                        .then((data) => {
                            setStore({ singleVehicle: data.result });
                            resolve();
                        })
                        .catch((err) => reject(err));
                });
            },
            getPilots: (urls) => {
                const store = getStore();
                const pilotPromises = urls.map(url =>
                    fetch(url)
                        .then(response => response.json())
                        .then(data => data.result.properties.name)
                );

                return Promise.all(pilotPromises)
                    .then(pilotNames => {
                        setStore({ pilotList: pilotNames });
                    })
                    .catch(err => console.error(err));
            },
            clearPilotsList: () => {
                setStore({ pilotList: [] });
            }
        }
    };
};

export default getState;
