import React, {Component} from 'react';
import {View, Text, StyleSheet, Button,SafeAreaView} from 'react-native';
import BotoneraCalculadora from '../components/BotoneraCalculadora'
import DisplayCalculadora from '../components/DisplayCalculadora'
import DetailsCalculadora from '../components/DetailsCalculo'
import {BoletaRestDTO} from '../model/BoletaRestDTO';
import {ItemBoleta} from '../model/ItemBoleta'
import AsyncStorage from '@react-native-async-storage/async-storage';
import BoletaService from '../services/BoletaService'




import colors from '../config/colors';
import { interpolate } from 'react-native-reanimated';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.blue,
  },
  text: {
    fontSize: 25,
    color: colors.white,
    fontWeight: 'bold',
  },
});

class HomeScreen extends Component{
  constructor(props) { 
    super(props);
    this.state = {
      totalCalculo: '0',
      detailProducto:[],
      total:0
    };
  }

  sumTotal = () => {
    const {detailProducto,totalCalculo,total} = this.state;
    const numberTotal=(Number.parseInt(totalCalculo));
    if (numberTotal>0){
      detailProducto.push({nombre:'Producto',precio:numberTotal,cantidad:1})
      this.setState({detailProducto:detailProducto},this.deletePartial());
      this.setState({total:total+numberTotal});
    }
  }

  funcChangeValue = value => {
    const {totalCalculo}=this.state;
    if(totalCalculo=='0'){
      this.setState({ totalCalculo: value });
    }else{
      this.setState({ totalCalculo: totalCalculo+value });
    }
  }
  deletePartial = () => this.setState(({ totalCalculo }) => ({ totalCalculo: '0' }));
  boton(){
    const {detailProducto} = this.state;
    console.log(detailProducto);
  }
  generateBoleta = () =>{
    
    const {detailProducto} = this.state;
    let nuevo=new BoletaRestDTO();
    if(detailProducto.length>0){
      AsyncStorage.multiGet(['id_empresa','id_usuario','token']).then((data)=>{
        nuevo.IdEmpresa=data[0][1];
        nuevo.IdEmpresaPadre=data[0][1];
        nuevo.IdUsuario=data[1][1];
        nuevo.Token=data[2][1];
        nuevo.Items=this.state.detailProducto;
        BoletaService.generateBoleta(nuevo).then(response=>{
          this.props.navigation.navigate('PdfScreen',{
            urlPDF: response.PathBoletaPdf,
          });
        }).catch(error=>{
  
  
        });
      });
    }
  }


  render() {
    const {totalCalculo,detailProducto,total}=this.state;
    return (
      <SafeAreaView style={styles.container}>
          <DisplayCalculadora total={total} totalCalculo={totalCalculo}></DisplayCalculadora>
          <DetailsCalculadora productos={detailProducto}></DetailsCalculadora>
          {/* <Button title='botoncito' onPress={()=>this.boton()}></Button> */}
          <BotoneraCalculadora 
          funcSuma={this.sumTotal} 
          funcChangeValue={this.funcChangeValue}
          funcDelete={this.deletePartial}
          funcGenerate={this.generateBoleta}
          ></BotoneraCalculadora>
      </SafeAreaView>
    );
  }


}

export default HomeScreen;
