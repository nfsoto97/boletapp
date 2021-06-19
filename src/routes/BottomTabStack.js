import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//import HomeNavigation from './HomeStack';
//import World from '../screen/World';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {StyleSheet, View} from 'react-native';
import colors from '../config/colors';
import HomeScreen from '../screens/HomeScreen'
import HomeNavigator from '../routes/HomeStack'
import PerfilScreen from '../screens/PerfilScreen';
import UploadImageScreen from '../screens/UploadImageScreen';
//import Countries from '../screen/Countries';
//import Menu from '../screen/Menu';
//import {useTheme} from '../contexts/Theme';

const styles = StyleSheet.create({
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const BottomTabs = createBottomTabNavigator();

const BottomNavigation = () => {
  // const {
  //   mainTheme: {backgroundColor},
  // } = useTheme();

  return (
    <BottomTabs.Navigator
      initialRouteName="Calculadora"
      tabBarOptions={{
        showLabel: false,
        activeTintColor: colors.maximumBlue,
        inactiveTintColor: colors.cameoPink,
        style: {
          backgroundColor: colors.white,
        },
      }}>
      <BottomTabs.Screen
        name="Home"
        component={PerfilScreen}
        options={{
          tabBarIcon: ({color, focused}) => {
            Icon.loadFont();
            const iconSize = focused ? 35 : 25;
            return (
              <View style={styles.icon}>
                <Fontisto name="male" color={color} size={iconSize} />
              </View>
            );
          },
        }}
      />
      <BottomTabs.Screen
        name="Calculadora"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({color, focused}) => {
            Fontisto.loadFont();
            const iconSize = focused ? 35 : 25;
            return (
              <View style={styles.icon}>
                <Fontisto name="calculator" color={color} size={iconSize} />
              </View>
            );
          },
        }}
      />
      <BottomTabs.Screen
        name="Menu"
        component={UploadImageScreen}
        options={{
          tabBarIcon: ({color, focused}) => {
            Ionicons.loadFont();
            const iconSize = focused ? 30 : 25;
            return (
              <View style={styles.icon}>
                <Ionicons name="menu" color={color} size={iconSize} />
              </View>
            );
          },
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default BottomNavigation;
