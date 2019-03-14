import React from 'react'
import axios from 'axios'
import {searchByDescription} from "../services/report-services"
import NavBar from "./Navbar";

const url = process.env.NODE_ENV !== "Production" ? "http://localhost:3000" : "tupinshidominio.com";

class Lost extends React.Component {

  state = {
    pets: [],
    query: "",
  }

  componentDidMount() {
    axios.get(`${url}/lost`)
        .then(res=>{
          this.setState({pets:res.data.pets})
          console.log(this.state)
        })
        .catch(e=>console.log(e))
  }

  searchWhileTyping = e => {
    let {query} = this.state
    query = e.target.value
    this.setState({query})
    searchByDescription(query)
        .then(res=>{
          const {pets} = res.data
          this.setState({pets})
        })
        .catch(e=>console.log(e))
  }

  drawReports = () => {
    const {pets} = this.state
    if (pets.length > 0) {
      return pets.map((pet, key)=>{
        return (
            <div>
            <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-3 uk-margin" uk-grid="true" key={key}>
              <div>
                <div className="uk-card-media-left uk-cover-container">
                  <div className="uk-position-relative uk-visible-toggle uk-light" uk-slideshow="autoplay: true" tabIndex="-1">
                    <ul className="uk-slideshow-items">
                      {pet.petPhotos.map((photo, key)=>{
                        return (
                            <li key={key}>
                              <img src={photo} alt=":)" uk-cover="true" />
                              <canvas width="600" height="400"></canvas>
                            </li>
                        )
                      })
                      }
                    </ul>
                    <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous="true"
                       uk-slideshow-item="previous"></a>
                    <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next="true"
                       uk-slideshow-item="next"></a>
                  </div>
                </div>
              </div>
              <div>
                <div className="uk-card-body">
                  <h3 className="uk-card-title">{pet.name}</h3>
                  <p>{pet.age} años</p>
                  <p>{pet.description}</p>
                  <p>{pet.characteristics}</p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        )
      })
    } else {
      return (
          <div>
            <h3 className="uk-margin-large-left"> No hay ningún reporte </h3>
          </div>
      )
    }
  }

  render() {
    return (
      <div>
        <NavBar {...this.props} />
        <div className="uk-flex uk-margin-medium-top">
          <div className="uk-margin">
            <form className="uk-search uk-search-default uk-margin-large-left">
              <a href="#" uk-search-icon="true"></a>
              <input onChange={this.searchWhileTyping} className="uk-search-input" type="search" placeholder="Search..." />
            </form>
          </div>
        </div>
        {this.drawReports()}
      </div>
    )
  }

}

export default Lost