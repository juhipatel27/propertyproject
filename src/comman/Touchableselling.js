import React,{Component} from 'react';
import {SafeAreaView,View,Text,Image,StyleSheet,ScrollView,TouchableOpacity,TouchableHighlight,TextInput} from 'react-native';

const Touchableselling=({children,onpress})=> {

    return(
    <View>
        <TouchableHighlight onPress={onpress}
            underlayColor="transparent">
            <Image
                style={style.image1}
                source={require('../images/vilaa.png')
                }/>
        </TouchableHighlight>
        <View style={style.childview}>
            <Text style={style.textstyle}>villas</Text>
        </View>
    </View>
    )}