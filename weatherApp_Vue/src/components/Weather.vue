
<template>
<div class="row">
<div class="col-md-12">
    <div  className="title-container mt-5 mb-5">
 
      
<p className ="title-container_title">Weather Today</p>
<h3 className='title-container_subtitle'>Know your weather's current condition</h3>
</div>
</div>
    <div class="col-md-8 form-container">
         <div class="col-md-8">
            <input type="text"  v-model="city" placeholder="City">
             <input type="text"  v-model="country" placeholder="Country">
              <button type="submit" v-on:click='getData'>Search</button>
        </div>
        <div >

            <div>                     
                <p class="weather__key">Selected Location:<span class="weather__value">{{city}}, {{country}}</span></p>
                <p v-html="icon" class="weather__key"><span class="weather__value">{{icon}}</span></p>
                <p class="weather__key">Weather Condition: <span class="weather__value">{{ description }}</span></p>
                <p class="weather__key">Average Temperature:  <span class="weather__value">{{temperature }}</span></p>
                <p class="weather__key">Coldest: <span class="weather__value">{{temp_min }}</span></p>
                <p class="weather__key">Hottest:  <span class="weather__value">{{temp_max }}</span></p>
                <p class="weather__key">Sunrise:  <span class="weather__value">{{sunrise }}</span></p>
                <p class="weather__key">Sunset:  <span class="weather__value">{{sunset }}</span></p>
                <p class="weather__key">Latitude: <span class="weather__value">{{latitude }}</span></p>
                <p class="weather__key"> Longitude: <span class="weather__value">{{longitude}}</span></p>                        
            </div>
        </div>
    </div>
</div>

</template>

<script>

export default {

  data(){
    return{
city:'',
country:'',
description:'',
icon: '',
temperature:'',
temp_min:'',
temp_max:'',
sunrise:'',
sunset:'',
latitude:'',
longitude:''
    }
  },

  methods : {
    getData: function(){
        var self = this;
        axios.get('http://api.openweathermap.org/data/2.5/weather?q='+self.city+','+self.country +'&appid=e72a4b1901da3ae63f2b229a8878f024&units=metric').then(function(response){
            console.log(response); 
            self.city = response.data.main.city;
            self.country = response.data.sys.country; 
            self.description = response.data.weather[0].description;
self.icon = response.data.weather[0].icon; 
self.icon ='<img src="http://openweathermap.org/img/w/'+response.data.weather[0].icon+'.png">' ;
self.temperature = response.data.main.temp;
self.temp_min = response.data.main.temp_min;
self.temp_max = response.data.main.temp_max;
self.sunrise =  response.data.sys.sunrise;
self.sunset = response.data.sys.sunset;
self.latitude = response.data.coord.lat;
self.longitude  = response.data.coord.lon;
    }).catch(function(error){
            self.city = 'Invalid City';
            self.country = 'Invalid Country';
        });
    } 
}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Merriweather:100,200,300,300i,400,400i,700');
@import url('https://fonts.googleapis.com/css?family=Roboto+Slab:400,700');
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400');

body {
  font-family: "Open Sans", serif;
}


.title-container {
  align-items: center;
  text-align: center;
  color: rgb(251, 253, 253);
  line-height: .8;
}

.title-container_title {
  font-size: 40px;
  letter-spacing: 2px;
  font-family: 'Roboto Slab', serif;
}

.title-container_subtitle {
  font-style: italic;
  font-weight: 100;
  letter-spacing: 1px;
  line-height: 1.5;
  font-family: "Merriweather", serif;
}

.form-container {
  background-color: rgba(82, 106, 110, 0.747);
  height: 60%;
  padding: 50px ;
}

.weather-container{
  transition: 9s;
}
.row-centering{
  justify-content: center;
}

input[type="text"] {
  background-color: transparent;
  border: 0;
  border-bottom: solid 1px #22dfe6;
  width: 100%;
  max-width:35%;
  padding-bottom: 4px;
  color: #fff !important;
  font-weight: lighter;
  letter-spacing: 2px;
  margin-bottom: 30px;
  margin-right: 20px;
  font-size: 20px;
}

input[type="text"] { 
    outline: none;
}

input[type="text"]::placeholder { 
  outline: none;
  color:#22dfe6;
}

input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px #22dfe6 inset;
    -webkit-text-fill-color: #fff !important;
}

button {
  border: 0;
  padding: 8px 20px;
  margin: 0 2px;
  border-radius: 2px;
  letter-spacing: 1px;
  font-size: 15px;
  cursor: pointer;
  background-color: #3cbfe7;
  color: #fff;
  font-weight: 400;
}

button:active {
  outline: none;
}

.weather__info {
  width: 60%;
  font-size: 20px;
  font-weight: 200;
  letter-spacing: 2px;
}

.weather__key {
  color: #3cbfe7;
  border-bottom: solid 2px #22dfe6;
  padding: 2px 0 2px 0;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 2px;
}

.weather__key:last-child {
  border: 0;
}
.weather__key__icon {
 text-align: center;

}
.weather__key__icon img {
  width:100px;
  height: auto;
 }

.weather__value {
  color: #fff;
  font-weight: 200;
  padding: 0 0 0 15px;
}


.weather__error {
  color: #f16051;
  font-size: 20px;
  letter-spacing: 1px;
  font-weight: 200;
}

</style>
