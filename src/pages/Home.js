import React,{Component} from 'react';
import {SafeAreaView, View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import connect from "react-redux/es/connect/connect";
import {loginUser} from "../Actions/LoginAction";
import Icon from "react-native-vector-icons/AntDesign";

class Home extends Component{
    constructor(props) {
        super(props)
        console.log(props.userDetail.email)
        console.log(props.userDetail.uid)


    }
          render()
          {
              return(
                  <View style={{flex: 1,backgroundColor: 'white'}}>
                      <View style={{flex:1}}><Image style={style.image1} source={require('../images/property.jpg')}  /></View>
                   <View style={{marginTop: 20}}><TouchableOpacity
                          underlayColor="transparent"
                          onPress={()=>{this.props.navigation.navigate('Selling')}}>
                          <View style={style.subview} >
                              <Image style={style.imagestyle} source={require('../images/iconss.png')}  />
                              <Text style={style.text1}>Post Residential property </Text>
                              <Icon name="right" size={20} style={style.iconstyle}/>
                          </View></TouchableOpacity></View>


                  </View>

              )
          }
}

const style=StyleSheet.create({
    image1:{


        paddingTop: 40,
        paddingLeft: 4,
        flex:1,
        opacity:0.8,
        resizeMode: 'cover'
    },
        text1:{
            fontSize:18,
            color:'rgb(78,78,78)',
            paddingTop: 10,
            paddingLeft:10,
            flex:8
        },
        subview:{
            height:50,
            backgroundColor:'white',
            margin:20,
            flexDirection: 'row',
            borderBottomWidth: 1,
            borderColor:'rgb(201,201,201)'
        },
        iconstyle:{
            flex:1,
            paddingTop: 15
        },
    imagestyle:{
        height:50,
        width:50
    }


})
const mapStateToProps = (state)=>{
    return{
        userDetail:state.user.userDetail
    };
};

export default connect(mapStateToProps,{


}) (Home)
