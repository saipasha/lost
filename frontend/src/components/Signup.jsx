import React from 'react'
import axios from 'axios'
let uploadCloudinary =

class Signup extends React.Component {

	state = {
		newUser: {},
		errors: {}
	}

	handleChange = e => {
		let { newUser, errors } = this.state
		newUser[e.target.name] = e.target.value
		//validate
		errors = {}
		if (newUser.password !== newUser.password2) errors.password = "no coinciden"
		this.setState({ newUser, errors })
	}

	sendToServer = () => {
		let { newUser } = this.state
		let url = "http://localhost:3000/signup"
		axios.post(url, newUser)
				.then(res => {
					console.log("Nuevo usuario ? ", res)
					this.props.history.push('/login')
				})
				.catch(e => console.log(e))
	}

	render() {
		const { errors } = this.state
		return (
				<div>
					<input onChange={this.handleChange} placeholder="Your email" name="email" type="text" />
					<br />
					<input onChange={this.handleChange} placeholder="Your name" name="name" type="text" />
					<br />
					<input onChange={this.handleChange} placeholder="Your last name" name="lastName" type="text" />
					<br />
					<input type="file" onChange={this.handleChange} name="profilePhoto" />
					<p>Add a Profile Photo</p>
					<br />
					<input onChange={this.handleChange} placeholder="Your phone number" name="phone" type="number" />
					<br />
					<input onChange={this.handleChange} placeholder="Set a password" name="password" type="password" />
					<br />
					<input onChange={this.handleChange} placeholder="Rewrite your password" name="password2" type="password" />
					<p style={{ color: "red" }}>{errors.password}</p> {/*Add Toastr*/}
					<button onClick={this.sendToServer}>Registrarse</button>
				</div>
		)
	}
}

export default Signup