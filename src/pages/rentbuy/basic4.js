import React,{Component} from 'react';
import {SafeAreaView, View, Text, Image, StyleSheet, TouchableOpacity, TouchableHighlight, TextInput} from 'react-native'
import {screenHeight,screenWidth} from '../../../helper/Constant'
import RadioForm,{RadioButton,RadioButtonInput,RadioButtonLabel} from 'react-native-simple-radio-button'

class Basic4 extends Component {
    constructor(props) {
        super(props)
        this.state={
            value:0,
            city:'',
            budget:'',
            type:'R'

        }

    }
    componentWillMount() {
        this.state.city = this.props.navigation.state.params.commandata.city;
        this.state.budget = this.props.navigation.state.params.commandata.budget;

    }
    onButtonPress=()=>{
        const commandata1={
            city:this.state.city,
            budget:this.state.budget,
            type:this.state.type

        }
        this.props.navigation.navigate('Basic5',{commandata1})
    }




   onRadioPress=()=>{
        if(this.state.value === 0){
            this.setState({value:1,type:'C'})
        }else{
            this.setState({value:0,type:'R'})
        }

   }

    radio_props=[
        {label:'Residential',value:0},
        {label:'commercial',value:1}
    ];





    render(){
        return(
            <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
                <View>
                    <Image source={require('../../images/property2.png')}
                           style={{width:screenWidth,height: (screenWidth*164)/375}}  resizeMode = 'cover'/>
                </View>

                <View style={{marginTop: 15}}>
                    <Text style={style.text1}>select your Property type: </Text>
                    <RadioForm
                        radio_props={this.radio_props}
                        intial={0}
                        onPress={this.onRadioPress.bind(this)}
                    />

                </View>


                <View style={{position: 'absolute',bottom:20,left:10,right:10,backgroundColor:'rgb(62,172,255)',height:50}}>
                    <TouchableOpacity onPress={this.onButtonPress.bind(this)}><Text style={{color:'white',alignSelf: 'center',paddingTop: 15}}>Next</Text></TouchableOpacity>
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
export default Basic4;