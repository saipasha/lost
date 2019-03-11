import React from 'react'
import {NavLink, Link} from "react-router-dom";
import axios from "axios";

class Home extends React.Component{

	logOut = () => {
		axios.get("http://localhost:3000/logout", { withCredentials: true })
				.then(res => {
					console.log(res)
				})
	}

	render(){
		let isAuth = (req, res, next) =>
				req.isAuthenticated()
						? next()
						: res.status(401).json({ message: 'Unauthorized'})

		if (isAuth) {
			return (
				<div>
					<nav id="navBar">
						<NavLink to="/login"><h3>Log In</h3></NavLink>
						<img src="/images/LOST-W.png" alt="Lost Logo" />
						<NavLink to="/signup"><h3>Sign Up</h3></NavLink>
					</nav>
					<section className="banner">
						<h2>¡Encuentra a tu mejor amigo!</h2>
						<p>Lost es la base de datos más grande de perros perdidos de latinoamérica. Sólo ve a la sección de perros perdidos y filtra los anuncios para contactar a quién encontró a tu mascota.</p>
						<Link to="lost"><button>BUSCAR</button></Link>
					</section>
					{/*<Lost />*/}
					<section className="banner">
						<h2>Encontraste una mascota perdida?</h2>
						<p>Ingresa a la mascota a nuestra base de datos para que sus dueños puedan encontrarlo. Sigue las instrucciones en la form.</p>
						<Link to="flyer"><button>PONER UN ANUNCIO</button></Link>
					</section>
				</div>
			)
		} else {
			return (
					<div>
						<nav id="navBar">
							<NavLink to="/login"><h3>Lost Dogs</h3></NavLink>
							<img src="/public/images/logo" alt="Lost Logo" />
							<NavLink to="/signup" onClick={this.logOut()}><h3>Log Out</h3></NavLink>
						</nav>
						<section className="banner">
							<h2>¡Encuentra a tu mejor amigo!</h2>
							<p>Lost es la base de datos más grande de perros perdidos de latinoamérica. Sólo ve a la sección de perros perdidos y filtra los anuncios para contactar a quién encontró a tu mascota.</p>
							<Link to="lost"><button>BUSCAR</button></Link>
							<img src="/public/images/dogs.png" alt="lined dogs" />
						</section>
						{/*<Lost />*/}
						<section className="banner">
							<h2>Encontraste una mascota perdida?</h2>
							<p>Ingresa a la mascota a nuestra base de datos para que sus dueños puedan encontrarlo. Sigue las instrucciones en la form.</p>
							<Link to="flyer"><button>PONER UN ANUNCIO</button></Link>
						</section>
					</div>
			)
		}
	}
}

export default Home