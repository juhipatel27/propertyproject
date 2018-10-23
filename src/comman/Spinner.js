import React from 'react';
import {View,ActivityIndicator,StyleSheet} from 'react-native'

const Spinner=({size})=>{
    return(
        <View style={styles.spinnerstyle}>
            <ActivityIndicator size={size || 'large'}/>
        </View>
    )
}

const styles=StyleSheet.create({
    spinnerstyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export {Spinner}
