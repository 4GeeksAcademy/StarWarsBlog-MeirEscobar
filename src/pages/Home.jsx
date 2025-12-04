import useGlobalReducer from '../hooks/useGlobalReducer.jsx';
import { actionTypes } from '../store.js';
import { useEffect } from 'react';
import { getAllCharacters, getAllPlanets, getAllVehicles } from '../services/fetch.js';
import CharacterCard from '../card/CharacterCard.jsx';
import PlanetCard from '../card/PlanetCard.jsx';
import VehicleCard from '../card/VehicleCard.jsx';

const Home = () => {
 const { store, dispatch } = useGlobalReducer();

 useEffect(() => {
   const init = async () => {
    // start all requests in parallel
    const charsP = getAllCharacters();
    const planetsP = getAllPlanets();
    const vehiclesP = getAllVehicles();

    // dispatch each result as it resolves; ensure fallback to empty array
    charsP.then((characters) => dispatch({ type: actionTypes.getCharacters, payload: characters || [] })).catch(() => dispatch({ type: actionTypes.getCharacters, payload: [] }));
    planetsP.then((planets) => dispatch({ type: actionTypes.getPlanets, payload: planets || [] })).catch(() => dispatch({ type: actionTypes.getPlanets, payload: [] }));
    vehiclesP.then((vehicles) => dispatch({ type: actionTypes.getVehicles, payload: vehicles || [] })).catch(() => dispatch({ type: actionTypes.getVehicles, payload: [] }));
   };
   init();
 }, []);

 return (
  <div className='container-fluid star-wars-home'> 
      
   <div className='row mb-3 pt-5'>
    <h2 className='text-warning fs-1'>Personajes</h2>
   </div>
   <div className='row'>
    {store.characters &&
     store.characters.map((character, index) => {
      return (
       <div key={index} className='col-xxl-3 col-lg-4 col-md-6 mb-5 d-flex'>
        <CharacterCard
         id={index + 1}
         name={character.name}
         gender={character.gender}
         hairColor={character['hair_color']}
         eyeColor={character['eye_color']}
        />
       </div>
      );
     })}
   </div>
      

   <div className='row mb-3 pt-5'>
    <h2 className='text-warning fs-1'>Planetas</h2>
   </div>
   <div className='row'>
    {store.planets &&
     store.planets.map((planet, index) => {
      return (
       <div key={index} className='col-xxl-3 col-lg-4 col-md-6 mb-5 d-flex'>
        <PlanetCard
         id={index + 1}
         name={planet.name}
         population={planet.population}
         diameter={planet.diameter}
         terrain={planet.terrain}
        />
       </div>
      );
     })}
   </div>
   <div className='row mb-3 pt-5'>
    <h2 className='text-warning fs-1'>Vehiculos</h2>
   </div>
   <div className='row pb-5'>
    {store.vehicles &&
     store.vehicles.map((vehicle, index) => {
      return (
       <div key={index} className='col-xxl-3 col-lg-4 col-md-6 mb-5 d-flex'>
        <VehicleCard
         id={index + 1}
         name={vehicle.name}
         model={vehicle.model}
         crew={vehicle.crew}
         manufacturer={vehicle.manufacturer}
        />
       </div>
      );
     })}
   </div>
  </div>
 );
};

export default Home;