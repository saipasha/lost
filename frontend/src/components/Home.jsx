import React from 'react'
import {NavLink, Link} from "react-router-dom"
import NavBar from './Navbar';

class Home extends React.Component{

	render(){

		if (true) {
			return (
				<div>
					<NavBar />
					<section className="banner">
						<div className="uk-cover-container" uk-height-viewport>
							<h2 className="uk-heading-primary">¡Encuentra a tu mejor amigo!</h2>
							<p>Lost concentra todos los reportes de perros encontrados. Sólo ve a la sección de perros perdidos y filtra los anuncios para contactar a quién encontró a tu mascota.</p>
							<Link to="lost"><button className="uk-button uk-button-default">BUSCAR</button></Link>
							<img src="/images/dogs.png" alt="dogs" uk-cover />
						</div>
					</section>
					<section className="banner">
						<div className="uk-height-xlarge uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" data-src="/images/lost-dog.jpg" uk-img>
							<h2 className="uk-heading-primary">¿Encontraste una mascota perdida?</h2>
							<p>Ingresa a la mascota a nuestra base de datos para que sus dueños puedan encontrarlo. Sigue las instrucciones en la form.</p>
							<Link to="flyer"><button className="uk-button uk-button-default">PONER UN ANUNCIO</button></Link>
						</div>
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