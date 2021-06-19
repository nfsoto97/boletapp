import React, {Component} from 'react';
import {StyleSheet,SafeAreaView,Dimensions,Text} from 'react-native';
import colors from '../config/colors';
import Pdf from 'react-native-pdf';

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
  pdf: {
    flex:1,
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
    }
});

class PdfScreen extends Component{
  constructor(props) {
    super(props);
    this.state = {
        source:{uri:this.props.URI,cache:true},
    };
  }

  componentDidMount(){
    this.setURI();
  }

  setURI = () =>{
    if(this.props.URI==null){
      const { params } =this.props.route;
      this.setState({source:{uri:params.urlPDF,cache:true}});
    }
  }


  render() {
    const {source}=this.state;
    return (
      <SafeAreaView style={styles.container}>
           <Pdf
                    source={source}
                    onLoadComplete={(numberOfPages,filePath)=>{
                        console.log(`number of pages: ${numberOfPages}`);
                    }}
                    onPageChanged={(page,numberOfPages)=>{
                        console.log(`current page: ${page}`);
                    }}
                    onError={(error)=>{
                        console.log(error);
                    }}
                    onPressLink={(uri)=>{
                        console.log(`Link presse: ${uri}`)
                    }}
                    style={styles.pdf}/>
      </SafeAreaView>
    );
  }


}

export default PdfScreen;
