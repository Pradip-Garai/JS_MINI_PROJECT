const con=document.getElementById('container');
document.getElementById('getWeather').addEventListener('click',()=>{
    const location = document.getElementById('city').value;

    function updateWeather(data){
        const showWeather =  document.getElementById('weatherInfo');
        showWeather.innerHTML = `Today's Tempareture(C) : ${data.current.temp_c}<br><br>Today's Tempareture(F) : ${data.current.temp_f}<br>`;
        const div=document.createElement('div');
        div.id='img'
        con.append(div);
        const img=document.createElement('img');

        if(data.current.condition.text == "Partly cloudy")
        img.src="./img/Partly cloudy.png";
        else if(data.current.condition.text== "Overcast")
            img.src="./img/Overcast.jpeg";
        else if(data.current.condition.text =="Patchy heavy snow")
            img.src="./img/Patchy heavy snow.webp";
        else if( data.current.condition.text =="Sunny")
            img.src="./img/Sunny.jpeg";
        else
        img.src="./img/Mist.webp";

        div.append(img);
    }

    const promise = fetch(`http://api.weatherapi.com/v1/current.json?key=6080b9b3736d411688733135252502&q=${location}&aqi=yes`);
    promise
    .then(response=>response.json())
    .then(data=>updateWeather(data));
})

