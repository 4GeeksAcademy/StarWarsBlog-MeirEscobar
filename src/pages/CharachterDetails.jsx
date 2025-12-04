import useGlobalReducer from '../hooks/useGlobalReducer.jsx';
import { useParams } from 'react-router-dom';

const CharacterDetails = () => {
    const { store } = useGlobalReducer();
    const { id } = useParams();

    const characterData = store.characters ? store.characters[Number(id) - 1] : null;

    if (!characterData) {
        return <div className="container text-warning text-center mt-5">Cargando datos del personaje...</div>;
    }

    const characterObj = {
        name: characterData.name,
        birthYear: characterData['birth_year'],
        gender: characterData.gender,
        height: characterData.height,
        mass: characterData.mass,
        eyeColor: characterData['eye_color'],
        skinColor: characterData['skin_color'],
    };

    return (
        <div className='container details-container p-5 my-5'>
            
            <div className='row mb-5'>
                
                <div className='col-lg-5 mb-4 mb-lg-0'>
                    <img 
                        className='img-fluid details-img w-100'
                        src='/src/assets/img/placeholder.png' 
                        alt={characterObj.name} 
                    />
                </div>
                
                <div className='col-lg-7 p-4 text-white d-flex flex-column justify-content-center'>
                    <h1 className='mb-4 text-warning text-center text-lg-start'>{characterObj.name}</h1>
                    <p className='text-white-50 fs-5' style={{ lineHeight: '1.8' }}>
                        **{characterObj.name}** es una figura crucial en la galaxia, con un pasado tan enigmático como su presente. Desde su año de nacimiento (**{characterObj.birthYear}**) ha demostrado ser una fuerza a tener en cuenta. Su historia está marcada por decisiones audaces que definieron su destino en las Guerras Clon y la posterior era del Imperio Galáctico. Es conocido por su estatura de **{characterObj.height}cm** y su particular color de piel (**{characterObj.skinColor}**), características que lo hacen inconfundible.
                    </p>
                </div>
            </div>

            <div className='details-divider my-5'></div>
            
            <h2 className='text-warning text-center mb-4'>Especificaciones Técnicas</h2>
            
            <div className='row justify-content-center info-row text-center text-white'>
                
                <div className='col-lg-10'>
                    <ul className='list-unstyled d-flex flex-wrap justify-content-around'>
                        <li className='col-lg-3 col-md-6 p-3'>
                            <h3 className='text-white-50 fs-5'>HEIGHT:</h3>
                            <span className='text-warning fs-3'>{characterObj.height}cm</span>
                        </li>
                        <li className='col-lg-3 col-md-6 p-3'>
                            <h3 className='text-white-50 fs-5'>BIRTH YEAR:</h3>
                            <span className='text-warning fs-3'>{characterObj.birthYear}</span>
                        </li>
                        <li className='col-lg-3 col-md-6 p-3'>
                            <h3 className='text-white-50 fs-5'>GENDER:</h3>
                            <span className='text-warning fs-3'>{characterObj.gender}</span>
                        </li>
                        <li className='col-lg-3 col-md-6 p-3'>
                            <h3 className='text-white-50 fs-5'>MASS:</h3>
                            <span className='text-warning fs-3'>{characterObj.mass}kg</span>
                        </li>
                    </ul>
                </div>
                
                <div className='w-100 my-3' style={{ borderTop: '1px dashed rgba(255, 255, 255, 0.1)' }}></div>
                
                <div className='col-lg-10'>
                    <ul className='list-unstyled d-flex flex-wrap justify-content-around'>
                        <li className='col-lg-3 col-md-6 p-3'>
                            <h3 className='text-white-50 fs-5'>EYE COLOR:</h3>
                            <span className='text-warning fs-3'>{characterObj.eyeColor}</span>
                        </li>
                        <li className='col-lg-3 col-md-6 p-3'>
                            <h3 className='text-white-50 fs-5'>SKIN COLOR:</h3>
                            <span className='text-warning fs-3'>{characterObj.skinColor}</span>
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
    );
};

export default CharacterDetails;