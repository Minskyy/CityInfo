import React, { Component } from "react";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from "recharts";

class BarGraph extends Component {
	render() {
		return (
			<BarChart
				width={600}
				height={320}
				data={this.props.info}
				margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="city" tick={{ fill: "black" }} />
				<YAxis dataKey="temp" tick={{ fill: "black" }} />
				<Tooltip cursor={{ fill: "transparent" }} />
				<Legend />
				<Bar
					barSize={60}
					dataKey="temp"
					name="Temperature (ºC)"
					fill="#24305e"
				/>
			</BarChart>
		);
	}
}

export default BarGraph;
