import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Signup extends React.Component {

	/*state = {
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
	}*/

	state = {
		data: {
			name: "",
			age: "",
			size: "",
			description: "",
			characteristics: {
				loquesea: false,
				loquesea1: false,
				loquesea2: false,
				loquesea3: false
			},
			images: []
		}
	};

	handleChange = e => {
		const {data} = this.state;
		let field = e.target.name;
		data[field] = e.target.value;
		this.setState({data});
	};

	handleSizeChange = () => {
		const {data} = this.state;
		let el = document.querySelector("select");
		data.size = el.options[el.selectedIndex].value;
		this.setState({data});
	};

	handleChangeCharacteristics = e => {
		const {data} = this.state;
		const {characteristics} = data;
		let field = e.target.name;
		characteristics[field] = !characteristics[field];
		data.characteristics = characteristics;
		this.setState({data})
	};

	handleChangeImages = e => {
		const {data} = this.state;
		data.images = e.target.files
		this.setState({data})
		console.log(this.state)
	};

	handleSubmit = e => {
		e.preventDefault();
		const {data} = this.state;
		let formdata = new FormData();
		for(let key in data) {
			if(key !== "images"){
				formdata.append(key, data[key]);
			}else{
				for(let i = 0 ; i < data.images.length; i++){
					formdata.append("images", data.images[i])
				}
			}
		}
	};

	render() {
		const  {name, age, size} = this.state;
		const {loquesea, loquesea1, loquesea2, loquesea3} = this.state.data.characteristics;
		return (
				<div>
					<div className="uk-text-center">
						<Link to="/"><img src="/images/LOST-BK.png" alt="Lost Logo" width="150px" /></Link>
						<div>
							<h4>Levanta un Reporte</h4>
							<p>Rellena con el mayor detalle posible la siguiente forma para que su familia pueda filtrar correctamente los reportes.</p>
						</div>
					</div>

					<div className="uk-flex uk-flex-center">
						<form className="uk-form-stacked uk-width-1-2" onSubmit={this.handleSubmit}>

							<div className="uk-margin">
								<label className="uk-form-label" htmlFor="pet-name">Nombre de tu c-kan</label>
								<div className="uk-form-controls">
									<input
											name="name"
											className="uk-input"
											id="pet-name"
											type="text"
											placeholder="El name de tu can"
											onChange={this.handleChange}
											value={name} />
								</div>
							</div>

							<div className="uk-margin">
								<label className="uk-form-label" htmlFor="pet-age">Edad de tu c-kan</label>
								<div className="uk-form-controls">
									<input
											name="age"
											className="uk-input"
											id="pet-age" type="text"
											placeholder="Años perro"
											onChange={this.handleChange}
											value={age} />
								</div>
							</div>

							<div className="uk-margin">
								<label className="uk-form-label" htmlFor="desc">Edad de tu c-kan</label>
								<div className="uk-form-controls">
									<textarea
											className="uk-textarea"
											name="description"
											id="desc"
											cols="10"
											rows="5"
											onChange={this.handleChange}
											placeholder="describe al c-kan"></textarea>
								</div>
							</div>

							<div className="uk-margin">
								<div className="uk-width-1-1" uk-form-custom="target: > * > span:first-child">
									<select defaultValue={size} onChange={this.handleSizeChange}>
										<option disabled selected>Tamaño de tu c-kan</option>
										<option value="small">Pequeño tu c-kan</option>
										<option value="medium">Mediano tu c-kan</option>
										<option value="large">Grande tu c-kan</option>
										<option value="xlarge">XGrande tu c-kan</option>
									</select>
									<button className="uk-button uk-button-default uk-width-1-1" type="button" tabIndex="-1">
										<span></span>
										<span uk-icon="icon: chevron-down"></span>
									</button>
								</div>
							</div>

							<div className="uk-margin ">
								<h4>Condiciones de tu c-kan</h4>
								<div className="uk-grid-small uk-child-width-auto uk-grid">
									<label><input className="uk-checkbox" type="checkbox" value="loquesea" name="loquesea" checked={loquesea} onChange={this.handleChangeCharacteristics}/> lo que sea </label>
									<label><input className="uk-checkbox" type="checkbox" value="loquesea1" name="loquesea1" checked={loquesea1} onChange={this.handleChangeCharacteristics}/> no se</label>
									<label><input className="uk-checkbox" type="checkbox" value="loquesea2" name="loquesea2" checked={loquesea2} onChange={this.handleChangeCharacteristics}/> epale epale no me pegues</label>
									<label><input className="uk-checkbox" type="checkbox" value="loquesea3" name="loquesea3" checked={loquesea3} onChange={this.handleChangeCharacteristics}/> x fa</label>
								</div>
							</div>

							<div className="uk-margin">
								<div className="js-upload uk-width-1-1" uk-form-custom="true">
									<input type="file" multiple onChange={this.handleChangeImages}/>
									<button className="uk-button uk-button-default" type="button" tabIndex="-1">Selecciona las imagenes de tu c-kan</button>
								</div>
							</div>

							<button type="submit" className="uk-button uk-button-primary uk-width-1-3 uk-display-block uk-margin-auto">Picatelo</button>

						</form>
					</div>

				</div>
		)
	}
}

export default Signup