import React from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

const url = process.env.NODE_ENV !== "Production" ? "http://localhost:3000" : "tupinshidominio.com";

class NavBar extends React.Component {

	state={
    privateInfo: {},
    authorized: false,
    profilePic: {},
	}

  componentDidMount() {
    this.getPrivateData()
  }

  getPrivateData = () => {
    axios.get(`${url}/profile`, { withCredentials: true })
        .then(res => {
          console.log(res)
          this.setState({ privateInfo: res.data, authorized: true, profilePic: res.data.profilePhoto })
        })
        .catch(e => {
          console.log(e)
         // this.props.history.push('/login')
        })
  }

	logOut = () =>{
      console.log(this.props)
		  axios.get("http://localhost:3000/logout", { withCredentials: true })
				.then(res => {
					console.log(res)
         this.props.history.push('/')
				})
        .catch(e=>console.log(e))
  }

  render(){
    if(!this.state.authorized) {
      return(
        <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar">
          <nav className="uk-navbar-container"> 
              <div className="uk-navbar-left">
                  <ul className="uk-navbar-nav">
                      <li className="uk-navbar-item uk-logo uk-margin-large-left"><NavLink to="/"><img src="/images/LOST-BK.png" alt="Lost Logo" width="150px" /></NavLink></li>
                      <div className="uk-position-right uk-navbar-nav uk-margin-large-right">
                        <li>
                          <a href="/profile">Cuenta</a>
                          <div className="uk-navbar-dropdown" uk-dropdown="offset: 0">
                            <ul className="uk-nav uk-navbar-dropdown-nav">
                              <li><a href="/login">Log In</a></li>
                              <li><a href="/signup">Sign Up</a></li>
                            </ul>
                          </div>
                        </li>
                        <li><NavLink to="/lost">Perros Perdidos</NavLink></li>
                      </div>
                  </ul>
              </div>
          </nav>
      </div>
      )
    } else {
      return (
        <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar">
          <nav className="uk-navbar-container"> 
            <div className="uk-navbar-left">
                <ul className="uk-navbar-nav">
                  <li className="uk-navbar-item uk-logo"><NavLink to="/"><img src="/images/LOST-BK.png" alt="Lost Logo" width="150px" /></NavLink></li>
                  <li>
                    <a href="/profile">Perfil</a>
                    <div className="uk-navbar-dropdown" uk-dropdown="offset: 0">
                      <ul className="uk-nav uk-navbar-dropdown-nav">
                        <li><a href="/flyer">Reportar</a></li>
                        <li onClick={this.logOut}><a href="#!">Log Out</a></li>
                      </ul>
                    </div>
                  </li>
                  <li><NavLink to="/lost">Perros Perdidos</NavLink></li>
                </ul>
            </div>
          </nav>
        </div>
      )
    }
  }
}

export default NavBar