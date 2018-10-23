import React,{Component} from 'react';
import {SafeAreaView, View, Text, Image, StyleSheet, TouchableOpacity, TouchableHighlight} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import {greycolor} from "../../comman/color";
class Searchhome extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
                <View style={style.view1}>
                    <TouchableHighlight onPress={() => {
                        this.props.navigation.goBack()
                    }} underlayColor="transparent">
                        <Icon name="left" size={20} style={{flex: 1, paddingTop: 15, color: greycolor}}/>
                    </TouchableHighlight></View>
                <View>
                    <Image source={require('../../images/search1.jpg')}
                           style={{width:200,height: 200,alignSelf:'center'}}  resizeMode = 'cover'/>
                </View>


                <TouchableOpacity
                    underlayColor="transparent"
                    onPress={()=>{this.props.navigation.navigate('City')}}
                    >
                    <View style={style.subview} >
                        <Text style={style.text1}>city wise search</Text>
                        <Icon name="right" size={20} style={{flex:1,paddingTop: 15}}/>
                    </View></TouchableOpacity>


                <TouchableOpacity
                    underlayColor="transparent"
                    onPress={()=>{this.props.navigation.navigate('Type')}}>
                    <View style={style.subview} >
                        <Text style={style.text1}>Type wise search</Text>
                        <Icon name="right" size={20} style={{flex:1,paddingTop: 15}}/>
                    </View></TouchableOpacity>

                <TouchableOpacity
                    underlayColor="transparent"
                    onPress={()=>{this.props.navigation.navigate('Rate')}}>
                    <View style={style.subview} >
                        <Text style={style.text1}>Rate wise search</Text>
                        <Icon name="right" size={20} style={{flex:1,paddingTop: 15}}/>
                    </View></TouchableOpacity>

                <TouchableOpacity
                    underlayColor="transparent"
                    onPress={()=>{this.props.navigation.navigate('Bedroom')}}>
                    <View style={style.subview} >
                        <Text style={style.text1}>Bedroom wise search</Text>
                        <Icon name="right" size={20} style={{flex:1,paddingTop: 15}}/>
                    </View></TouchableOpacity>
                <TouchableOpacity
                    underlayColor="transparent"
                    onPress={()=>{this.props.navigation.navigate('Basic2')}}>
                    <View style={style.subview} >
                        <Text style={style.text1}>custom search</Text>
                        <Icon name="right" size={20} style={{flex:1,paddingTop: 15}}/>
                    </View></TouchableOpacity>

            </SafeAreaView>
        )
    }
}

const style=StyleSheet.create({
    view1: {
        flexDirection: 'row',
        height: 60,
        marginLeft: 10,
    },
    image1:{
        height:154,
        width:350
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

export default Searchhome;