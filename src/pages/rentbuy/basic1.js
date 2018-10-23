import React,{Component} from 'react';
import {SafeAreaView, View, Text, Image, StyleSheet, TouchableOpacity, TouchableHighlight} from 'react-native'
import {screenHeight,screenWidth} from '../../../helper/Constant'
import Icon from 'react-native-vector-icons/AntDesign';
class Basic1 extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
                <View>
               <Image source={require('../../images/1property.png')}
                style={{width:screenWidth,height: (screenWidth*164)/375}}  resizeMode = 'cover'/>
                </View>
                <View style={{marginTop: 20,height:40}}>
                    <Text style={style.text1}>Let's  get  Started....</Text>
                </View>

                <TouchableOpacity
                    underlayColor="transparent"
                    onPress={()=>{this.props.navigation.navigate('Searchhome')}}>
                <View style={style.subview} >
                    <Text style={style.text1}>I want to Buy a property</Text>
                    <Icon name="right" size={20} style={{flex:1,paddingTop: 15}}/>
                </View></TouchableOpacity>


            </SafeAreaView>
        )
    }
}

const style=StyleSheet.create({
    image1:{
        height:164,
        width:375
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
        backgroundColor:'rgb(242,245,247)',
        margin:10,
        flexDirection: 'row',

    }
})

export default Basic1;