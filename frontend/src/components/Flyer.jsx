import React from 'react'
import { Link } from 'react-router-dom'
import {createReport} from '../services/report-services'
import UIkit from 'uikit';

class Signup extends React.Component {

	state = {
		data: {
			name: "",
			age: "",
			size: "",
			description: "",
			characteristics: {
				lastimado: false,
				moribundo: false,
				saludable: false,
				asustado: false,
			},
			images: []
		}
	};

	handleChange = e => {
		const {data} = this.state;
		let field = e.target.name;
		let años = e.target.value.replace(/[Z-zñÑ]/g, "");
		console.log(años)
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

		for (let key in data) {
			if (key !== "images" && key !== "characteristics") {
				formdata.append(key, data[key]);
			} else if (key === "images") {
				for(let i = 0 ; i < data.images.length; i++) {
					formdata.append("images", data.images[i])
				}
			} else {
				formdata.append("characteristics", JSON.stringify(data[key]));
			}
		}
		createReport(formdata)
				.then(res=>{
					UIkit.notification({
						message: "Se creó la mascota correctamente",
						status: "success",
					})
					this.props.history.push('/lost')
				})
	};

	render() {
		const  {name, age, size} = this.state;
		const {lastimado, asustado, moribundo, saludable} = this.state.data.characteristics;
		return (
				<div>
					<div className="uk-text-center uk-margin-large-top">
						<Link to="/"><img src="/images/LOST-BK.png" alt="Lost Logo" width="150px" /></Link>
						<div>
							<h4>Levanta un Reporte</h4>
							<p>Rellena con el mayor detalle posible la siguiente forma para que su familia pueda filtrar correctamente los reportes.</p>
						</div>
					</div>

					<div className="uk-flex uk-flex-center">
						<form className="uk-form-stacked uk-width-1-2" onSubmit={this.handleSubmit}>

							<div className="uk-margin">
								<label className="uk-form-label" htmlFor="pet-name">Nombre de la Mascota</label>
								<div className="uk-form-controls">
									<input
											name="name"
											className="uk-input"
											id="pet-name"
											type="text"
											placeholder="Firulais"
											onChange={this.handleChange}
											value={name} />
								</div>
							</div>

							<div className="uk-margin">
								<label className="uk-form-label" htmlFor="pet-age">Cuántos años tiene?</label>
								<div className="uk-form-controls">
									<input
											name="age"
											className="uk-input"
											id="pet-age" type="text"
											placeholder="5"
											onChange={this.handleChange}
											value={age} />
								</div>
							</div>

							<div className="uk-margin">
								<label className="uk-form-label" htmlFor="desc">Descripción</label>
								<div className="uk-form-controls">
									<textarea
											className="uk-textarea"
											name="description"
											id="desc"
											cols="10"
											rows="5"
											onChange={this.handleChange}
											placeholder="Ojos marrones, orejas largas, nariz rosada. Cruza de beagle con pekinés. Pelo largo. Se encontró en…"></textarea>
								</div>
							</div>

							<div className="uk-margin">
								<div className="uk-width-1-1" uk-form-custom="target: > * > span:first-child">
									<select defaultValue={size} onChange={this.handleSizeChange}>
										<option disabled selected>Tamaño de la Mascota</option>
										<option value="small">Pequeño</option>
										<option value="medium">Mediano</option>
										<option value="large">Grande</option>
										<option value="xlarge">XGrande</option>
									</select>
									<button className="uk-button uk-button-default uk-width-1-1" type="button" tabIndex="-1">
										<span></span>
										<span uk-icon="icon: chevron-down"></span>
									</button>
								</div>
							</div>

							<div className="uk-margin ">
								<h4>Condiciones en que se encontró</h4>
								<div className="uk-grid-small uk-child-width-auto uk-grid">
									<label><input className="uk-checkbox" type="checkbox" value="saludable" name="saludable" checked={saludable} onChange={this.handleChangeCharacteristics}/> Saludable </label>
									<label><input className="uk-checkbox" type="checkbox" value="asustado" name="asustado" checked={asustado} onChange={this.handleChangeCharacteristics}/> Asustado </label>
									<label><input className="uk-checkbox" type="checkbox" value="lastimado" name="lastimado" checked={lastimado} onChange={this.handleChangeCharacteristics}/> Lastimado</label>
									<label><input className="uk-checkbox" type="checkbox" value="moribundo" name="moribundo" checked={moribundo} onChange={this.handleChangeCharacteristics}/> Moribundo </label>
								</div>
							</div>

							<div className="uk-margin">
								<div className="js-upload uk-width-1-1" uk-form-custom="true">
									<input type="file" multiple onChange={this.handleChangeImages}/>
									<button className="uk-button uk-button-default" type="button" tabIndex="-1">Añade Fotos de la Mascota</button>
								</div>
							</div>

							<button type="submit" className="uk-button uk-button-primary uk-width-1-3 uk-display-block uk-margin-large-bottom">Reportar</button>

						</form>
					</div>

				</div>
		)
	}
}

export default Signup