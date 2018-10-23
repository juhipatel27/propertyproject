import React,{Component} from 'react';
import {SafeAreaView, View, Text, Image, StyleSheet, FlatList,ScrollView,TouchableHighlight} from 'react-native'
import {displayUser2} from "../../Actions/testAction";
import connect from "react-redux/es/connect/connect";
import ApiConstant from '../../services/Apiconstant';
import Icon from "react-native-vector-icons/AntDesign";
import {greencolor, greycolor} from "../../comman/color";
import {screenWidth,screenHeight} from '../../../helper/Constant'

class Displayallnew  extends Component {
    constructor(props) {
        super(props)


        this.state = {
            city: '',
            locality: '',
            type: '',
            price: '',
            bedroom: '',
            bathroom: '',
            balconies: '',
            description: '',
            image:[]
        }
    }

    componentWillMount() {
        console.log(this.props.navigation.state.params.item)

        this.state.city = this.props.navigation.state.params.item.city;
        this.state.locality = this.props.navigation.state.params.item.location;
        this.state.type = this.props.navigation.state.params.item.ptype;
        this.state.image = this.props.navigation.state.params.item.image;
        this.state.bedroom = this.props.navigation.state.params.item.bedroom
        this.state.bathroom = this.props.navigation.state.params.item.bathroom
        this.state.balconies = this.props.navigation.state.params.item.balconies
        this.state.description = this.props.navigation.state.params.item.balconies
        this.state.price = this.props.navigation.state.params.item.price

    }

    imageselect=()=>{

        debugger;
        let i1=0;
        let imagearray=[]
        debugger
        for (let i of JSON.parse(this.state.image)) {

            debugger
            console.log(i);
            const imagename = ApiConstant.baseUrl + i;
            console.log(imagename)
            imagearray.push(ApiConstant.baseUrl+i)

        }
        //
        // let demo=item.image;
        // console.log(demo);
        // console.log(item);
        return(
            <ScrollView style={{backgroundColor:'white'}}
                        showsHorizontalScrollIndicator={true}
                        horizontal={true}
                        pagingEnabled={true}
                        scrollEnabled={true}>


                    {
                    imagearray.map((imagearr)=>{
                        return (  <Image style={{height: 300, width: screenWidth}} source={{uri: imagearr}}/>)
                    })

                    }

            </ScrollView>
        )
    }

    render(){
        return(
            <SafeAreaView style={{flex: 1,backgroundColor:'white'}}>
                <View style={style.view1}>
                    <TouchableHighlight onPress={() => {
                        this.props.navigation.navigate('Searchhome')
                    }} underlayColor="transparent">
                        <Icon name="left" size={20} style={{flex: 1, paddingTop: 15, color: greycolor}}/>
                    </TouchableHighlight>

                    <View><Text style={{fontSize: 20, marginTop: 15, fontWeight: 'bold', color: greycolor}}>
                        property Detail </Text></View></View>
                <ScrollView>

                     {this.imageselect()}

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
        marginTop:15,
        borderBottomWidth: 1,
        borderColor:'grey'
    }
})


export default Displayallnew;

