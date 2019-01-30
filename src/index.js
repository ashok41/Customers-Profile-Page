import React from 'react'
import { render } from 'react-dom';
import asyncComponent from "./asyncComponent";
import LoadingComponent from "./LoadingComponent";

// router
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
// redux


/* Import Components */
const AsyncProfile = asyncComponent(() => import("./components/Profile"), LoadingComponent);
const AsyncProduct = asyncComponent(() => import("./components/Product"), LoadingComponent);


import "../assets/style.css";

const App = () => (
  <Router>
    <div>
		<Switch>
			<Route exact path="/" component={AsyncProfile}/>
			<Route path="/product/:id" component={AsyncProduct}/>
		</Switch>
    </div>
  </Router>
);

render(<App />, document.getElementById('root'));