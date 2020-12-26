import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
  } from 'react-native';


  const Contact =()=>{
      return(
          <View style={styles.container}>
              <Text style={styles.text}>This is Contact Screen</Text>
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

  export default Contact;