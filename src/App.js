import React from 'react';
import './App.css';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

require('dotenv').config();

console.log(process.env);


const API_KEY= process.env.REACT_APP_API_KEY;

class App extends React.Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined, 
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const API_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await API_call.json();
    console.log(data);
    if(city && country)
    {
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      max_temp: data.main.temp_max,
      min_temp: data.main.temp_min,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      error: ""
    })
    } else{
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        max_temp: undefined,
        min_temp: undefined,
        humidity: undefined,
        description: undefined,
        icon: undefined,
        error: "Please tell us the city and the country"})
    }
  }
  render() {
  return (
    <div className="App">
      <div className="container titles">
        <Titles />
      </div>
      <div className="container-fluid">
        <div className="form">
          <Form getWeather={this.getWeather}/>
        </div>
      </div>
      <Weather 
        temperature={this.state.temperature}
        city={this.state.city}
        country={this.state.country}
        max_temp={this.state.max_temp}
        min_temp={this.state.min_temp}
        humidity={this.state.humidity}
        description={this.state.description}
        icon={this.state.icon}
        error={this.state.error}
      />
    </div>
  );
  }
}

export default App;
