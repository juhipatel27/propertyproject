import React from 'react';
import {Text,StyleSheet,View} from 'react-native';

const Header1=({header2})=>{
    const {header3}=styles;
    return(
    <View style={header3}>
        <Text>{header2}</Text>
    </View>);

}

const styles=StyleSheet.create({
    header3:{
        justifyContent:'center',
        alignItems:'center',
        shadowColor:'black',
        shadowOffset:{width:0,height:5},
        shadowOpacity:0.7,
        padding:20,
        backgroundColor:'white'
    }
})

export {Header1};