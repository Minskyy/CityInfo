import React, { Component } from "react";
import BarGraph from "../../Components/BarGraph/BarGraph";
import InfoTable from "../../Components/InfoTable/InfoTable";
import CityInput from "../../Components/CityInput/CityInput";
import "./WeatherInfo.css";
import update from "immutability-helper";

class WeatherInfo extends Component {
	state = {
		cityInfo: []
	};

	updateState = (id, data) => {
		let updatedCityInfo;
		if (this.state.cityInfo.length < 3) {
			// If we have less than 3 cities inserted, push this one
			updatedCityInfo = update(this.state.cityInfo, {
				$push: [data]
			});
		} else {
			updatedCityInfo = update(this.state.cityInfo, {
				// if we have 3, replace this one in the array
				$splice: [[id, 1, data]]
			});
		}

		this.setState({ cityInfo: updatedCityInfo });
	};

	render() {
		return (
			<div className="WeatherInfo">
				<section className="CityInputs">
					<CityInput id="0" updateState={this.updateState} />,{" "}
					<CityInput id="1" updateState={this.updateState} />,{" "}
					<CityInput id="2" updateState={this.updateState} />
				</section>{" "}
				<section className="BarGraph">
					{this.state.cityInfo.length > 0 ? (
						<BarGraph info={this.state.cityInfo} />
					) : null}
				</section>{" "}
				<section className="InfoTable">
					<InfoTable info={this.state.cityInfo} />
				</section>{" "}
			</div>
		);
	}
}

export default WeatherInfo;
