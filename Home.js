import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity  } from 'react-native';

    const Home =({navigation})=>{
        return(
            <View style={styles.container}>
            <Text style={styles.text}>This is Home Screen</Text>
        
            <TouchableOpacity style={styles.button1}
         onPress={() => navigation.navigate("Profile")}>
             <Text style={{padding:12, color:'black'}}>Go to Profile Screen</Text>
             </TouchableOpacity>

         <TouchableOpacity style={styles.button2}
         onPress={() => navigation.navigate("Setting")}>
             <Text style={{padding:12, color:'black'}}>Go to Setting Screen</Text>
             </TouchableOpacity>
            
             <TouchableOpacity style={styles.button3}
         onPress={() => navigation.navigate("Contact")}>
             <Text style={{padding:12, color:'white'}}>Go to Contact Screen</Text>
             </TouchableOpacity>
                  </View>
        );
    };

    const styles = StyleSheet.create({
        container:{
            flex:1,
            alignItems:'center',
            justifyContent:'center'
        }, 
        text:{
            fontSize:20,
    
        },  
        button1:{
            height:50,
            width:170,
            backgroundColor:'yellow',
            borderRadius:10,
            alignItems:'center',
            margin:10
        },
        button2:{
            height:50,
            width:170,
            backgroundColor:'#1CEC8D',
            borderRadius:10,
            alignItems:'center',
            margin:10
        },
        button3:{
            height:50,
            width:170,
            backgroundColor:'#8734C4',
            borderRadius:10,
            alignItems:'center',
            margin:10
        }
      });

      export default Home;