var Twitter = require("twitter-node-client").Twitter
var config = require("./config")
var fs = require("fs")
var poly = require("./poly")
var tw = new Twitter(config)


var error = function (err,response,body) {
      console.log('ERROR [%s]', err);
      console.log(response)
      console.log(body)
	};

var success = function (data) {
  data = JSON.parse(data)
  console.log(data[0]["user"])
  data.forEach(function(element) {
    if (element["text"].includes("tst")) {
      fs.appendFile("users.txt","\n" + element["user"]["id_str"])
    }
  });
  };

tw.getMentionsTimeline({count:"200"},error, success)