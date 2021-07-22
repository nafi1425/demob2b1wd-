var url = "https://api.openweathermap.org/data/2.5/weather?q=chennai&appid=61923c7821ce512c2bb397b0fb251199";
  // creates xhr as objects & instance of XMLHttpRequest
var xhr = new XMLHttpRequest();
// opens connection with GET method & with (URL endpoint)
xhr.open("GET", url);
// loads the JSON to us
xhr.onload = function () {
  var data= JSON.parse(this.response);
  console.log(data);
};
// handles any error
xhr.onerror = function () {
  console.log("Error", this.statusText);
};
// sends the request
xhr.send();