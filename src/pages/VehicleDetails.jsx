import useGlobalReducer from '../hooks/useGlobalReducer';
import { useParams } from 'react-router-dom';
import { useState } from 'react'; // 👈 Importamos useState para manejar las pestañas

const VehicleDetails = () => {
    const { store } = useGlobalReducer();
    const { id } = useParams();
    const [activeTab, setActiveTab] = useState('overview'); // 👈 Estado para la pestaña activa

    if (!store.vehicles || !store.vehicles[id - 1]) {
        return <div className="container text-warning text-center mt-5">Cargando datos del vehículo...</div>;
    }

    const rawVehicle = store.vehicles[id - 1];

    const vehicleObj = {
        name: rawVehicle.name,
        crew: rawVehicle.crew,
        model: rawVehicle.model,
        vehicleClass: rawVehicle['vehicle_class'],
        manufacturer: rawVehicle.manufacturer,
        cargoCapacity: rawVehicle['cargo_capacity'],
        length: rawVehicle.length,
    };

    const overviewText = `El ${vehicleObj.name} (Modelo: ${vehicleObj.model}), fabricado por ${vehicleObj.manufacturer}, es un vehículo de clase ${vehicleObj.vehicleClass} esencial para el transporte en la galaxia. Ha jugado un papel fundamental en numerosos conflictos, desde el contrabando hasta las grandes batallas estelares.`;

    return (
        <div className='container details-container p-5 my-5'>
            <div className='row'>
                <div className='col-lg-6'>
                    <img 
                        className='img-fluid details-img' 
                        src='/src/assets/img/placeholdervehicles.png' 
                        alt={vehicleObj.name} 
                    />
                </div>
    
                <div className='col-lg-6 p-3 text-center d-flex align-items-center flex-column justify-content-center text-white'>
                    <h1 className='mb-4 text-warning text-center text-lg-start'>{vehicleObj.name}</h1>
                    <p className='text-white-50'>
                        {overviewText} Su longitud es de {vehicleObj.length} metros y su capacidad de carga es de {vehicleObj.cargoCapacity}, diseñado para ser operado por una tripulación de {vehicleObj.crew}.
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
                        El {vehicleObj.name} es un impresionante vehículo de clase {vehicleObj.vehicleClass}, conocido por su fiabilidad. Su modelo es el {vehicleObj.model} y fue fabricado por {vehicleObj.manufacturer}.
                    </p>
                </div>
            )}

            {activeTab === 'details' && (
                <div className='tab-pane active' role='tabpanel'>
                    <div className='row d-flex justify-content-center align-items-center info-row text-center text-white'>
                     <div className='col-lg-2 col-6 p-3'>
                      <h3 className='text-white-50 fs-5'>Crew:</h3>
                      <span className='text-warning fs-4'>{vehicleObj.crew}</span>
                     </div>
                     <div className='col-lg-2 col-6 p-3'>
                      <h3 className='text-white-50 fs-5'>Model:</h3>
                      <span className='text-warning fs-4'>{vehicleObj.model}</span>
                     </div>
                     <div className='col-lg-2 col-6 p-3'>
                      <h3 className='text-white-50 fs-5'>Company:</h3>
                      <span className='text-warning fs-4'>{vehicleObj.manufacturer}</span>
                     </div>
                     <div className='col-lg-2 col-6 p-3'>
                      <h3 className='text-white-50 fs-5'>Class:</h3>
                      <span className='text-warning fs-4'>{vehicleObj.vehicleClass}</span>
                     </div>
                     <div className='col-lg-2 col-6 p-3'>
                      <h3 className='text-white-50 fs-5'>Capacity:</h3>
                      <span className='text-warning fs-4'>{vehicleObj.cargoCapacity}</span>
                     </div>
                     <div className='col-lg-2 col-6 p-3'>
                      <h3 className='text-white-50 fs-5'>Length:</h3>
                      <span className='text-warning fs-4'>{vehicleObj.length}m</span>
                     </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VehicleDetails;
