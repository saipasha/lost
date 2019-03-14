import React from 'react'
import axios from 'axios'
import {Link, NavLink} from 'react-router-dom'

class Signup extends React.Component {

	state = {
		newUser: {
			email: "",
			name: "",
			lastName: "",
			phone: "",
		},
		profilePhoto: {},
		errors: {}
	}


	handleChange = e => {
		let { newUser, errors } = this.state
		newUser[e.target.name] = e.target.value
		//validate
		errors = {}
		if (newUser.password !== newUser.password2) errors.password = "Escribe la misma contraseña"
		this.setState({ newUser, errors })
	}

	handleImageChange = (e) => {
		let { profilePhoto } = this.state
		profilePhoto = e.target.files[0] 
		this.setState({profilePhoto})
	}

	sendToServer = (e) => {
		e.preventDefault()
		let url= "http://localhost:3000/signup"
		let {profilePhoto, newUser} = this.state
		const formData = new FormData()		
		for(let key in newUser){
			formData.append(key, newUser[key])
		}		
		formData.append("picture", profilePhoto)
		let serviceUpload = axios.create({url, withCredentials: true})
		return serviceUpload.post(url, formData, {
			headers: {
				'Content-type': 'multipart/form-data',
			}
		})
			.then(res => {
				this.props.history.push('/profile')
				console.log(res)
			})
			.catch(e => console.log(e))
	}


	render() {
		const { errors } = this.state
		let {email} = this.state.newUser
		let {name} = this.state.newUser
		let {lastName} = this.state.newUser
		let {phone} = this.state.newUser
		return (
				<div>
				<div className="uk-margin-medium-top uk-text-center">
					<div>
						<Link to="/"><img className="uk-margin-small-top" src="/images/LOST-BK.png" alt="Lost Logo" width="150px" /></Link>
						<div>
							<h4 className="uk-margin-medium-top">Crea tu Cuenta</h4>
							<p>El objetivo de nuestra plataforma es reunir mascotas perdidas con sus familias,<br /> es por eso que requerimos todos los datos de este formulario de todos nuestros usuarios.</p>
						</div>
					</div>

					<div className="uk-margin-small-top uk-width-1-3 uk-align-center">
						<label className="uk-form-small uk-form-label" htmlFor="email">Email</label>
						<div className="uk-form-controls">
							<input
									name="email"
									className="uk-input"
									id="email"
									type="email"
									placeholder="example@example.com"
									onChange={this.handleChange}
									value={email} />
						</div>
					</div>

					<div className="uk-width-1-3 uk-align-center">
						<label className="uk-form-small uk-form-label" htmlFor="name">Nombre</label>
						<div className="uk-form-controls">
							<input
									name="name"
									className="uk-input"
									id="name"
									type="text"
									placeholder="Escribe tu nombre"
									onChange={this.handleChange}
									value={name} />
						</div>
					</div>

					<div className="uk-width-1-3 uk-align-center">
						<label className="uk-form-small uk-form-label" htmlFor="lastName">Apellido</label>
						<div className="uk-form-controls">
							<input
									name="lastName"
									className="uk-input"
									id="lastName"
									type="text"
									placeholder="Escribe tus Apellidos"
									onChange={this.handleChange}
									value={lastName} />
						</div>
					</div>

					<div className="uk-width-1-3 uk-align-center">
						<label className="uk-form-small uk-form-label" htmlFor="phone">Número de Contacto</label>
						<div className="uk-form-controls">
							<input
									name="phone"
									className="uk-input"
									id="phone"
									type="text"
									placeholder="Escribe tu número de celular"
									onChange={this.handleChange}
									value={phone} />
						</div>
					</div>

					<div className="uk-width-1-3 uk-align-center">
						<label className="uk-form-small uk-form-label" htmlFor="password">Password</label>
						<div className="uk-form-controls">
							<input
									name="password"
									className="uk-input"
									id="password"
									type="password"
									placeholder="Escribe tu Contraseña"
									onChange={this.handleChange} />
						</div>
					</div>

					<div className="uk-width-1-3 uk-align-center">
						<div className="uk-form-controls">
							<input
									name="password2"
									className="uk-input"
									type="password"
									placeholder="Confirma tu Contraseña"
									onChange={this.handleChange} />
						</div>
						<p style={{ color: "red" }}>{errors.password}</p>
					</div>

						<input type="file" onChange={this.handleImageChange} name="profilePhoto" />
						<br />

						<button onClick={this.sendToServer}>Registrarse</button>
					</div>
					<div>
						<h5>Tienes una cuenta?</h5>
						<NavLink to="/login">
							<button>Log In</button>
						</NavLink>
					</div>
				</div>
		)
	}
}

export default Signup