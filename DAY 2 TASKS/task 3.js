var url = "https://restcountries.eu/rest/v2/name,region,subregionandpopulation";
var xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = function () {
          var data = JSON.parse(this.response);
          console.log(data);
        };
       
        xhr.onerror = function () {
            console.log("Error", this.statusText);
          };
          // sends the request
          xhr.send();