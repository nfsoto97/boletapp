import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import colors from '../config/colors';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AsyncStorage from '@react-native-async-storage/async-storage';




const styles = StyleSheet.create({
    body:{
        backgroundColor:colors.lightPeriwinkle
    },
    inputsContainer: {
        paddingTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
      },
      textInput: {
        width: '90%',
        padding: 10,
        borderWidth: 1,
        borderColor: colors.maximumBlue,
        marginVertical: 10,
        borderRadius: 8,
        fontSize: 19,
      },
      loginButton: {
        marginTop: 20,
        backgroundColor: colors.middleBlue,
        flexDirection: 'row',
        borderRadius: 8,
        alignItems: 'center',
        padding: 10,
      },
      loginButtonText: {
        fontSize: 20,
        marginRight: 5,
        color: colors.white,
      },
      inputFocusBorderColor: {
        borderColor: colors.black,
      },
});

const PerfilScreen = () => {
   const [userName, updateUserName] = useState('');
   const [userCorreo, updateCorreo] = useState('');
   const [userNumber, updateNumber] = useState('');
   const [focusNameInput, updateFocusNameInput] = useState(false);
   const [focusCorreoInput, updateFocusCorreoInput] = useState(false);
   const [focusNumberInput, updateFocusNumberInput] = useState(false);

   try {
    AsyncStorage.multiGet(['name','correo','number']).then((data)=>{
        if(data){
         this.updateUserName(data[0][1]);
         this.updateCorreo(data[1][1]);
         this.updateNumber(data[2][1]);
        }
     });
       
   } catch (error) {
       console.warn(error);
   }





  const saveCallback= () => {
    AsyncStorage.multiSet([
        ['name',userName.toString()],
        ['correo',userCorreo.toString()],
        ['number',userNumber.toString()],
        ]);
  };


  return (
    <>
      <KeyboardAwareScrollView style={styles.body} extraScrollHeight={20}>
        <View style={styles.inputsContainer}>
          <TextInput
            placeholder="Usuario"
            autoCapitalize="none"
            value={userName}
            onChangeText={name => updateUserName(name)}
            style={[
              styles.textInput,
              focusNameInput && styles.inputFocusBorderColor,
            ]}
            onFocus={() => updateFocusNameInput(true)}
            onBlur={() => {
              updateFocusNameInput(false);
            }}
          />
          <TextInput
            placeholder="Correo"
            autoCapitalize="none"
            value={userCorreo}
            onChangeText={correo => updateCorreo(correo)}
            style={[
              styles.textInput,
              focusCorreoInput && styles.inputFocusBorderColor,
            ]}
            onFocus={() => updateFocusCorreoInput(true)}
            onBlur={() => {
                updateFocusCorreoInput(false)
            }}
          />
           <TextInput
            placeholder="Numero"
            autoCapitalize="none"
            value={userNumber}
            onChangeText={numero => updateNumber(numero)}
            style={[
              styles.textInput,
              focusNumberInput && styles.inputFocusBorderColor,
            ]}
            onFocus={() => updateFocusNumberInput(true)}
            onBlur={() => updateFocusNumberInput(false)}
          />
          <TouchableOpacity
            onPress={() => saveCallback()}
            style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Guardar Datos</Text>
            <Fontisto name="save" color={'white'} size={20} />
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </>
  );
};


export default PerfilScreen;
