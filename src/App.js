
import './App.css';
import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router,Switch, Route, Link } from "react-router-dom";
import {HashRouter} from 'react-router-dom';
import Career from './Career';
import About from './About';



function App() {
	return (
		<div>
		<Router>
		<Switch>
        	<Route exact path="/" component={About}></Route>
			<Route path="/about" component={About}></Route>
			<Route path="/career" component={Career}></Route>
		</Switch>
		</Router>
		</div>
	)
}




export default App;
ReactDOM.render(<Router />, document.getElementById("root"));

