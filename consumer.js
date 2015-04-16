var redis = require("redis");
var client = redis.createClient();

var waitForPush = function () {

	client.lpop("joblist", function (channel, val) {

		if (val) {
			console.log(val);
		}

		setImmediate(function () {
			waitForPush();
		});

	});

}

waitForPush();