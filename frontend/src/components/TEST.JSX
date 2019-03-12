import React from 'react'

class Test extends React.Component {

  render(){
    return (
      <div>
        <div className="uk-container">
        <div className="uk-flex uk-flex-center">
            <form className="uk-width-1-2 uk-text-center">

              <h3 className="uk-margin-bottom-medium">Login</h3>

              <div className="uk-margin">
                <label >
                  Usuario:
                  <input className="uk-input" type="email"/>
                </label>
              </div>
              <div class="uk-margin">
              <div class="uk-inline">
                  <span class="uk-form-icon" uk-icon="icon: user"></span>
                  <input class="uk-input" type="text" />
              </div>
            </div>  

              <div className="uk-margin">
                <label >
                  Password:
                  <input className="uk-input" type="password"/>
                </label>
              </div>


              <button type="submit" className="uk-button uk-button-primary">
              picatelo papa
              </button>

            </form>
        </div>
        </div>

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
				</div>*
      </div>
    )
  }

}

export default Test