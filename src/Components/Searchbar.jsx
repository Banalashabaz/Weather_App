import {useState} from 'react';
import Temparature from './Temparature';
import Climate from './Climate';
import Location from './Location';
import Humidity from './Humidity';
import Windspeed from './Windspeed';
export default function Searchbar() {

    const [city,setCity]=useState({})
    const [search,setSearch]=useState('')
  
    function handleSubmit(e){
      const apikey="b2f66f1f1d932931665c1bee490488e3";
      e.preventDefault();
      console.log(search)
      if(!search){
        throw new Error('Enter a City Name');
      }
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid&appid=${apikey}`)
    
      .then((response)=>{if(!response.ok){ throw new Error()}return response.json()})
        .then((data)=>{
          var temp=data.main.temp;
          setCity({temp:data.main.temp,place:data.name,humidity:data.main.humidity,wind:data.wind.speed,icon: "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png",

          })
          console.log(temp)
          console.log(data)
          console.log(data.weather[0].icon)
          console.log("https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png")
        
        })
      .catch((error)=>console.log(error));
      
    }
  return (
<>
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter place"  required onChange={(e)=>setSearch(e.target.value)}  />
      <button type='Submit' >Search</button>
      <Climate logo={city.icon}></Climate>
      
      <Temparature  temp={city.temp}></Temparature>
      <Location name={city.place}></Location>
      <div className='con'>
            <Humidity  humidity={city.humidity}></Humidity>
            <Windspeed wind={city.wind}></Windspeed>
            </div>
    </form>
        
    </>
  )
}
