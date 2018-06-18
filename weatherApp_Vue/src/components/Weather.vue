
<template>
 <div class="container" id="weatherinfo">
      
    <div class="col-md-8 form-container">
         <div class="col-md-8">
        
            <input type="text"  v-model="city" placeholder="City">
             <input type="text"  v-model="country" placeholder="Country">
              <button type="submit" v-on:click='getData'>Search</button>
        </div>
        <div >
            <div  >                     
                <p class="weather__key">Selected Location:<span class="weather__value">{{city}}, {{country}}</span></p>
                <p v-html="icon" class="weather__key"><span class="weather__value">{{icon}}</span></p>
                <p class="weather__key">Weather Condition: <span class="weather__value">{{ description }}</span></p>
                <p class="weather__key">Average Temperature :  <span class="weather__value">{{temperature }}</span></p>
                <p  v-html="temp_min" class="weather__key"> <span class="weather__value">{{temp_min }}</span></p>
                <p class="weather__key">Hottest :  <span class="weather__value">{{temp_max }}</span></p>
                <p class="weather__key">Sunrise :  <span class="weather__value">{{sunrise }}</span></p>
                <p class="weather__key">Sunset :  <span class="weather__value">{{sunset }}</span></p>
                <p class="weather__key">Latitude : <span class="weather__value">{{latitude }}</span></p>
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


</style>
