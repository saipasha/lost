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
      </div>
    )
  }

}

export default Test