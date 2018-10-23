import React,{Component} from 'react';
import {
    SafeAreaView,
    View,
    Text,
    Image,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight, ScrollView
} from 'react-native'
import Icon from "react-native-vector-icons/AntDesign";
import {greycolor} from "../../comman/color";



class Bedroom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bedroom:''
        }
    }
    onButtonPress=()=>{
        let bedroom1={
            bedroom:this.state.bedroom
        }
        this.props.navigation.navigate('Listbedroom',{bedroom1})

    }

    render(){
        return(
            <SafeAreaView style={{flex: 1 ,backgroundColor:'white'}}>
                <View style={style.view1}>
                    <TouchableHighlight onPress={() => {
                        this.props.navigation.goBack()
                    }} underlayColor="transparent">
                        <Icon name="left" size={20} style={{flex: 1, paddingTop: 15, color: greycolor}}/>
                    </TouchableHighlight></View>
                <View>
                    <Image source={require('../../images/search2.jpeg')}
                           style={{width:200,height: 200,alignSelf:'center'}}  resizeMode = 'cover'/>
                </View>
                <View style={{marginTop: 30,marginLeft:20}}>
                    <Text style={{fontSize: 20}}>Enter your Bedroom:</Text>
                </View>
                <View style={{marginLeft: 20 ,marginTop: 10,marginRight: 20}}>
                    <TextInput
                        placeholder="Enter your BHK"
                        style={style.textinput}
                        onChangeText={(bedroom) =>this.setState({bedroom})}

                    />
                </View>
                <View style={{marginTop:30}}>
                    <TouchableHighlight style={{height:60,backgroundColor:'rgb(52,152,219)'}} underlayColor="transparent" onPress={this.onButtonPress.bind(this)}>
                        <Text style={style.textstyle}>Search</Text>
                    </TouchableHighlight></View>
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
    textinput:{
        borderBottomWidth: 1,
        fontSize:18,
        padding: 10

    },
    textstyle:{
        color:'white',
        alignSelf:'center',
        paddingTop: 20,
        fontSize:20
    }
})



export default Bedroom;