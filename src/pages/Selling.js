import React, {Component} from 'react';
import {
    SafeAreaView, View, Text, Image, StyleSheet, ScrollView, TouchableOpacity,
    TouchableHighlight, TextInput
} from 'react-native';
import {greencolor, greycolor} from '../comman/color'
import Icon from "react-native-vector-icons/AntDesign";
import Icon1 from 'react-native-vector-icons/MaterialIcons'
import {Empty} from "../validation/validation";
import ImagePicker from 'react-native-image-crop-picker';
import _ from 'lodash'

class Selling extends Component {

    constructor(props) {
        super(props);
        this.state = {
            txtcolor: '',
            city: '',
            locality: '',
            imageSource: [],
            type: '',
            cityerror: '',
            localityerror: '',
            image1: [],
            img:'',
            color:''






        }
    }

    showImagePicker = () => {
        ImagePicker.openPicker({
            multiple: true,
            maxFiles:5,
            compressImageQuality:0.4
        }).then((image) => {
            this.setState({image})
            console.log(image)
            let images = _.map(image, 'path');
            let sourceURL=_.map(image, 'sourceURL');
            this.setState({
                imageSource: images,

            });
            let newarray=[];

            for(let i=0; i<image.length ; i++){
                let obj={}
                console.log(i);
                console.log(image[i].sourceURL)
                obj["uri"]=image[i].sourceURL
                let name=image[i].filename
                let type=name.split('.');
                let filetype=type[type.length-1];
                obj["name"]=image[i].filename
                obj["type"]=filetype
                newarray.push(obj);
            }
            this.state.image1=newarray;


        }).catch(e => {

        });
    }


    onShow = () => {
        if (this.state.cityerror === 'error') {
            return (
                <View><Icon1 size={20} style={style.iconStyle} name={this.state.cityerror}/></View>
            )
        }
    }
    onShow1 = () => {
        if (this.state.localityerror === 'error') {
            return (
                <View><Icon1 size={20} style={style.iconStyle} name={this.state.localityerror}/></View>
            )
        }
    }

    onButtonPress = () => {
        this.setState({cityerror: '', localityerror: ''})
        if (Empty(this.state.city)) {
            this.setState({cityerror: 'error'})
        }
        if (Empty(this.state.locality)) {
            this.setState({localityerror: 'error'})
        }
        else {
            const user1 = {
                city: this.state.city,
                locality: this.state.locality,
                imageSource1: this.state.imageSource,
                type: this.state.type,
                image: this.state.image1

            }

            this.props.navigation.navigate('Selling1', {user1})

        }
    }


    render() {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: 'rgb(245,245,245)'}}>
                <ScrollView>

                    <View style={style.view1}>
                        <TouchableHighlight onPress={() => {
                            this.props.navigation.goBack()
                        }} underlayColor="transparent">
                            <Icon name="left" size={20} style={{flex: 1, paddingTop: 15, color: greycolor}}/>
                        </TouchableHighlight>

                        <View><Text style={{fontSize: 20, marginTop: 15, fontWeight: 'bold', color: greycolor}}> Selling
                            property </Text></View></View>

                    <View style={style.childview1}><Text style={style.textcolor}>Your property type</Text></View>

                    <View style={{
                        flexDirection: 'row',
                        marginTop: 10,
                        backgroundColor: 'white',
                        height: 120,
                        padding: 20
                    }}>

                        <View>
                            <TouchableHighlight onPress={() => {
                               this.setState({type:"vilaa",color:'red'})
                            }} underlayColor="transparent">
                                <Image
                                    resizeMode='contain'
                                    style={style.image1}
                                    source={require('../images/vilaa.png')
                                    }/>
                            </TouchableHighlight>
                            <View style={style.childview}>
                                <Text style={[style.textstyle,{}]}>villas</Text>
                            </View>
                        </View>

                        <View style={{marginLeft: 20}}>
                            <TouchableHighlight onPress={() => {
                                this.setState({type:"apartment"})
                            }} underlayColor="transparent">
                                <Image
                                    style={style.image1}
                                    source={require('../images/apartment.jpeg')}/>
                            </TouchableHighlight>
                            <View style={style.childview}>
                                <Text style={style.textstyle}>Apartment</Text>
                            </View>
                        </View>

                        <View style={{marginLeft: 20}}>
                            <TouchableHighlight onPress={() => {
                                this.setState({type:"farmhouse"})
                            }} underlayColor="transparent">
                                <Image
                                    style={style.image1}
                                    source={require('../images/farmhouse.jpeg')}/>
                            </TouchableHighlight>
                            <View style={style.childview}>
                                <Text style={style.textstyle}>Farmhouse</Text>
                            </View>
                        </View>

                        <View style={{marginLeft: 20}}>
                            <TouchableHighlight onPress={() => {
                                this.setState({type:"buildfloor"})
                            }} underlayColor="transparent">
                                <Image style={style.image1}
                                       source={require('../images/buildfloor.jpeg')}/>
                            </TouchableHighlight>
                            <View style={style.childview}>
                                <Text style={style.textstyle}>Buildfloor</Text>
                            </View>
                        </View></View>

                    <View style={style.childview1}><Text style={style.textcolor}>Add your property pic</Text></View>
                    <View style={style.camerastyle}>
                        <TouchableHighlight onPress={this.showImagePicker.bind(this)} underlayColor="transparent">
                            <Image style={{height: 50, width: 50}}
                                   source={require('../images/camera.jpeg')}/>
                        </TouchableHighlight>
                        <View style={{flex: 1,alignItems:'center', flexDirection:'row', flexWrap: 'wrap'}}>
                            {
                                this.state.imageSource.map((imageSource) => {
                                    console.log(imageSource)
                                    return (
                                        <Image source={{uri: imageSource}}
                                                     style={{width: 50, height: 50, margin:5}}/>
                                    )
                                })

                            }
                        </View>
                    </View>


                    <View style={style.childview1}><Text style={style.textcolor}>Your property address
                        information:</Text></View>
                    <View style={style.childview2}>
                        <View style={{flexDirection: 'row', flex: 1}}>
                            <Text style={{flex: 1, color: greycolor, fontWeight: 'bold'}}> Enter City</Text>
                            <TextInput style={style.textbox}
                                       onChangeText={(city) => this.setState({city, cityerror: ''})}
                            />{this.onShow()}
                        </View>

                        <View style={{flexDirection: 'row', flex: 1}}>
                            <Text style={{flex: 1, color: greycolor, marginTop: 2, fontWeight: 'bold'}}> Enter
                                Locality</Text>
                            <TextInput style={style.textbox}
                                       onChangeText={(locality) => this.setState({locality, localityerror: ''})}
                            />{this.onShow1()}
                        </View>
                    </View>


                    <View style={{flex: 1, marginTop: 50}}>
                        <TouchableHighlight
                            style={{height: 60, backgroundColor: 'rgb(52,152,219)'}}
                            underlayColor="transparent"
                            onPress={this.onButtonPress.bind(this)}>
                            <Text style={{color: 'white', alignSelf: 'center', paddingTop: 20}}>Next</Text>
                        </TouchableHighlight>
                    </View>
                </ScrollView>
            </SafeAreaView>

        )
    }


}

export default Selling;
const style = StyleSheet.create({
    view1: {
        flexDirection: 'row',
        height: 60,
        marginLeft: 10,
        borderBottomWidth: 1,
        borderColor: greycolor
    },
    image1: {
        width: 50,
        height: 70,
        paddingTop: 2,
        paddingLeft: 20,

    },
    childview: {
        flexDirection: 'column',
        marginTop: 10
    },
    textstyle: {
        fontSize: 15,
        color: greycolor,


    },
    childview1: {
        marginTop: 10,
        marginLeft: 10
    },
    childview2: {

        backgroundColor: 'white',
        marginTop: 10,
        height: 120,
        padding: 20,
        flex: 1


    },
    textcolor: {
        color: greencolor,
        fontWeight: 'bold',
        fontSize: 18
    },
    textbox: {
        height: 20,
        width: 100,
        borderBottomWidth: 1,
        flex: 2,
        borderRadius: 5,
        fontSize: 20
    },
    iconStyle: {
        color: 'red',
    },
    camerastyle: {
        backgroundColor: 'white',
        marginTop: 10,
        height: 120,
        padding: 20,
        flex: 1,
        flexDirection: 'row'
    },
    textstylesub:{
        color:'red'
    }


})
