import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const apiKey = "a1f691935e1fbf56a2766db0ee19797a";
const url = "http://api.openweathermap.org/data/2.5/weather?";
const backgroudImage = require("./weather-icons/giphy.gif");

const scatteredclouds = require("./weather-icons/white_cloud.png");
const clearsky = require("./weather-icons/sunny.png");
const fewclouds = require("./weather-icons/sunny_intervals.png");
const brokenclouds = require("./weather-icons/thundery_showers.png");
const showerrain = require("./weather-icons/heavy_rain_showers.png");
const rain = require("./weather-icons/cloudy_with_light_rain.png");
const thunderstorm = require("./weather-icons/thunderstorms.png");
const snow = require("./weather-icons/cloudy_with_light_snow.png");
const mist = require("./weather-icons/mist.png");
const temperature = require("./weather-icons/temperature.png");

export default class DemoWeatherApp extends Component {
    constructor(props) {
      super(props); 
      
      optionGeo = {
        timeout: 2000,
        maximumAge: 1900,
        enableHighAccuracy : true
      }

      this.state={
        localtion: null,
        coords: null
      } 
    }

    componentWillMount() {
      navigator.geolocation.getCurrentPosition(this._getLocation.bind(this),(error)=>console.log(error.message),optionGeo)    
    }

    _getLocation(dataLocation){
      this.setState({
        localtion: dataLocation.coords
      });

      if(this.state.localtion !=null){
        let urlLocation = url + "lat=" + this.state.localtion.latitude + "&lon=" + this.state.localtion.longitude + "&appid=" + apiKey + "&units=metric";
        fetch(urlLocation)
        .then((data)=> data.json())
        .then((dataJson)=>this.setState({coords:dataJson}))
        .done();
      }
    }

    _renderIconWeather(decription){
      let imageSouce = null;
      switch(decription){
        case 'clear sky' :
          imageSouce = clearsky
          break;

        case 'few clouds':
          imageSouce = fewclouds;
          break;

        case 'scattered clouds':
          imageSouce = scatteredclouds;
          break;

        case 'broken clouds':
          imageSouce = brokenclouds;
          break;

        case 'shower rain':
          imageSouce = showerrain;
          break;  

        case 'rain':
          imageSouce = rain;
          break;

        case 'thunderstorm':
          imageSouce = thunderstorm;
          break;

        case 'snow':
          imageSouce = snow;
          break;

        case 'mist':
          imageSouce = mist
          break;  

      }

      return (
          <View  key={decription} style={{flexDirection:'row',marginLeft:35}}>
            <Image style={{width:50,height:50}} source={imageSouce}/>
            <Text style={{fontSize:15,color:'white',marginTop:10}}>{decription}</Text>
          </View>
        )
    }

    render(){
        return(
            <Image resizeMode="cover" style={styles.container} source={backgroudImage}>
              <View style={styles.body}>
                <View style={styles.containerBodyWeather}>
                  
                </View>
              </View>

              <View style={styles.footer}>
                <Text style={styles.tempMaxText}>{this.state.coords && this.state.coords.main.temp_max}</Text>
                <Text style={styles.tempOText}>o</Text>
                <View >
                  <Text style={{fontSize:30,color:'white',marginTop:50,marginLeft:40}}>Hồ Chí Minh</Text>
                  <View style={styles.footer}>

                    {this.state.coords && this.state.coords.weather.map((data)=>this._renderIconWeather(data.description))}
        
                    <Image style={{width:50,height:50}} source={temperature}/>
                    <Text style={{fontSize:15,color:'white',marginTop:10}}>{this.state.coords && this.state.coords.main.temp_min}</Text>

                  </View>  
                </View>  
              </View>
            </Image>
        )
    }
}


var styles = StyleSheet.create({
  container: {
        flex:1,
        width:null,
        height:null
    },

  footer:{
    flex:1,
    flexDirection:'row',
  },

  body:{
    flex:3,
  },

  containerBodyWeather:{
    flex:1,
    margin:30,
    borderRadius:20,
    backgroundColor:"rgba(0,0,0,0.5)"
  },

  tempMaxText:{
    fontSize:150,
    color:'white',
    marginLeft:30,
    marginTop:30,
    marginBottom:30
  },

  tempOText:{
    fontSize:100,
    color:'white',
  }  

});