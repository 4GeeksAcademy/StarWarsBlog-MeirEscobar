import useGlobalReducer from '../hooks/useGlobalReducer.jsx';
import { Link } from 'react-router-dom';
import { actionTypes } from '../store.js';

const CharacterCard = ({ id, name, gender, hairColor, eyeColor }) => {
  const { store, dispatch } = useGlobalReducer();
  const isFavourite = store.favorites.some(fav => fav.name === name);

  const handleAddToFav = () => {
    const action = isFavourite ? actionTypes.deleteFav : actionTypes.addToFav;
    dispatch({ type: action, payload: { name, id } });
  };
  
  return (
    <div className='card d-flex flex-row' style={{ width: '25rem' }}> 
      
      <div className="flex-shrink-0 w-30" style={{ maxWidth: '30%', minWidth: '30%' }}> 
        <img 
          src='/src/assets/img/placeholder.png' 
          className='img-fluid h-100 rounded-start' 
          alt='placeholder image' 
          style={{ objectFit: 'cover' }} 
        />
      </div>

      <div className='card-body d-flex flex-column justify-content-between p-3 w-70'>
        
        <div>
          <h4 className='card-title mb-3'>{name}</h4> 
          <ul className='list-unstyled mb-3 info-list'>
            <li><span className='card-text'>Sexo: {gender}</span></li>
            <li><span className='card-text'>Color de pelo: {hairColor}</span></li>
            <li><span className='card-text'>Color de ojos: {eyeColor}</span></li>
          </ul>
        </div>
        
        <div className='d-flex justify-content-between mt-3 pt-3 border-top border-secondary'>
          <Link 
            to={`details/character/${id}`} 
            className='btn border border-2 border-warning learn-more text-warning' 
          >
            Ver Ficha
          </Link>
          
          <button
            onClick={handleAddToFav}
            className={`heart-icon border ${isFavourite ? 'border-danger' : 'border-warning'} border-2 rounded p-1 d-flex justify-content-center align-items-center`}
          >
            <i className={`fa-${isFavourite ? 'solid' : 'regular'} fa-heart fs-3`}></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;