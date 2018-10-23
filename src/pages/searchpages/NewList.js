import React,{Component} from 'react';
import {
    SafeAreaView,
    View,
    Text,
    Image,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight, ScrollView, FlatList
} from 'react-native'
import {citydisplay} from "../../Actions/CityAction";
import ApiConstant from "../../services/Apiconstant";
import {greycolor} from "../../comman/color";



class Newlist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            city: ''
        }
    }


    componentWillMount(){
        this.state.city = this.props.navigation.state.params.city1.city;
        console.log(this.state.city)
        const city={
            city:this.state.city
        }
        citydisplay(city).then((res)=>{
            debugger;
            console.log("data is "+res)
            this.setState({users:res});

        }).catch((err)=>{
            console.log(err)
        })
    }

    imageselect=(item)=>{

        debugger;
        let i1=0;
        let imagearray=[]
        for (let i of JSON.parse(item.image)) {
            console.log(i);
            const imagename = ApiConstant.baseUrl + i;
            console.log(imagename)
            imagearray.push(ApiConstant.baseUrl+i)

        }

        let demo=item.image;
        console.log(demo);
        console.log(item);
        return(

            <View><Image style={{height: 200, width: 200}} source={{uri:imagearray[0]}}/></View>
        )
    }






    render(){
        return(
            <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
                <View style={{height:100,flexDirection:'row',borderBottomWidth: 1}}>
                    <View style={{flex:1}}><Image style={{height:100,width:100 ,justifySelf:'center',alignItems: 'center'}} source={require('../../images/list.png')}  /></View>
                    <View style={{flex:2}}><Text style={{color:greycolor,fontSize:25,fontWeight:'bold',marginTop:20}}>List of Detail</Text></View>

                </View>
                <ScrollView>
                    <FlatList

                        data={this.state.users}
                        renderItem={({item})=>(



                            <View style={{height:200,borderWidth: 2,flex:1,marginTop: 10}}>
                                <View style={{flex:3}}>

                                    {this.imageselect(item)}

                                    {/*//<Image style={{height: 100, width: 100}} source={{uri: item.image.toString()}}/>*/}


                                </View>
                                <View style={{flex:1 ,backgroundColor:'white'}}>
                                    <View style={style.firstview}><Text style={{fontSize:20 ,color:'rgb(0,111,176)'}}>Rate is:{item.Rate}</Text></View>
                                    <View style={style.firstview}><Text>{item.city}</Text></View>
                                    <View style={style.firstview}><Text style={{color:'black',fontSize:15}}>{item.bedroom} BHK</Text></View>
                                    <View style={style.firstview}><Text>No of Bathroom:{item.bathroom}</Text></View>
                                    <View style={style.firstview}><Text>Type is:{item.ptype}</Text></View>
                                    <View>
                                        <TouchableHighlight
                                            style={{height: 20, backgroundColor: 'rgb(52,152,219)',marginTop:20}}
                                            underlayColor="transparent"
                                            onPress={()=>{this.props.navigation.navigate('Displayall',{item})}}>
                                            <Text>display all Detail</Text>
                                        </TouchableHighlight>
                                    </View>
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
    }
})
export default Newlist;