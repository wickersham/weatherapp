var app = angular.module("ngWeather3", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/home", {
        templateUrl: "html/home.html",
        controller: "WeatherController3"
    })
    
    .when("/weather", {
        templateUrl: "html/weather.html",
        controller: "WeatherController3"
    })
    
    .when("/about", {
        templateUrl: "html/about.html",
        controller: "WeatherController3"
    })
    
    .otherwise({
        redirectTo: "/home"
    });

});

//create weather service
app.factory("weatherService3", function($http) {
    var service = {};
    var baseUrl = "https://api.forecast.io/forecast/";
    var baseUrlwithwkey = baseUrl + wkey + "/";
    
//this gets the weather information
    service.get = function(latitude, longitude) {
    //http get
        return $http.jsonp(baseUrlwithwkey + latitude + "," + longitude + "?callback=JSON_CALLBACK");
    };
    return service;
    
});

app.factory("geocodeService3", function($http) {
    var service = {};
    service.getGeocode = function(location) {
        return $http.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + location + "&key=" + gkey);
    };
    return service;
});

app.controller ("WeatherController3", function($scope, weatherService3, geocodeService3) {
    
    $scope.location = "";
    $scope.weatherData = {};
    
    //getWeather function
    $scope.getWeather = function() {
        var latitude = 0;
        var longitude = 0;
        
        geocodeService3.getGeocode($scope.location)
            .success(function(response) {
                latitude = response.results[0].geometry.location.lat;
                longitude = response.results[0].geometry.location.lng;

                    weatherService3.get(latitude, longitude)
                        .success(function(response) {
                        $scope.weatherData = response;
                        console.log(response);
                        })
                        .error(function(error) {
                        console.log(err);
                        });
                })
            .error(function(error) {
                        console.log(err);
             });
    };    
});
