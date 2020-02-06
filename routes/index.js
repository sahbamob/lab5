// Get all of our friend data
var data = require('../data.json');

exports.view = function(request, response){
	console.log(data);
	// get data variable and send it in as argument
	response.render('index',data);
};