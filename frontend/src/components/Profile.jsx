import React from 'react'
import axios from 'axios'

class Profile extends React.Component {

	state = {
		privateInfo: {},
		authorized: false,
		profilePic: {},
	}

	componentDidMount() {
		this.getPrivateData()
	}

	getPrivateData = () => {
		let url = "http://localhost:3000/profile"
		axios.get(url, { withCredentials: true })
				.then(res => {
					this.setState({ privateInfo: res.data, authorized: true })
				})
				.catch(e => {
					console.log(e)
					this.props.history.push('/login')
				})
	}

	render() {
		return(
			<div>
				<h1>{this.state.privateInfo.name}</h1>
				<img src={this.state.privateInfo.photo} alt={this.state.privateInfo.name}/>
			</div>
		)
	}
}

export default Profile