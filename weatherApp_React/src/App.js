import React from 'react';


//components
import Titles from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';


const API_KEY = 'e72a4b1901da3ae63f2b229a8878f024';
class App extends React.Component{
state = {
  city: undefined,
  country:undefined,
  description:undefined,
  icon: undefined,
  temperature:undefined,
  temp_min:undefined,
  temp_max:undefined,
  sunrise:undefined,
  sunset:undefined,
  latitude:undefined,
  longitude:undefined,
    }
  getWeather = async (e) => {   

    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    //const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${API_KEY}`)
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
  
  //convert the data into json format
    const data = await api_call.json();
    
    if (city && country){

    console.log(data);

    this.setState({

      city:data.name,
      country:data.sys.country,
      description:data.weather[0].description,
      icon:data.weather[0].icon,
      temperature: data.main.temp,
      temp_min: data.main.temp_min,
      temp_max: data.main.temp_max,
      sunrise: data.sys.sunrise,
      sunset: data.sys.sunset,
      latitude: data.coord.lat,
      longitude: data.coord.lon,
      humidity: data.main.humidity,
      error: ""
    });
  }else{
    this.setState({
      city: undefined,
country:undefined,
description:undefined,
icon: undefined,
temperature:undefined,
temp_min:undefined,
temp_max:undefined,
sunrise:undefined,
sunset:undefined,
latitude:undefined,
longitude:undefined,
      error: 'Please enter the value.'
 
  });
  }
}
  render() {
    return (
      <div>
       
      <div className="wrapper">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <Titles/>
              </div>
              </div>
              <div className="row row-centering">
              <div className="col-md-8 form-container">
                <Form getWeather={this.getWeather}/>
                <Weather
                icon = {this.state.icon}
                description ={this.state.description}
                temperature = {this.state.temperature}
                temp_max =  {this.state.temp_max}
                temp_min = {this.state.temp_min}
                sunrise = {this.state.sunrise}
                sunset = {this.state.sunset}
                latitude = {this.state.latitude}
                longitude = {this.state.longitude}
                city = {this.state.city}
                country ={this.state.country}
                humidity ={this.state.humidity}
                
                error ={this.state.error}
                />
              </div>
              </div>  
          </div>
        </div>
      </div>     
     
      );
  }
};

export default App;