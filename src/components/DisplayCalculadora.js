import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../config/colors';

const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: colors.middleBlue,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    flex:0.8,
    width:'100%',
    
  },
  text:{
      fontSize:50,
      color:'white',
      marginRight:20
  }
});

const DisplayCalculadora = ({totalCalculo,total}) => {
  return (
    <View style={styles.container}>
        <View style={{flexDirection:'column',alignItems:'flex-end'}}>
          <Text style={styles.text}>{totalCalculo}</Text>
          <Text style={styles.text}>Total: ${total}</Text>
        </View>
    </View>
  );
};

export default DisplayCalculadora;