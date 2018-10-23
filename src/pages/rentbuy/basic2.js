import React,{Component} from 'react';
import {SafeAreaView, View, Text, Image, StyleSheet, TouchableOpacity, TouchableHighlight, TextInput} from 'react-native'
import {screenHeight,screenWidth} from '../../../helper/Constant'

class Basic2 extends Component {
    constructor(props) {
        super(props)
        this.state={city:''}
    }
    onButtonPress=()=>{
       const Scity={
            city:this.state.city
        }
        this.props.navigation.navigate('Basic3',{Scity})
    }





    render()
    {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
            <View>
                <Image source={require('../../images/property3.png')}
                       style={{width: screenWidth, height: (screenWidth * 164) / 375}} resizeMode='cover'/>
            </View>

            <View style={{marginTop: 15}}>
                <Text style={style.text1}> I am looking in the location</Text>
            </View>
            <View style={{margin: 20}}>
                <TextInput
                    style={{borderBottomWidth: 1, color: 'rgb(78,78,78)', fontSize: 20}}
                    placeholder="enter city name"
                    onChangeText={(city) => this.setState({city})}

                />
            </View>


            <View style={{
                position: 'absolute',
                bottom: 20,
                left: 10,
                right: 10,
                backgroundColor: 'rgb(62,172,255)',
                height: 50
            }}>
                <TouchableOpacity onPress={this.onButtonPress.bind(this)}><Text style={{color: 'white', alignSelf: 'center', paddingTop: 15}}>Next</Text></TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

}
const style=StyleSheet.create({
    image1: {
        height: 164,
        width: 375
    },
    text1:{
        fontSize:20,
        color:'rgb(78,78,78)',
        paddingTop: 10,
        paddingLeft:10,

    }
})
export default Basic2;