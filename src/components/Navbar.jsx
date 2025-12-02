import { Link } from "react-router-dom";

//Cambiar todo el MockStore cuando tenga el store original montado

export const Navbar = ({handleDeletefavorite}) => {

	const mockStore = {
  // Simula la parte del store que contiene los favoritos
  favorites: [
    { name: "Luke Skywalker" },
    { name: "Millennium Falcon" },
    { name: "Tatooine" }
  ]
};

	return (
		<nav className="navbar navbar-light bg-secondary">
			<div className="container-fluid">
				<div className="logo">
					<img src='/src/assets/img/logo.png' alt='logo' width="80" height="80"/>
					<p>Every character have a jarjar meme (for any reason, boostrap bug?)</p>
				</div>
				<div className="nav-item dropdown bg-warning text-white p-3 rounded d-flex">
					<a className="nav-link dropdown-toggle bg-warning" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="false">
   						&nbsp;Favorites 			
						<span className='text-light p-1 rounded'>{mockStore.favorites.length || 0}</span>&nbsp;
					</a>
					<ul className='dropdown-menu dropdown-menu-end' aria-labelledby='navbarDropdown'>
						{mockStore.favorites.length > 0 ? (mockStore.favorites.map(({name}) => {
							return (
								<li key={name} className="dropdown-item">
									{name}
									<i onClick={() => handleDeletefavorite(name)} className="fa-solid fa-trash"></i>
								</li>
							);
						})
					):(
						<li className="dropdown-item text-center fst-italic">(empty)</li>
					)}
					</ul>
				</div>
			</div>
		</nav>
	);
};