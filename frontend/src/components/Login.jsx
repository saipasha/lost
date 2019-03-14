import React from 'react'
import axios from 'axios'
import {Link} from "react-router-dom";

const url = process.env.NODE_ENV !== "Production" ? "http://localhost:3000" : "https://lostpetsmexico.herokuapp.com";

class Login extends React.Component {

	state = {
		auth: {
			email: "",
			password: "",
		}
	};

	handleChange = e => {
		let { auth } = this.state;
		auth[e.target.name] = e.target.value;
		this.setState({ auth })
	};

	sendToServer = () => {
		let { auth } = this.state;
		axios.post(`${url}/login`, auth, { withCredentials: true } )
				.then(res => {
					window.localStorage.setItem('user', res.data)
					this.props.history.push('/profile')
				})
				.catch(e => {
					alert("nanai")
				})
	}

	render() {
		let {email} = this.state.auth;
		let {password} =this.state.auth;
		return (
				<div>
					<div className="uk-text-center">
						<Link to="/"><img className="uk-margin-large-top" src="/images/LOST-BK.png" alt="Lost Logo" width="150px" /></Link>
						<div>
							<h4 className="uk-margin-large-top">Log In</h4>
							<p>Entra con tu cuenta y contraseña para crear un reporte.</p>
						</div>
					</div>
					<div className="uk-margin-large-top uk-width-1-3 uk-align-center">
						<label className="uk-form-label uk-margin-medium-bottom" htmlFor="email">Email</label>
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
					<div className="uk-margin-large-top uk-width-1-3 uk-align-center">
						<label className="uk-form-label uk-margin-medium-bottom" htmlFor="password">Contraseña</label>
						<div className="uk-form-controls">
							<input
									name="password"
									className="uk-input"
									id="password"
									type="password"
									placeholder="Escribe tu Contraseña"
									onChange={this.handleChange}
									value={password} />
						</div>
					</div>
					<button className="uk-button uk-button-default uk-margin-large-top uk-width-1-3 uk-align-center" onClick={this.sendToServer}>Entrar</button>
				</div>
		)
	}
}

export default Login