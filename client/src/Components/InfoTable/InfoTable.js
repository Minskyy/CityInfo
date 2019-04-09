import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
const InfoTable = props => {
	const data = {
		columns: [
			{
				Header: "City",
				accessor: "city",
			},

			{
				Header: "Temperature (ºC)",
				accessor: "temp",
			},
			{
				Header: "Sunrise (GMT)",
				accessor: "sunrise",
			},
			{
				Header: "Sunset (GMT)",
				accessor: "sunset",
			},
		],
		rows: props.info.map(info => ({
			// transform the data
			city: info.city,
			temp: info.temp.toFixed(1) + "º C",
			sunrise: new Date(info.sunrise * 1000).toLocaleTimeString(), // API Returns seconds since Jan 1st 1970, Date() works with miliseconds so we multiply * 1000
			sunset: new Date(info.sunset * 1000).toLocaleTimeString(),
		})),
	};

	return (
		<ReactTable
			className="-highlight"
			defaultPageSize={3}
			showPagination={false}
			data={data.rows}
			columns={data.columns}
		/>
	);
};

export default InfoTable;
