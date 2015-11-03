## weatherapp

Does not work as is!

Needs a file in /js called key.js
only 2 lines are needed:
```javascript
var wkey = "<weather API key>";
var gkey = "<geocoding API key>";
```
Both keys must be in quotes and can be acquired for free

Your weather API key can be found at: https://developer.forecast.io/ 

A Google geocoding API can be at: https://developers.google.com/maps/documentation/geocoding/get-api-key

This simple weather app grabs weather data using the Dark Sky Forecast API
Google's geocoding API is used to get lat/long coordinates from location strings

minimal information is returned, get better weather at http://www.weather.com/

this was a project for my web development class
