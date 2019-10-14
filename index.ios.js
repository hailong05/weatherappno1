import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const apiKey = "a1f691935e1fbf56a2766db0ee19797a";
const url = "http://api.openweathermap.org/data/2.5/weather?";

export default class DemoWeatherApp extends Component {
    constructor(props) {
      super(props); 
      
      optionGeo = {
        timeout: 2000,
        maximumAge: 1900,
        enableHighAccuracy : true
      }

      this.state={
        localtion: null
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
        .then((dataJson)=>console.log(dataJson))
        .done();
      }
    }


    render(){
        return(
            <View style={styles.container} >
              <View style={styles.body}>
                <View style={styles.containerBodyWeather}>
                  
                </View>
              </View>

              <View style={styles.footer}>
                
              </View>
            </View>
        )
    }
}


var styles = StyleSheet.create({
  container: {
        flex:1,
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
  }  

});import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const apiKey = "a1f691935e1fbf56a2766db0ee19797a";
const url = "http://api.openweathermap.org/data/2.5/weather?";

export default class DemoWeatherApp extends Component {
    constructor(props) {
      super(props); 
      
      optionGeo = {
        timeout: 2000,
        maximumAge: 1900,
        enableHighAccuracy : true
      }

      this.state={
        localtion: null
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
        .then((dataJson)=>console.log(dataJson))
        .done();
      }
    }


    render(){
        return(
            <View style={styles.container} >
              <View style={styles.body}>
                <View style={styles.containerBodyWeather}>
                  
                </View>
              </View>

              <View style={styles.footer}>
                
              </View>
            </View>
        )
    }
}


var styles = StyleSheet.create({
  container: {
        flex:1,
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
  }  

});