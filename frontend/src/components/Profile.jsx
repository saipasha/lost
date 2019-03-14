import React from 'react'
import axios from 'axios'
import NavBar from './Navbar';
import {Link} from "react-router-dom";

const url = process.env.NODE_ENV !== "Production" ? "http://localhost:3000" : "tupinshidominio.com";

class Profile extends React.Component {

	state = {
		privateInfo: {},
		authorized: false,
		profilePic: {},
	}

	componentDidMount() {
		this.getPrivateData()
		console.log(this.state.profilePic)
	}

	getPrivateData = () => {
		axios.get(`${url}/profile`, { withCredentials: true })
				.then(res => {
					console.log(res)
					this.setState({ privateInfo: res.data, authorized: true, profilePic: res.data.profilePhoto })
				})
				.catch(e => {
					console.log(e)
					this.props.history.push('/login')
				})
	}

	render() {
		console.log(this.state.profilePic)
		return(
			<div>
				<NavBar />
				<div className="uk-text-center">
					<div className="uk-margin-large-top">
						<img src={this.state.profilePic} width="300px"/>
						<h2>Bienvenido, {this.state.privateInfo.name}</h2>
						<img src={this.state.privateInfo.photo} alt={this.state.privateInfo.name}/>

				</div>
			</div>
		)
	}
}

export default Profile