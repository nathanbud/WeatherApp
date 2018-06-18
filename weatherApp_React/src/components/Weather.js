import React from 'react';

const Timestamp = require('react-timestamp');

const Weather = props => (	

<div> 
	<div className="weather-container"> 
{
	props.city && props.country && 
<p className="weather__key">Location:<span className="weather__value">{props.city}, {props.country}</span></p>
}
{
	props.icon && <p className="weather__key__icon"><img src={"http://openweathermap.org/img/w/"+props.icon+".png"}/></p>
}
{
	props.description && <p className="weather__key">Weather Conditions:<span className="weather__value">{props.description}</span></p>
}
{
	props.temperature && <p className="weather__key">Temperature:<span className="weather__value">{props.temperature} &deg;C</span>
	</p>
}
{
	props.temp_min && <p className="weather__key">Coldest:<span className="weather__value">{props.temp_min} &deg;C</span>
	</p>
}
{
	props.temp_max && <p className="weather__key">Hottest:<span className="weather__value">{props.temp_max} &deg;C</span>
	</p>
}
{
	props.sunrise && <p className="weather__key">Sunrise:<span className="weather__value"><Timestamp time={props.sunrise} format="time" /></span>
	</p>
}
{
	props.sunset && <p className="weather__key">Sunset:<span className="weather__value"><Timestamp time={props.sunset} format="time"/></span>
	</p>
}

{
	props.latitude && <p className="weather__key">Latitude:<span className="weather__value">{props.latitude}</span>
	</p>
}
{
	props.longitude && <p className="weather__key">Longitude:<span className="weather__value">{props.longitude}</span>
	</p>
}
{
	props.humidity && <p className="weather__key">Humidity:<span className="weather__value">{props.humidity}</span></p>
}

{
	props.error && <p className="weather__key"><span className="weather__error">{props.error}</span></p>
}
</div>
  </div>
		);
	

export default Weather;