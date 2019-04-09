var createError = require("http-errors");
var express = require("express");
var logger = require("morgan"); // Logger for the requests
var cors = require("cors"); // make cross origin requests
var fs = require("fs"); // needed to write to the logger file

var cityInfoRouter = require("./routes/cityInfo");

var app = express();

app.use(cors());
app.use(logger("dev"));
app.use(
	logger("combined", {
		stream: fs.createWriteStream("./access.log", { flags: "a" }), // Make the logger write to the file
	}),
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/cityInfo", cityInfoRouter); // Added route

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render("error");
});

module.exports = app;
