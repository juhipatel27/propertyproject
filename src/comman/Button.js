import React from 'react';
import {Text,TouchableOpacity,StyleSheet} from 'react-native';
import {greencolor,greycolor} from './color'
const Button=({children,onpress})=>{
    const{c1,buttonstyle1}=styles;

    return(
        <TouchableOpacity style={buttonstyle1} onPress={onpress}>
            <Text style={c1}>{children}</Text>
        </TouchableOpacity>
    );
}

const styles=StyleSheet.create({

    c1:{
        color:greencolor,
        fontSize:20,
        fontWeight:'600',
       // paddingTop:5,
       // paddingBottom:5,
    },
    buttonstyle1:{
       // alignSelf:'stretch',
        alignItems:'center',
        backgroundColor:'white',
        borderRadius:15,
        padding:15,
        borderWidth:1,
        borderColor:greycolor,
        marginLeft:5,
        marginRight:5,
        justifyContent: 'center',




    }

});

export {Button};