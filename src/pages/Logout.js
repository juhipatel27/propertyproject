import React,{Component} from 'react';
import {SafeAreaView, View, Text, Image, StyleSheet, TouchableOpacity, TouchableHighlight} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import {greycolor} from '../comman/color'
class Logout extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
                <View>
                    <Image source={require('../images/logout.jpeg')}
                           style={{width:200,height: 200,alignSelf:'center'}}  resizeMode = 'cover'/>
                </View>



                <View>
                <TouchableOpacity
                    underlayColor="transparent"
                    onPress={()=>{this.props.navigation.navigate('Login')}}>
                    <View style={style.subview} >
                        <Text style={style.text1}>Logout</Text>
                        <Icon name="logout" size={20} style={{flex:1,paddingTop: 15}}/>
                    </View></TouchableOpacity>
                </View>



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

export default Logout;