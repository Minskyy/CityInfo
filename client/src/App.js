import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import WeatherInfo from "./Containers/WeatherInfo/WeatherInfo";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Route path="/" component={WeatherInfo} />
			</BrowserRouter>
		);
	}
}

export default App;
