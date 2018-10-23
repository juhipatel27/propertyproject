import React,{Component} from 'react';
import {SafeAreaView, View, Text, Image, StyleSheet, TouchableOpacity, TouchableHighlight, TextInput,ScrollView} from 'react-native'

class Basic5 extends Component {


    constructor(props) {
        super(props)
        this.state={
            subtype:'',
            city:'',
            budget:'',
            type:'',
            bedroom:'',
            bathroom:''

        }
    }

    componentWillMount() {
        this.state.city = this.props.navigation.state.params.commandata1.city;
        this.state.budget = this.props.navigation.state.params.commandata1.budget;
        this.state.subtype = this.props.navigation.state.params.commandata1.type;

    }
    onButtonPress=()=>{
        const commandata1={
            city:this.state.city,
            budget:this.state.budget,
            type:this.state.type,
            bedroom: this.state.bedroom,
            bathroom: this.state.bathroom,
            subtype:this.state.subtype

        }

        this.props.navigation.navigate('Display',{commandata1})

    }











    render() {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
                <ScrollView>
                    <View style={style.childview1}><Text style={style.textcolor}>your property type</Text></View>
                    <View style={{flexDirection:'row',marginTop:10,backgroundColor:'white',height:120,padding:20}}>

                        <View>
                            <TouchableHighlight onPress={()=>{this.state.type="vilaa"}} underlayColor="transparent">
                                <Image
                                    style={style.image1}
                                    source={require('../../images/vilaa.png')
                                    }/>
                            </TouchableHighlight>
                            <View style={style.childview}>
                                <Text style={[style.textstyle]}>villas</Text>
                            </View>
                        </View>

                        <View style={{marginLeft: 20}}>
                            <TouchableHighlight onPress={()=>{this.state.type="apartment"}} underlayColor="transparent">
                                <Image
                                    style={style.image1}
                                    source={require('../../images/apartment.jpeg') }/>
                            </TouchableHighlight>
                            <View style={style.childview}>
                                <Text style={style.textstyle}>Apartment</Text>
                            </View>
                        </View>

                        <View style={{marginLeft: 20}}>
                            <TouchableHighlight onPress={()=>{this.state.type="farmhouse"}} underlayColor="transparent">
                                <Image
                                    style={style.image1}
                                    source={require('../../images/farmhouse.jpeg') }/>
                            </TouchableHighlight>
                            <View style={style.childview}>
                                <Text style={style.textstyle}>Farmhouse</Text>
                            </View>
                        </View>

                        <View style={{marginLeft: 20}}>
                            <TouchableHighlight onPress={()=>{this.state.type="buildfloor"}} underlayColor="transparent">
                                <Image  style={style.image1}
                                        source={require('../../images/buildfloor.jpeg')}/>
                            </TouchableHighlight>
                            <View style={style.childview}>
                                <Text style={style.textstyle}>Buildfloor</Text>
                            </View>
                        </View>

                    </View>

                    <View style={style.childview1}><Text style={style.textcolor}>your budget is</Text></View>
                    <View style={{margin:10}}>
                        <TextInput
                            placeholder="enter your budget"
                            style={style.textbox}
                        />
                    </View>

                    <View style={style.childview1}><Text style={style.textcolor}>no of bedrooms</Text></View>
                    <View style={{height:50,flex:1,flexDirection:'row',margin:20 ,borderWidth:1,color:'rgb(206,206,210)',borderColor:'rgb(206,206,210)'}}>
                        <View style={style.buttonviewstyle}><TouchableOpacity onPress={()=>{this.state.bedroom=1}}><Text style={style.fontstyle}>1</Text></TouchableOpacity></View>
                        <View style={style.buttonviewstyle}><TouchableOpacity onPress={()=>{this.state.bedroom=2}}><Text style={style.fontstyle}>2</Text></TouchableOpacity></View>
                        <View style={style.buttonviewstyle}><TouchableOpacity onPress={()=>{this.state.bedroom=3}}><Text style={style.fontstyle}>3</Text></TouchableOpacity></View>
                        <View style={style.buttonviewstyle}><TouchableOpacity onPress={()=>{this.state.bedroom=4}}><Text style={style.fontstyle}>4+</Text></TouchableOpacity></View>
                    </View>

                    <View style={style.childview1}><Text style={style.textcolor}>no of bathrooms</Text></View>
                    <View style={{height:50,flex:1,flexDirection:'row',margin:20 ,borderWidth:1,color:'rgb(206,206,210)',borderColor:'rgb(206,206,210)'}}>
                        <View style={style.buttonviewstyle}><TouchableOpacity onPress={()=>{this.state.bathroom=1}}><Text style={style.fontstyle}>1</Text></TouchableOpacity></View>
                        <View style={style.buttonviewstyle}><TouchableOpacity onPress={()=>{this.state.bathroom=2}}><Text style={style.fontstyle}>2</Text></TouchableOpacity></View>
                        <View style={style.buttonviewstyle}><TouchableOpacity onPress={()=>{this.state.bathroom=3}}><Text style={style.fontstyle}>3</Text></TouchableOpacity></View>
                        <View style={style.buttonviewstyle}><TouchableOpacity onPress={()=>{this.state.bathroom=4}}><Text style={style.fontstyle}>4+</Text></TouchableOpacity></View>
                    </View>


                </ScrollView>
               <View style={{position: 'absolute',bottom:0,left:0,right:0,backgroundColor:'rgb(62,172,255)',height:50}}>
                   <TouchableOpacity onPress={this.onButtonPress.bind(this)}><Text style={{color:'white',alignSelf: 'center',paddingTop: 15}}>Save and Search</Text></TouchableOpacity>
              </View>

            </SafeAreaView>
        )
    }
}


const style=StyleSheet.create({
    view1:{
        backgroundColor: 'rgb(55,97,185)',
        height:50
    },
    image1:{
        width: 50,
        height: 50,
        paddingTop: 2,
        paddingLeft: 20
    },
    childview:{
        flexDirection:'column',
        marginTop:10
    },
    textstyle:{
        fontSize:15,
        color:'orange'

    },
    childview1:{
        marginTop: 30,
        marginLeft:10
    },
    childview2:{

        backgroundColor:'white',
        marginTop:10,
        height:120,
        padding:20,
        flex:1


    },
    textcolor:{
        color:'orange',
        fontSize:18
    },
    textbox:{
        height:50,

        borderBottomWidth: 1,
        borderRadius:5,
        fontSize:20,
        flex:1
    },
    buttonviewstyle:{
        width: 90,
        justifyContent: 'center',
        paddingLeft:5
    },
    fontstyle:{
        fontSize:20,
        alignSelf:'center'
    }

})
export default Basic5;