import React from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

class NavBar extends React.Component {

	state={
		user:{},
		logged:{}
	}

	logOut = () => {
		axios.get("http://localhost:3000/logout", { withCredentials: true })
				.then(res => {
					console.log(res)
				})
  }

  render(){
    if(true) {
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
                    <div class="uk-navbar-dropdown" uk-dropdown>
                      <ul class="uk-nav uk-navbar-dropdown-nav">
                        <li><a href="/login">Reportar</a></li>
                        <li><a href="/signup">Log Out</a></li>
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