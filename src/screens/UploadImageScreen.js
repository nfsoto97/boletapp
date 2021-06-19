import React, {Component} from 'react';
import {StyleSheet,SafeAreaView,Dimensions,View,Text,TouchableOpacity,Image} from 'react-native';
import colors from '../config/colors';
import Pdf from 'react-native-pdf';
import ImagePicker from 'react-native-image-picker';

import { DEFAULT } from '../_shared/var.constant';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.blue,
  },
});

class UploadImageScreen extends Component{
  constructor(props) {
    super(props);
    this.state = {
        sourceImageOne:DEFAULT,
    };
  }

    selectImage(num){
        const options = {
        title: 'Selecionar una opción',
        takePhotoButtonTitle:'Tomar una Foto',
        chooseFromLibraryButtonTitle:'elegir desde el dispositivo',
        mediaType:'photo',
        maxWidth: 350,
        maxHeight: 350,
        quality: 1,
        };
        ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);
        if (response.didCancel) {
            console.log('User cancelled image picker');
        }
        else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
        }
        else {
            if(num==1){
            this.setState({
                sourceImageOne:response.data
            });
            }
        }
        });
    }


  render() {
    const {source}=this.state;
    return (
    <SafeAreaView style={{backgroundColor:colors.middleBlue,flex:1,justifyContent:'space-around',alignItems:'center'}}>
            <Text style={{fontSize:30,color:colors.white}}>Sube tu documento</Text>
            <Text style={{fontSize:30,color:colors.white}}>Presiona aqui:</Text>
            <TouchableOpacity onPress={()=>this.selectImage(1)}>
              <Image style={{height: 200,width:200,marginLeft:10,marginRight:10,borderWidth:1,borderColor:'#039be5'}} source={{uri:'data:image/jpeg;base64,'+this.state.sourceImageOne}}/>
            </TouchableOpacity>
    </SafeAreaView>
    );
  }


}

export default UploadImageScreen;
