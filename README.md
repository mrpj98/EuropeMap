## Interactive Weather Map of Europe

![interactive map of Europe](https://github.com/mrpj98/EuropeMap/blob/main/EuropeWeather.png)

An interactive map of Europe that will provide the current weather of the capital city of the clicked on country. 

When a country is clicked on a get request with be made of a node js API which will get a set of data storied in a MySQL database through docker. When the capital city is obatained a query is made to the OpenWeatherAPI service and the current weather data is sent in response and displayed on the page.
