import React from 'react';



const Weather = (props) => (
 
        <div className="container">
                
                {props.city && props.country && <p id="location">{props.city}, {props.country}</p>}
                <div className="row">
                        <div className="col-md-6 weather">
                                {props.temperature && <p id="temp">{props.temperature}&deg;C</p>}
                                {props.description && <p>{props.description}</p>}
                                {props.max_temp && props.min_temp && <p>{props.max_temp}&deg;/{props.min_temp}&deg;</p>}
                                {props.humidity && <p>{props.humidity} humidity</p>}
                        </div>
                        <div className="col-md-6 ">
                                {props.icon && <img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}></img>}
                        </div>
                </div>
                {props.error && props.error}
        </div>
 
)

export default Weather;