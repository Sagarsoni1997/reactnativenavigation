import React, { Component } from 'react';
import {
    
    View,
    Text, StyleSheet, TouchableOpacity  } from 'react-native';


  const Profile =({navigation})=>{
      return(
          <View style={styles.container}>
    <Text style={styles.text}>This is Profile Screen</Text>
    
    <TouchableOpacity style={styles.button1}
         onPress={() => navigation.navigate("Password")}>
             <Text style={{padding:12, color:'white'}}>Reset Password</Text>
    </TouchableOpacity>
    
    <TouchableOpacity style={styles.button1}
         onPress={() => navigation.navigate("Profile")}>
             <Text style={{padding:12, color:'white'}}>Go to Profile Screen</Text>
    </TouchableOpacity>
    
    <TouchableOpacity style={styles.button1}
         onPress={() => navigation.navigate("Profile")}>
             <Text style={{padding:12, color:'white'}}>Go to Profile Screen</Text>
    </TouchableOpacity>
    

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
    button1:{
        height:50,
        width:170,
        backgroundColor:'black',
        borderRadius:10,
        alignItems:'center',
        margin:10
    },
  });

  export default Profile;