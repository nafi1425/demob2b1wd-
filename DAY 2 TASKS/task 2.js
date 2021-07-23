var url = "https://restcountries.eu/rest/v2/flags";
var xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = function () {
          var data = JSON.parse(this.response);
          console.log(data);
        };
       
        xhr.send();