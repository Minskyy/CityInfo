import React, { Component } from "react";
import "./CityInput.css";
import axios from "axios";

class CityInput extends Component {
	state = {
		cityName: "",
		data: "",
		error: false,
	};

	onSubmitHandler = (event, id, cityName) => {
		let url = `http://localhost:4000/cityInfo/${cityName}`;

		axios
			.get(url)
			.then(res => {
				this.setState({ data: res.data, error: false });
				this.props.updateState(id, res.data);
			})
			.catch(error => {
				this.setState({ error: true });
			});
	};

	render() {
		return (
			<div className="CityInput">
				<p>
					{this.state.error === true
						? "Invalid city name!"
						: this.state.data
						? `It's ${this.state.data.temp}º C in ${this.state.data.city}, ${
								this.state.data.country
						  }`
						: "Insert city name"}
				</p>
				<input
					type="text"
					value={this.state.cityName}
					onChange={event => this.setState({ cityName: event.target.value })}
					onSubmit={event =>
						this.props.onSubmit(event, this.props.id, this.state.cityName)
					}
				/>

				<button
					onClick={event =>
						this.onSubmitHandler(event, this.props.id, this.state.cityName)
					}
				>
					Search
				</button>
			</div>
		);
	}
}

export default CityInput;
