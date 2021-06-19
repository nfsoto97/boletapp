import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../config/colors';

const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: 'orange',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    width:80,
    height:80,
    borderRadius:50,
    marginBottom:6,
    marginTop:6,
  },
  text: {
    color: colors.white,
    fontSize: 20,
  },
  boton:{
    alignItems: 'center',
    justifyContent: 'center',
  }
});

const BotonCalculador = ({onClick,valor,fontSize=50,mleft=18,icon='',color='white'}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onClick} style={styles.boton,{marginLeft:mleft}}>
          {icon=='' ? (
          <Text style={{fontSize:fontSize,color:color}}>{valor}</Text>
          ):(
            <Icon size={50} name={icon} color={color} />
          )}
      </TouchableOpacity>
    </View>
  );
};

export default BotonCalculador;
