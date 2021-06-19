import React from 'react';
import { Text, StyleSheet, SafeAreaView,View } from 'react-native';
import { color } from 'react-native-reanimated';
import colors from '../config/colors';


const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.maximumBlue,
    margin:5,
    alignContent:'space-between',
    justifyContent:'space-around',
    flexDirection:'row',
    flex:1,
    borderRadius:20,
    padding:13
  },
  text:{
      fontSize:20,
      color:colors.white
  }
});

const Box = ({producto}) => {

  return (
      <SafeAreaView style={styles.container}>

          <Text style={styles.text}>{producto.nombre}</Text>
          <Text style={styles.text}>${producto.precio}</Text>

      </SafeAreaView>
  );
};

export default Box;