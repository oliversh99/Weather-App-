// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}

var APIkey = "eb5226ac78b37ae1fd483c1d2f66035a"
var getweather = function(cityname){

fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIkey}&units=imperial`)
.then( function (response){
    response.json().then(function(data){
        console.log(data)

        document.querySelector(".city").innerHTML= data.name
        // document.querySelector(".city img").src= data[0].icon

        document.querySelector("#temp").innerHTML="Temp :" + " "+data.main.temp +"" +"F"
        document.querySelector("#wind").innerHTML="Wind :" + " "+data.wind.speed +" " +"MPH"
        document.querySelector("#humidity").innerHTML="Humidity :" + " "+data.main.humidity + "%"
        document.querySelector("#uv").innerHTML="UV Index :" + " "+data.wind.speed + "UV"
      
    })
})}
getweather('arizona')


// cityname+