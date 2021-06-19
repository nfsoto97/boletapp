import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginNavigator from './LoginStack';
import BottomNavigation from './BottomTabStack';
import {connect} from 'react-redux';
import {Text} from 'react-native';

const RootStack = createStackNavigator();

const RootNavigation = ({isValidLogin}) => (
  <NavigationContainer>
    <RootStack.Navigator headerMode="none">
    {/* !isValidLogin */}
      {!isValidLogin ? (
        <RootStack.Screen name="LoginNavigator" component={LoginNavigator} />
      ) : (
        <>
        <RootStack.Screen name="BotonesInferiores" component={BottomNavigation} />
        </>
        // <>
        //   <Text>Bienvenido</Text>
        // </>
      )}
      {/* <RootStack.Screen name="BotonesInferiores" component={BottomNavigation} />
      <RootStack.Screen name="Screens" component={ScreenNavigator} /> */}
    </RootStack.Navigator>
  </NavigationContainer>
);

// const mapStateToProps = globalState => {
//   return {
//     isValidLogin: globalState.loginReducer.valid,
//   };
// };

const mapStateToProps = globalState => {
  return {
    isValidLogin: globalState.loginReducer.valid,
  };
};

export default connect(mapStateToProps)(RootNavigation);
