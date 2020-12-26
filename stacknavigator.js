import React, { Component } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from "./Home";
import Profile from "./Profile";
import Setting from "./Setting";
import Contact from "./Contact";
import Password from './Password';

const Stack = createStackNavigator();


const MainStackNavigator = () => {
    return (
      <Stack.Navigator 
      screenOptions={{
        headerStyle: {
          backgroundColor: "red",
        },
        headerTintColor: "white",
      }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} 
        options={{ title: 'Your Profile' }}/>
        <Stack.Screen name="Password" component={Password} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="Contact" component={Contact} />
      </Stack.Navigator>
    );
  }
  
  export { MainStackNavigator };
  
