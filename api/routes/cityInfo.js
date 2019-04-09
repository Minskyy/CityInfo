var express = require("express");
const request = require("request");
var router = express.Router();

const apiKey = "e24cdb73628dd125c769a897dae83a16"; // TODO hide API key using environment variables

router.get("/:city", function(req, res, next) {
	let city = req.params.city;
	let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
	request(url, function(error, response, body) {
		if (response.statusCode != 200) {
			console.log(response.statusMessage);
			res.status(response.statusCode).send({
				message: response.statusMessage,
			});
		} else {
			let weather = JSON.parse(body);
			res.send({
				city: weather.name,
				country: weather.sys.country,
				temp: weather.main.temp,
				sunrise: weather.sys.sunrise,
				sunset: weather.sys.sunset,
			});
		}
	});
});

module.exports = router;
