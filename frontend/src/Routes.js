import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Profile from './components/Profile'
import Signup from './components/Signup'
import Login from './components/Login'
import Lost from './components/Lost'
import Home from './components/Home'

export default () => <Switch>
	<Route exact path="/" component={Home}/>
	<Route path="/signup" component={Signup} />
	<Route path="/login" component={Login} />
	<Route path="/profile" component={Profile} />
	<Route path="/lost" component={Lost} />
</Switch>