import React from 'react'
import { Link} from "react-router-dom"
import NavBar from './Navbar';

class Home extends React.Component{
	render(){
			return (
				<div className="home">
					<NavBar {...this.props} />
					<section className="banner">
						<div className="uk-cover-container uk-height-large" uk-height-viewport="true">
							<h2 className="uk-heading-primary">¡Encuentra a tu mejor amigo!</h2>
							<p>Lost concentra todos los reportes de perros encontrados. Sólo ve a la sección de perros perdidos y filtra los anuncios para contactar a quién encontró a tu mascota.</p>
							<Link to="lost"><button className="uk-button uk-button-primary">BUSCAR</button></Link>
							<img src="/images/dogs.png" alt="dogs" />
						</div>
					</section>
				</div>
			)
	}
}

export default Home