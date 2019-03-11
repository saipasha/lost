import React from 'react'
import {NavLink} from "react-router-dom";

class Home extends React.Component{

	render(){
		let isAuth = (req, res, next) =>
				req.isAuthenticated()
						? next()
						: res.status(401).json({ message: 'Unauthorized'})

		if (isAuth) {
			return (
				<div>
					<nav>
						<NavLink to="/login"><h3>Log In</h3></NavLink>
						<img src="/images/LOST-W.png" alt="Lost Logo" width="150" />
						<NavLink to="/signup"><h3>Sign Up</h3></NavLink>
					</nav>
					<section>
						<h2>¡Encuentra a tu mejor amigo!</h2>
						<p>Lost es la base de datos más grande de perros perdidos de latinoamérica. Sólo ve a la sección de perros perdidos y filtra los anuncios para contactar a quién encontró a tu mascota.</p>
						<button>Buscar</button>
					</section>
					{/*<Lost />*/}
					<section>
						<h2>Encontraste una mascota perdida?</h2>
						<p>Ingresa a la mascota a nuestra base de datos para que sus dueños puedan encontrarlo. Sigue las instrucciones en la form.</p>
						<button>Poner un anuncio</button>
					</section>
				</div>
			)
		} else {
			return (
					<div>
						<NavLink to="/login"><h3>Lost Dogs</h3></NavLink>
						<img src="/public/images/logo" alt="Lost Logo" />
						<NavLink to="/signup"><h3>Log Out</h3></NavLink>
					</div>
			)
		}
	}
}

export default Home