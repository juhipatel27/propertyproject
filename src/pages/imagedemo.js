import React,{Component} from 'react';
import {Modal, Image, TouchableHighlight,View} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';





const images = [
    {    url: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350 1x',
    }

]

export default class Imagedemo extends Component {
    render() {
    return (
        <View style={{flex: 1}}>
        <ImageViewer imageUrls={images}/>
        </View>
        )
}
}