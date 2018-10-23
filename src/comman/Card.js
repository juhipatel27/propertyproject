import React from 'react';
import {View,StyleSheet,Text} from 'react-native';

const Card =(props)=>{
    return(
        <View style={styles.container}>
            {props.children}
        </View>
    )

}

const styles=StyleSheet.create({
    container:{

        borderWidth:1,
        borderRadius:2,
        borderColor:'grey',
        borderBottomWidth:0,
        shadowColor:'#000',
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.1,
        shadowRadius:2,
        elevation:1,
        marginRight:10,
        marginTop:10,
        marginLeft:10

    }
});
export {Card};