import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../config/colors';
import BotonCalculador from './BotonCalculadora';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.middleBlue,
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: "wrap",
    alignItems: 'center',
    flex:2.7
    
  },
  text: {
    color: colors.white,
    fontSize: 20,
  },
});

const BotoneraCalculadora = ({funcSuma,funcChangeValue,funcDelete,funcGenerate}) => {
  return (
    <View style={styles.container}>
        <BotonCalculador onClick={()=>{funcChangeValue('7')}} valor='7' ></BotonCalculador>
        <BotonCalculador onClick={()=>{funcChangeValue('8')}} valor='8' ></BotonCalculador>
        <BotonCalculador onClick={()=>{funcChangeValue('9')}} valor='9' ></BotonCalculador>
        <BotonCalculador onClick={funcDelete} mleft={5} icon='arrow-left-bold-outline' valor='<' ></BotonCalculador>
        <BotonCalculador onClick={()=>{funcChangeValue('4')}} valor='4' ></BotonCalculador>
        <BotonCalculador onClick={()=>{funcChangeValue('5')}} valor='5' ></BotonCalculador>
        <BotonCalculador onClick={()=>{funcChangeValue('6')}} valor='6' ></BotonCalculador>
        <BotonCalculador valor='C' ></BotonCalculador>
        <BotonCalculador onClick={()=>{funcChangeValue('1')}} valor='1' ></BotonCalculador>
        <BotonCalculador onClick={()=>{funcChangeValue('2')}} valor='2' ></BotonCalculador>
        <BotonCalculador onClick={()=>{funcChangeValue('3')}} valor='3' ></BotonCalculador>
        <BotonCalculador onClick={()=>{funcSuma()}}  fontSize={25} mleft={12} valor='ADD' ></BotonCalculador>
        <BotonCalculador onClick={()=>{funcChangeValue('0')}} valor='0' ></BotonCalculador>
        <BotonCalculador onClick={()=>{funcChangeValue('00')}} fontSize={40} mleft={12} valor='00' ></BotonCalculador>
        <BotonCalculador onClick={()=>{funcChangeValue('000')}} fontSize={25} mleft={12} valor='000' ></BotonCalculador>
        <BotonCalculador onClick={()=>{funcGenerate()}} fontSize={25} mleft={12} valor='Gen'></BotonCalculador>

    </View>
  );
};

export default BotoneraCalculadora;
