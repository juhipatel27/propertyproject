import React,{Component} from 'react';
import {Image, ScrollView, StyleSheet, TouchableHighlight, View, TouchableOpacity, Text} from 'react-native';
import {greycolor} from "../comman/color";
import {screenHeight,screenWidth}from '../../helper/Constant'
import {Button} from '../comman/Button'
import App from '../../App';
class Home extends Component {
    constructor(props) {
        super(props)


    }

    render() {
        return (
            <ScrollView style={{flex:1,backgroundColor:'white'}}
                        showsHorizontalScrollIndicator={true}
                        horizontal={true}
                        pagingEnabled={true}
                        scrollEnabled={true}>

                <View style={style.viewstyle}>
                  <View><Image
                        style={style.image1}
                        source={require('../images/thinking.jpg')}/></View>
                  <View><TouchableHighlight
                        style={{height: 60, backgroundColor: 'rgb(52,152,219)',marginTop:20}}
                        underlayColor="transparent"
                        onPress={()=>{this.props.navigation.navigate('Login')}}
                        >
                        <Text style={{color: 'white', alignSelf: 'center', paddingTop: 20,fontWeight:'bold'}}>LET'S GET STARTED</Text>
                  </TouchableHighlight></View>

                </View>
                <View style={style.viewstyle}>
                    <View><Image
                        style={style.image1}
                        source={require('../images/thinking1.jpg')}/></View>
                    <View><TouchableHighlight
                        style={{height: 60, backgroundColor: 'rgb(52,152,219)',marginTop:20}}
                        underlayColor="transparent"
                        onPress={()=>{this.props.navigation.navigate('Login')}}

                    >
                        <Text style={{color: 'white', alignSelf: 'center', paddingTop: 20,fontWeight:'bold'}}>LET'S GET STARTED</Text>
                    </TouchableHighlight></View>
                </View>
                <View style={style.viewstyle}>
                    <View><Image
                        style={style.image1}
                        source={require('../images/1think.jpeg')}/></View>
                    <View><TouchableHighlight
                        style={{height: 60, backgroundColor: 'rgb(52,152,219)',marginTop:20}}
                        underlayColor="transparent"
                        onPress={()=>{this.props.navigation.navigate('Login')}}
                    >
                        <Text style={{color: 'white', alignSelf: 'center', paddingTop: 20,fontWeight:'bold'}}>LET'S GET STARTED</Text>
                    </TouchableHighlight></View>
                </View>
                <View style={style.viewstyle}>
                    <View><Image
                        style={style.image1}
                        source={require('../images/2think.jpeg')}/></View>
                    <View><TouchableHighlight
                        style={{height: 60, backgroundColor: 'rgb(52,152,219)',marginTop:20}}
                        underlayColor="transparent"
                        onPress={()=>{this.props.navigation.navigate('Login')}}
                        >
                        <Text style={{color: 'white', alignSelf: 'center', paddingTop: 20,fontWeight:'bold'}}>LET'S GET STARTED</Text>
                    </TouchableHighlight></View>
                </View>
            </ScrollView>
        )
    }
}
const style = StyleSheet.create({

    image1: {
        width: 400,
        height: 400,
        paddingTop: 2,
        paddingLeft: 20,
        alignSelf: 'center'
    },
    image2: {
        width: 300,
        height: 300,
        paddingTop: 2,
        paddingLeft: 20,
        alignSelf: 'center'
    },
    viewstyle:{
        flex: 1,
        height: screenHeight,
        width: screenWidth,
        justifyContent: 'center',
        flexDirection: 'column'
    }
})
export default Home;