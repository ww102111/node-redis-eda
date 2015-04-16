var redis = require("redis");
var client = redis.createClient();

client.on("error", function (err) {
	console.log("Error " + err);
});

var timeInMs = Date.now();
var pack = {
	"stuff": timeInMs
};

console.log("Sending... ", pack);
client.lpush("joblist", JSON.stringify(pack), redis.print);
