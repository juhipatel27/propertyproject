import React,{Component} from 'react';
import {SafeAreaView,View,Text,Image,StyleSheet,ScrollView,TouchableOpacity,TouchableHighlight,TextInput} from 'react-native';
import CheckBox from 'react-native-checkbox';
import connect from "react-redux/es/connect/connect";
import {sellingUser} from "../Actions/SellingAction";
import Icon from "react-native-vector-icons/AntDesign";
import {greycolor} from "../comman/color";

class Selling1 extends Component {
    constructor(props) {
        super(props)
        this.state={
            city:'',
            locality:'',
            type:'',
            imagesource:'',
            price:'',
            bedroom:'',
            bathroom:'',
            balconies:'',
            description:'',
            uid:props.userDetail.uid,
            imagesource1:[]
        }
    }
    componentWillMount(){

        this.state.city=this.props.navigation.state.params.user1.city;
        this.state.locality=this.props.navigation.state.params.user1.locality;
        this.state.type=this.props.navigation.state.params.user1.type;
        this.state.imagesource=this.props.navigation.state.params.user1.image;
        this.state.imagesource1=this.props.navigation.state.params.user1.imageSource1
    }
    onButtonPostClick=()=>{

        let sell={
            ptype:this.state.type,
            image:this.state.imagesource,
            city:this.state.city,
            location:this.state.locality,
            bedroom:this.state.bedroom,
            bathroom:this.state.bathroom,
            balconies:this.state.balconies,
            description:this.state.description,
            uid:this.state.uid,
            buy:0,
            Rate:this.state.price
        }
        sellingUser(sell).then((res) => {
            debugger;
            console.log(res);
            let sell1={
                ptype:this.state.type,
                image:this.state.imagesource,
                city:this.state.city,
                location:this.state.locality,
                bedroom:this.state.bedroom,
                bathroom:this.state.bathroom,
                balconies:this.state.balconies,
                description:this.state.description,
                uid:this.state.uid,
                buy:0,
                Rate:this.state.price,
                imagesource1: this.state.imagesource1
            }

            this.props.navigation.navigate('Display1',{sell1})
        }).catch((err) => {

        })

    }


    render(){
        return(
            <SafeAreaView style={{flex: 1,backgroundColor: 'rgb(245,245,245)'}}>
                <View style={style.view1}>
                    <TouchableHighlight onPress={() => {
                        this.props.navigation.goBack()
                    }} underlayColor="transparent">
                        <Icon name="left" size={20} style={{flex: 1, paddingTop: 15, color: greycolor}}/>
                    </TouchableHighlight>

                    <View><Text style={{fontSize: 20, marginTop: 15, fontWeight: 'bold', color: greycolor}}> Selling
                        property </Text></View></View>

                <ScrollView>

                <View style={style.mainview}><Text style={style.text1}>price:</Text></View>

                <View style={style.mainview1}>
                    <Image  style={style.image1}
                            source={require('../images/rupess.jpeg')}/>
                    <TextInput
                       placeholder="enter your price"
                       style={style.textinputstyle}
                    onChangeText={(price) =>this.setState({price})}
                       keyboardType="number-pad"

                    />
                </View>

                <View style={style.mainview}><Text style={style.text1}>Property Details:</Text></View>

                <View style={{height:250,backgroundColor:'white',padding:10}}>

                    <TextInput
                        placeholder="Bedroom(s)"
                        style={style.textinput1}
                        onChangeText={(bathroom) =>this.setState({bathroom})}
                        keyboardType="number-pad"

                    />
                    <TextInput
                        placeholder="Bathroom(s) "
                        style={style.textinput1}
                        onChangeText={(bedroom) =>this.setState({bedroom})}
                        keyboardType="number-pad"

                    />
                    <TextInput
                        placeholder="No. of Balconies(s) "
                        style={style.textinput1}
                        onChangeText={(balconies) =>this.setState({balconies})}
                        keyboardType="number-pad"
                    />
                </View>
                <View style={style.viewstyle1}><Text style={style.text1}>Other description of your property</Text></View>
                <View style={style.viewstyle2}>
                    <TextInput
                        placeholder="Enter your description"
                        style={style.textinput}
                        onChangeText={(description) =>this.setState({description})}

                    />
                </View>
                <View/>
                <View style={{flex:1,marginTop:30}}>
                    <TouchableHighlight style={{height:60,backgroundColor:'rgb(52,152,219)'}} underlayColor="transparent" onPress={this.onButtonPostClick.bind(this)}>
                        <Text style={style.textstyle}>Post Property</Text>
                    </TouchableHighlight>
                </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}


const style=StyleSheet.create({
    view1: {
        flexDirection: 'row',
        height: 60,
        marginLeft: 10,
        borderBottomWidth: 1,
        borderColor: greycolor
    },
    mainview:{
        height: 50 ,
        paddingTop: 10,
        paddingLeft: 10,

    },
    mainview1:{
        height:80,
        padding:20,
        backgroundColor:'white',
        flex:1,
        flexDirection: 'row'

    },
    textinput:{
        borderBottomWidth: 1,
        fontSize:18,
        padding: 10

    },
    textinput1:{
        borderBottomWidth: 1,
        fontSize:18,
        padding: 20

    },
    text1:{
        fontSize:18,
        color:greycolor
    },
    image1:{

            width: 30,
            height: 30,
            paddingTop: 40,
            paddingLeft: 4,
            flex:1
        },
    textstyle:{
        color:'white',
        alignSelf:'center',
        paddingTop: 20
    },
    textinputstyle:{
    borderBottomWidth: 1,
    fontSize:18,
    padding: 10,
    flex:2
    },
    viewstyle1:{
        height:30,
        marginTop:10,
        marginLeft: 10
    },
    viewstyle2:{
        height:80,
        padding:20,
        backgroundColor:'white',flex:1
    }



})

const mapStateToProps = (state)=>{
    return{
        userDetail:state.user.userDetail
    };
};

export default connect(mapStateToProps,{


}) (Selling1)
