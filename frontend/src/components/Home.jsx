import React from 'react'
import { Link} from "react-router-dom"
import NavBar from './Navbar';

class Home extends React.Component{

	render(){

		if (true) {
			return (
				<div className="home">
					<NavBar />
					<section className="banner">
						<div className="uk-cover-container" uk-height-viewport="true">
							<h2 className="uk-heading-primary">¡Encuentra a tu mejor amigo!</h2>
							<p>Lost concentra todos los reportes de perros encontrados. Sólo ve a la sección de perros perdidos y filtra los anuncios para contactar a quién encontró a tu mascota.</p>
							<Link to="lost"><button className="uk-button uk-button-primary">BUSCAR</button></Link>
							<img src="/images/dogs.png" alt="dogs" />
						</div>
					</section>

					<section className="banner">
						<div className="uk-height-xlarge uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" data-src="/images/lost-dog.jpg" uk-img="true">
							<h2 className="uk-heading-primary">¿Encontraste una mascota perdida?</h2>
							<p>Ingresa a la mascota a nuestra base de datos para que sus dueños puedan encontrarlo. Sigue las instrucciones en la form.</p>
							<Link to="flyer"><button className="uk-button uk-button-default">PONER UN ANUNCIO</button></Link>
						</div>
					</section>
				</div>
			)
		}
	}
}

export default Home