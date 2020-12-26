import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
  } from 'react-native';


  const Setting =()=>{
      return(
          <View style={styles.container}>
              <Text style={styles.text}>This is Setting Screen</Text>
          </View>
      );
  };

  const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    }, 
    text:{
        fontSize:20,

    },  
  });

  export default Setting;