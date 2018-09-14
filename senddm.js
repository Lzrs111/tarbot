var Promise = require("promise-polyfill").default
var Twitter = require("twitter-node-client").Twitter
var config = require("./config")
var fs = require("fs")

var tw = new Twitter(config)

var error = function (err,response,body) {
      console.log('ERROR [%s]', err);
      console.log(response)
      console.log(body)
	};

var success = function (data) {
  data = JSON.parse(data)
  console.log(data)
  };
//get users from db
fs.readFile("users.txt","UTF-8",function(err,contents){
    var users = contents.split("\n")
    console.log(users)
    users.forEach(function(element){
        tw.postCustomApiCall("/direct_messages/events/new.json",{user_id:element,text:"LOL"},error,success)
    })
    })
