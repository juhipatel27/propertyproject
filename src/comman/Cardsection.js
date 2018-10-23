import React from 'react'
import {View,StyleSheet} from 'react-native';

const Cardsection = (props)=>{
    return(
        <View style={styles.section1}>
            {props.children}
        </View>
    )
}

const styles=StyleSheet.create({
    section1:{
        borderBottomWidth:1,
        padding:10,
        backgroundColor:'#fff',
        justifyContent:'flex-start',
        flexDirection:'row',
        position:'relative',
        borderColor:'#ddd',
        marginLeft: 5
    }
})

export  {Cardsection};