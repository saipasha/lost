import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Profile from './components/Profile'
import Signup from './components/Signup'
import Login from './components/Login'
import Lost from './components/Lost'
import Home from './components/Home'
import Flyer from './components/Flyer'

export default () => <Switch>
	<Route exact path="/" component={Home}/>
	<Route exact path="/signup" component={Signup} />
	<Route exact path="/login" component={Login} />
	<Route exact path="/profile" component={Profile} />
	<Route exact path="/lost" component={Lost} />
	<Route exact path="/flyer" component={Flyer} />
</Switch>