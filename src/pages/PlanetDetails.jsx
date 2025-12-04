import useGlobalReducer from '../hooks/useGlobalReducer';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const PlanetDetails = () => {
 const { store } = useGlobalReducer();
 const { id } = useParams();
 const [activeTab, setActiveTab] = useState('overview');

    if (!store.planets || !store.planets[id - 1]) {
        return <div className="container text-warning text-center mt-5">Cargando datos del planeta...</div>;
    }

 const planetObj = {
  name: store.planets[id - 1].name,
  climate: store.planets[id - 1].climate,
  diameter: store.planets[id - 1].diameter,
  terrain: store.planets[id - 1].terrain,
  gravity: store.planets[id - 1].gravity,
  orbitalPeriod: store.planets[id - 1]['orbital_period'],
  population: store.planets[id - 1].population,
 };

 return (
  <div className='container details-container p-5 my-5'>
   <div className='row'>
    <div className='col-lg-6'>
     <img className='img-fluid details-img' src='/src/assets/img/placeholder.png' alt='placeholder img' />
    </div>
    <div className='col-lg-6 p-3 text-center d-flex align-items-center flex-column justify-content-center text-white'>
     <h1 className='mb-4 text-warning'>{planetObj.name}</h1>
     <p className='text-white-50'>
      {planetObj.name} es un mundo de {planetObj.terrain} con una atmósfera de {planetObj.climate}. Con una población de {planetObj.population} habitantes y una gravedad de {planetObj.gravity}, es un planeta vital para el equilibrio de la galaxia. Su diámetro de {planetObj.diameter} kilómetros lo convierte en un cuerpo celeste de gran tamaño, completando su órbita en solo {planetObj.orbitalPeriod} días terrestres.
     </p>
    </div>
   </div>
   
   <div className='details-divider my-5'></div>
   
   <ul className='nav nav-tabs text-white mb-4' role='tablist'>
    <li className='nav-item' role='presentation'>
     <button className={`nav-link ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => setActiveTab('overview')} type='button' role='tab'>Overview</button>
    </li>
    <li className='nav-item' role='presentation'>
     <button className={`nav-link ${activeTab === 'details' ? 'active' : ''}`} onClick={() => setActiveTab('details')} type='button' role='tab'>Details</button>
    </li>
   </ul>

   {activeTab === 'overview' && (
    <div className='tab-pane active' role='tabpanel'>
     <p className='text-white-50 text-center'>
      {planetObj.name} es un mundo de {planetObj.terrain} con una atmósfera de {planetObj.climate}. Con una población de {planetObj.population} habitantes y una gravedad de {planetObj.gravity}, es un planeta vital para el equilibrio de la galaxia.
     </p>
    </div>
   )}

   {activeTab === 'details' && (
    <div className='tab-pane active' role='tabpanel'>
     <div className='row d-flex justify-content-center align-items-center info-row text-center text-white'>
      <div className='col-lg-2 col-6 p-3'>
       <h3 className='text-white-50 fs-5'>Population:</h3>
       <span className='text-warning fs-4'>{planetObj.population}</span>
      </div>
      <div className='col-lg-2 col-6 p-3'>
       <h3 className='text-white-50 fs-5'>Climate:</h3>
       <span className='text-warning fs-4'>{planetObj.climate}</span>
      </div>
      <div className='col-lg-2 col-6 p-3'>
       <h3 className='text-white-50 fs-5'>Terrain:</h3>
       <span className='text-warning fs-4'>{planetObj.terrain}</span>
      </div>
      <div className='col-lg-2 col-6 p-3'>
       <h3 className='text-white-50 fs-5'>Gravity:</h3>
       <span className='text-warning fs-4'>{planetObj.gravity}</span>
      </div>
      <div className='col-lg-2 col-6 p-3'>
       <h3 className='text-white-50 fs-5'>Orbital Period:</h3>
       <span className='text-warning fs-4'>{planetObj.orbitalPeriod}</span>
      </div>
      <div className='col-lg-2 col-6 p-3'>
       <h3 className='text-white-50 fs-5'>Diameter:</h3>
       <span className='text-warning fs-4'>{planetObj.diameter}</span>
      </div>
     </div>
    </div>
   )}
  </div>
 );
};

export default PlanetDetails;