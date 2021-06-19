import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import PdfScreen from '../screens/PdfScreen';


const HomeStack = createStackNavigator();

const HomeNavigator = () => (
  <HomeStack.Navigator headerMode="none">
    <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
    <HomeStack.Screen name="PdfScreen" component={PdfScreen} />
  </HomeStack.Navigator>
);

export default HomeNavigator;
