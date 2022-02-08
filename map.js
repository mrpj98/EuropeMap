$(document).ready(function(){
    $('path').click(function(){
        let countryName = this.getAttribute("class");
        let countryName2 = countryName.slice(-2);
       // document.getElementById("eu").innerHTML = countryName2;
            $.get('http://127.0.0.1:5000/cities', function(data, status){
               // console.log(data);
                //console.log(data.country);
                $.each(data, function(index, value){
                  //  console.log(index);
                  //  console.log(value);
                    $.each(value, function(ind, val){
                      //  console.log(ind);
                        console.log(val);
                        if(val.countrycode == countryName2){
                            document.getElementById("eu").innerHTML = val.name;
                            let city = val.name;
                            if(city == "Dublin"){
                                city = "Dublin,IE";
                            }
                            let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=e656f9ecb13cb57a0c153a4beb0fadfe`;
                            $.get(url, function(data2, status2){
                                console.log(data2);
                               // let weather = JSON.parse(data2);
                                //console.log(weather);
                                console.log(data2.weather[0].main);
                                console.log(data2.main.temp);
                                let temp = data2.main.temp;
                                let weather = data2.weather[0].main;
                                document.getElementById("temp").innerHTML = "Temperature: " +temp+ "C";
                                document.getElementById("weather").innerHTML = "Weather: " +weather;
                            })

                        }

                    })
                })
            })
           /* $.get('httpL//127.0.0.1:500/country', {"countrycode":countryName2}, function(data, status){
                console.log(data);
            })*/
    })
}); 