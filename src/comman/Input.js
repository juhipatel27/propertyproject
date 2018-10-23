import React from 'react';
import {TextInput,View,Text,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import {greencolor,greycolor} from '../comman/color'
const Input=({label,value,onChangeText,placeholder,secureTextEntry,iconname,size,keyboardType,error})=>{
    const{inputstyle,labelstyle,containerstyle,errorview}=styles;
    return(
        <View style={containerstyle}>
            <Icon name={iconname} style={styles.icon}size={size}/>
            <Text style={labelstyle}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                style={inputstyle}
                value={value}
                onChangeText={onChangeText}
                autoCorrect={false}
                placeholder={placeholder}
                keyboardType={keyboardType}
            />


        </View>
    )
};

const styles=StyleSheet.create({
    inputstyle:{
        color:'#000',
        paddingRight:5,
        paddingLeft:3,
        fontSize:18,
        lineHeight:23,
        flex:2,
        height:30,
        width:100,
      //  borderRadius:5,
       // borderWidth:1
    },
    labelstyle:{
        fontSize:20,
        paddingLeft:5,
        flex:1,
        color:greencolor
    },
    containerstyle:{
        height:40,
        flex:1,
        flexDirection:'row',
        alignItems:'center'
    },
    icon:{
        flex:0.2,
        color:'rgb(55,97,185)'
    },
    errorview:{
        flex:0.5
    }
})
export {Input};