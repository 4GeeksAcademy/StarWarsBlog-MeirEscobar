import useGlobalReducer from '../hooks/useGlobalReducer';
import { Link } from 'react-router-dom';
import { actionTypes } from '../store';

export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer();

	const handleDeletefavorite = (name) => {
		dispatch({ type: actionTypes.deleteFav, payload: name });
	};
	return (
		<nav className='navbar px-5 mb-4'>
			<div className='container-fluid'>
				<div className='logo'>
					<Link to='/' className='navbar-brand'>
						<img src='/src/assets/img/logo.png' alt='star wars logo' />
					</Link>
				</div>

				<div className='nav-item dropdown bg-danger text-white p-3 rounded d-flex'>
					<a
						className='nav-link dropdown-toggle'
						href='#'
						id='navbarDropdown'
						role='button'
						data-bs-toggle='dropdown'
						aria-expanded='false'
						data-bs-auto-close='false'
					>
						Favoritos &nbsp;
						<span className='bg-light text-dark p-1 rounded'>{store.favorites.length || 0}</span>
						&nbsp;
					</a>

					<ul className='dropdown-menu dropdown-menu-end' aria-labelledby='navbarDropdown'>
						{store.favorites.length > 0 ? (
							store.favorites.map((fav) => {
								const name = fav.name;
								return (
									<li key={name} className='dropdown-item'>
										{name}
										&nbsp;&nbsp;
										<i onClick={() => handleDeletefavorite(name)} className='fa-solid fa-trash'></i>
									</li>
								);
							})
						) : (
							<li className='dropdown-item text-center fst-italic'>( empty )</li>
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
};