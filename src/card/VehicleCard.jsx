import useGlobalReducer from '../hooks/useGlobalReducer.jsx';
import { Link } from 'react-router-dom';
import { actionTypes } from '../store.js';

const VehicleCard = ({ id, name, model, crew, manufacturer }) => {
    const { store, dispatch } = useGlobalReducer();
    const isFavourite = store.favorites.some(fav => fav.name === name);

    const handleAddToFav = () => {
        const action = isFavourite ? actionTypes.deleteFav : actionTypes.addToFav;
        dispatch({ type: action, payload: { name, id } });
    };

    const favBtnClasses = `
        heart-icon border 
        ${isFavourite ? 'border-danger' : 'border-warning'} 
        border-2 rounded d-flex justify-content-center align-items-center
    `;

    const favIconClasses = `
        fa-${isFavourite ? 'solid' : 'regular'} fa-heart fs-4 p-1 
        ${isFavourite ? 'text-danger' : 'text-warning'}
    `;

    return (
        <div className='card d-flex flex-row' style={{ width: '25rem' }}> 
            
            <div className="flex-shrink-0 w-30" style={{ maxWidth: '30%', minWidth: '30%' }}> 
                <img 
                    src='/src/assets/img/logo.png' 
                    className='img-fluid h-100 rounded-start' 
                    alt='Vehicle Placeholder' 
                    style={{ objectFit: 'cover' }} 
                />
            </div>

            <div className='card-body d-flex flex-column justify-content-between p-3 w-70'>
                
                <div>
                    <h5 className='card-title mb-3'>{name}</h5> 
                    
                    <ul className='list-unstyled mb-3 info-list'>
                        <li><span className='card-text'>Model: {model}</span></li>
                        <li><span className='card-text'>Crew: {crew}</span></li>
                        <li><span className='card-text'>Manufacturer: {manufacturer}</span></li>
                    </ul>
                </div>
                
                <div className='d-flex justify-content-between mt-3 pt-3 border-top border-secondary'>
                    <Link 
                        to={`details/vehicle/${id}`} 
                        className='btn border border-2 border-warning learn-more text-warning' 
                    >
                        Ver Detalles
                    </Link>
                    
                    <button
                        onClick={handleAddToFav}
                        className={favBtnClasses}
                    >
                        <i className={favIconClasses}></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VehicleCard;