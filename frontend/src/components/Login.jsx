import React from 'react'
import axios from 'axios'

class Login extends React.Component {

	state = {
		auth: false,
	}

	handleChange = e => {
		let { auth } = this.state
		auth[e.target.name] = e.target.value
		this.setState({ auth })
	}

	sendToServer = () => {
		let { auth } = this.state
		let url = "http://localhost:3000/login"
		axios.post(url, auth, { withCredentials: true } )
				.then(res => {
					window.localStorage.setItem('user', res.data)
					this.props.history.push('/profile')
				})
				.catch(e => {
					alert("nanai")
				})
	}

	render() {
		return (
				<div>
					<input onChange={this.handleChange} placeholder="tu mail" name="email" type="text" />
					<br />
					<input onChange={this.handleChange} placeholder="tu password" name="password" type="password" />
					<br />
					<button onClick={this.sendToServer}>Iniciar</button>
				</div>
		)
	}
}

export default Login