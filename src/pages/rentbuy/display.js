import React,{Component} from 'react';
import {SafeAreaView, View, Text, Image, StyleSheet, FlatList,ScrollView,TouchableHighlight} from 'react-native'
import {displayUser2} from "../../Actions/testAction";
import connect from "react-redux/es/connect/connect";
import ApiConstant from '../../services/Apiconstant';
import Icon from "react-native-vector-icons/AntDesign";
import {greycolor} from "../../comman/color";
import {screenWidth} from "../../../helper/Constant";


class Display extends Component {
    constructor(props) {
        super(props)
        this.state = {
            subtype: '',
            city: '',
            budget: '',
            type: '',
            bedroom: '',
            bathroom: '',
            users:[],


        }
    }

    componentDidMount() {
        this.state.city = this.props.navigation.state.params.commandata1.city;
        this.state.budget = this.props.navigation.state.params.commandata1.budget;
        this.state.type = this.props.navigation.state.params.commandata1.type;
        this.state.bedroom = this.props.navigation.state.params.commandata1.bedroom;
        this.state.bathroom = this.props.navigation.state.params.commandata1.bathroom;

            debugger;
        const selldetail={
            city:this.state.city,
            Rate:this.state.budget,
            ptype: this.state.type,
            bathroom:this.state.bathroom,
            bedroom: this.state.bedroom
        }
        debugger
        displayUser2(selldetail).then((res)=>{
            debugger;
            console.log("data is "+res)
            this.setState({users:res});

        }).catch((err)=>{
            console.log(err)
        })
    }


    imageselect=(item)=>{
        let imagearray=[];
        for(let i of JSON.parse(item.image)) {
            const imagename = ApiConstant.baseUrl + i;
            console.log(imagename)
            imagearray.push(imagename)

        }
            console.log(imagearray)
        return(

            <TouchableHighlight onPress={()=>{this.props.navigation.navigate('Displayall',{item})}}>
                <View><Image style={{height: 250, width: screenWidth}} source={{uri:imagearray[0]}}/></View>
            </TouchableHighlight>

                )

        }


    render(){
        return(
            <SafeAreaView style={{flex:1,backgroundColor:'white',height:250}}>
                <View style={style.view1}>
                    <TouchableHighlight onPress={() => {
                        this.props.navigation.goBack();
                    }} underlayColor="transparent">
                        <Icon name="left" size={20} style={{flex: 1, paddingTop: 15, color: greycolor}}/>
                    </TouchableHighlight>
                    <Text style={{marginTop:10}}>List of property</Text>

                </View>
                <ScrollView>
                    <FlatList

                        data={this.state.users}
                        renderItem={({item})=>(



                            <View style={{borderWidth: 2,flex:1,marginTop: 10,borderColor: 'grey'}}>
                                <View style={{flex:3}}>

                                    {this.imageselect(item)}

                                    {/*//<Image style={{height: 100, width: 100}} source={{uri: item.image.toString()}}/>*/}


                                </View>
                                <View style={{flex:1 ,backgroundColor:'white',flexDirection:'row'}}>
                                    <View style={style.firstview}><Text style={{fontSize:20 ,color:'rgb(0,111,176)'}}>Rate is:{item.Rate}</Text></View>
                                    <View style={style.firstview}><Text>{item.city}</Text></View>
                                    <View style={style.firstview}><Text style={{color:'black',fontSize:15}}>{item.bedroom} BHK</Text></View>

                                </View>

                            </View>

                        )}
                        keyExtractor={item => item.uid}

                    />
                </ScrollView>

            </SafeAreaView>
        )
    }
}
const style=StyleSheet.create({
    firstview:{
        marginTop:10,
        marginLeft: 15
    },
    view1: {
        flexDirection: 'row',
        height: 50,
        marginLeft: 10,
        borderColor: greycolor
    }
})

export default Display;