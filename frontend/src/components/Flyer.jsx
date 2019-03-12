import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Signup extends React.Component {

	state = {
		newFlyer: {},
		petPhotos: [],
	}

	handleChange = e => {
		let { newFlyer } = this.state
		newFlyer[e.target.name] = e.target.value
		this.setState({ newFlyer })
	}

	handleImageChange = (e) => {
		let { petPhotos } = this.state
		petPhotos = e.target.files[0] 
		this.setState({petPhotos})
	}

	sendToServer = (e) => {
		e.preventDefault()
		let url= "http://localhost:3000/flyer"
		let {petPhotos, newFlyer} = this.state
		const formData = new FormData()		
		for(let key in newFlyer){
			formData.append(key, newFlyer[key])
		}		
		formData.append("petPhotos", petPhotos)
		let serviceUpload = axios.create({url, withCredentials: true})
		return serviceUpload.post(url, formData, {
			headers: {
				'Content-type': 'multipart/form-data',
			}
		})
			.then(res => {
				this.props.history.push(`/lost/${res.data}`)
				console.log(res)
			})
			.catch(e => console.log(e))
	}

	render() {
		return (
				<div>
					<Link to="/"><img src="/images/LOST-BK.png" alt="Lost Logo" width="150px" /></Link>
					<div>
						<h4>Levanta un Reporte</h4>
						<p>Rellena con el mayor detalle posible la siguiente forma para que su familia pueda filtrar correctamente los reportes.</p>
					</div>
					<div>
						<input type="file" onChange={this.handleImageChange} name="petPhotos" />
						<br />
						<input onChange={this.handleChange} placeholder="Nombre de la Mascota" name="name" type="text" />
						<br />
						<input onChange={this.handleChange} placeholder="Edad de la Mascota" name="age" type="number" />
						<br />
						<textarea onChange={this.handleChange} placeholder="Descripción de la Mascota" name="description" />
						<br />
						<input onChange={this.handleChange} placeholder="Tamaño de la Mascota" name="size" type="dropdown!!???" />
						<br />
						<input onChange={this.handleChange} placeholder="Características de la Mascota" name="characteristics" type="dropdown!!???" />
						<br />
						<input onChange={this.handleChange} placeholder="Estatus de la Mascota" name="size" type="dropdown!!???" />
						<br />
						<button onClick={this.sendToServer}>Levantar Reporte</button>
					</div>
				</div>
		)
	}
}

export default Signup