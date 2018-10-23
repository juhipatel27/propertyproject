import React,{Component} from 'react';
import {SafeAreaView,View,Text,Image,StyleSheet,ScrollView,TouchableOpacity,TouchableHighlight,TextInput} from 'react-native';
import {greencolor, greycolor} from '../../comman/color'
import Icon from "react-native-vector-icons/AntDesign";
import {screenWidth,screenHeight} from '../../../helper/Constant'
class Display1 extends Component {
    constructor(props) {
        super(props)
        this.state={
            city:'',
            locality:'',
            type:'',
            price:'',
            bedroom:'',
            bathroom:'',
            balconies:'',
            description:'',

            imagesource:[]
        }
    }
    componentWillMount(){

        this.state.city=this.props.navigation.state.params.sell1.city;
        this.state.locality=this.props.navigation.state.params.sell1.location;
        this.state.type=this.props.navigation.state.params.sell1.ptype;
       // this.state.imagesource=this.props.navigation.state.params.sell1.image;
        this.state.imagesource=this.props.navigation.state.params.sell1.imagesource1
        this.state.bedroom=this.props.navigation.state.params.sell1.bedroom
        this.state.bathroom=this.props.navigation.state.params.sell1.bathroom
        this.state.balconies=this.props.navigation.state.params.sell1.balconies
        this.state.description=this.props.navigation.state.params.sell1.balconies
        this.state.price=this.props.navigation.state.params.sell1.price
    }


    render(){
        return(
            <SafeAreaView style={{flex: 1,backgroundColor:'white'}}>
                <View style={style.view1}>
                    <TouchableHighlight onPress={() => {
                        this.props.navigation.navigate('Tab')
                    }} underlayColor="transparent">
                        <Icon name="left" size={20} style={{flex: 1, paddingTop: 15, color: greycolor}}/>
                    </TouchableHighlight>

                    <View><Text style={{fontSize: 20, marginTop: 15, fontWeight: 'bold', color: greycolor}}>
                        property Detail </Text></View></View>

                <ScrollView style={{backgroundColor:'white'}}
                            showsHorizontalScrollIndicator={true}
                            horizontal={true}
                            pagingEnabled={true}
                            scrollEnabled={true}>
                    {
                        this.state.imagesource.map((imagesource) => {
                            console.log(imagesource)
                            return (
                                <Image source={{uri: imagesource}}
                                       style={{width: screenWidth, height: 400, margin:5}}/>
                            )
                        })

                    }

                </ScrollView>

                <ScrollView>
                    <View style={style.subview}>
                        <View style={style.view2}><Text style={style.text1}>Type:</Text></View>
                        <View style={style.view2}><Text style={style.text2}>{this.state.type}</Text></View>
                    </View>

                    <View style={style.subview}>
                        <View style={style.view2}><Text style={style.text1}>city:</Text></View>
                        <View style={style.view2}><Text style={style.text2}>{this.state.city}</Text></View>
                    </View>
                    <View style={style.subview}>
                        <View style={style.view2}><Text style={style.text1}>Locality:</Text></View>
                        <View style={style.view2}><Text style={style.text2}>{this.state.locality}</Text></View>
                    </View>
                    <View style={style.subview}>
                        <View style={style.view2}><Text style={style.text1}>No of Bedroom:</Text></View>
                        <View style={style.view2}><Text style={style.text2}>{this.state.bedroom}</Text></View>
                    </View>
                    <View style={style.subview}>
                        <View style={style.view2}><Text style={style.text1}>No of Bathroom:</Text></View>
                        <View style={style.view2}><Text style={style.text2}>{this.state.bedroom}</Text></View>
                    </View>
                    <View style={style.subview}>
                        <View style={style.view2}><Text style={style.text1}>No of Bathroom:</Text></View>
                        <View style={style.view2}><Text style={style.text2}>{this.state.balconies}</Text></View>
                    </View>
                    <View style={style.subview}>
                        <View style={style.view2}><Text style={style.text1}>No of Balconies:</Text></View>
                        <View style={style.view2}><Text style={style.text2}>{this.state.balconies}</Text></View>
                    </View>
                </ScrollView>


            </SafeAreaView>
        )}
}




const style=StyleSheet.create({
    mainview: {
        flexDirection: 'row'

    },
    view1: {
        flexDirection: 'row',
        height: 60,
        marginLeft: 10,
        borderBottomWidth: 1,
        borderColor: 'black'
    },
    text1:{
        color:'grey',
        fontSize:15,
        fontWeight: 'bold'

    },
    text2:{
        color:greencolor,
        fontSize:15,
        fontWeight:'bold'

    },
    view2:{
        marginLeft:20,
        flex:1
    },
    subview:{
        flexDirection:'row',
        marginTop:10,
        borderBottomWidth: 1,
        borderColor:'grey'
    }
})


export default Display1;