import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
  } from 'react-native';


  const Password =({navigation})=>{
      return(
          <View style={styles.container}>
              <Text style={styles.text}>Reset your Password from here.!!!</Text>
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

  export default Password;