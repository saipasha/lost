import React from 'react'
import axios from 'axios'
import {NavLink} from 'react-router-dom'

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
		if (newUser.password2 !== newUser.password1) errors.password = "Please, type the same password"
		this.setState({ newUser, errors })
	}

	// handleImageChange = (e) => {
	// 	this.setState({profilePic: e.target.files[0]})
	// }

	sendToServer = () => {
		let { newUser } = this.state
		let url = "http://localhost:3000/signup"
		axios.post(url, newUser)
				.then(res => {
					console.log("Nuevo usuario ? ", res)
					this.props.history.push('/profile')
				})
				.catch(e => console.log(e))
	}

	render() {
		const { errors } = this.state
		return (
				<div>
					<div>
						<h4>Adoption is serious stuff</h4>
						<p>This platform is handling the lives of live beings, that's why we ask all of this information from each one of our users in order to make an appointment or post a flyer.</p>
						<p>We won't share your info with anyone that has no direct interest in one of your flyers. Feel free to share with us.</p>
					</div>
					<div>
						<input onChange={this.handleChange} placeholder="Your email" name="email" type="text" />
						<br />
						<input onChange={this.handleChange} placeholder="Your name" name="name" type="text" />
						<br />
						<input onChange={this.handleChange} placeholder="Your last name" name="lastName" type="text" />
						<br />
						<input type="file" onChange={this.handleImageChange} name="profilePhoto" />
						<br />
						<input onChange={this.handleChange} placeholder="Your phone number" name="phone" type="number" />
						<br />
						<input onChange={this.handleChange} placeholder="Set a password" name="password" type="password" />
						<br />
						<input onChange={this.handleChange} placeholder="Rewrite your password" name="password2" type="password" />
						<p style={{ color: "red" }}>{errors.password}</p> {/*Add Toastr*/}
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