import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Profile from './components/Profile'
import Signup from './components/Signup'
import Login from './components/Login'
import Partners from './components/Partners'
import Vets from './components/Vets'
import TrainingCentres from './components/TrainingCentres'
import Stores from './components/Stores'
import Lost from './components/Lost'
import Home from './components/Home'

export default () => <Switch>
	<Route exact path="/" component={Home}/>
	<Route path="/signup" component={Signup} />
	<Route path="/login" component={Login} />
	<Route exact path="/profile" component={Profile} />
	<Route exact path="/partners" component={Partners} />
	<Route path="/partners/vets" component={Vets} />
	<Route path="/partners/trainingCentres" component={TrainingCentres} />
	<Route path="/partners/stores" component={Stores} />
	<Route path="/lost" component={Lost} />
</Switch>