import useGlobalReducer from '../hooks/useGlobalReducer';
import { useParams } from 'react-router-dom';

const VehicleDetails = () => {
    const { store } = useGlobalReducer();
    const { id } = useParams();

    if (!store.vehicles || !store.vehicles[id - 1]) {
        return <div className="container text-warning text-center mt-5">Cargando datos del vehículo...</div>;
    }

const vehicleObj = {
    name: store.vehicles[id - 1].name,
    crew: store.vehicles[id - 1].crew,
    model: store.vehicles[id - 1].model,
    vehicleClass: store.vehicles[id - 1]['vehicle_class'],
    manufacturer: store.vehicles[id - 1].manufacturer,
    cargoCapacity: store.vehicles[id - 1]['cargo_capacity'],
    length: store.vehicles[id - 1].length,
};

return (
    <div className='container details-container p-5 my-5'>
        <div className='row'>
            <div className='col-lg-6'>
                <img className='img-fluid details-img' src='/src/assets/img/placeholder.png' alt='placeholder img' />
                </div>
    
                <div className='col-lg-6 p-3 text-center d-flex align-items-center flex-column justify-content-center text-white'>
                    <h1 className='mb-4 text-warning'>{vehicleObj.name}</h1>
     <p className='text-white-50'>
      El {vehicleObj.name} (Modelo: {vehicleObj.model}), fabricado por {vehicleObj.manufacturer}, es un vehículo de clase {vehicleObj.vehicleClass} esencial para el transporte en la galaxia. Con una longitud de {vehicleObj.length} metros y una capacidad de carga de {vehicleObj.cargoCapacity}, está diseñado para ser operado por una tripulación de {vehicleObj.crew}. Ha jugado un papel fundamental en numerosos conflictos, desde el contrabando hasta las grandes batallas espaciales.
     </p>
    </div>
   </div>
   
   <div className='details-divider my-5'></div>
   
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
 );
};

export default VehicleDetails;