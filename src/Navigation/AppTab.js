import React from 'react';
import {createBottomTabNavigator} from 'react-navigation';
import Home1 from '../pages/Home'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon1 from 'react-native-vector-icons/AntDesign'
import Home from '../pages/Home'
import Basic1 from '../pages/rentbuy/basic1';
import Logout from '../pages/Logout'

const Tabnavigator = createBottomTabNavigator({
    TabA:{
        screen:Home,
        navigationOptions:{
            tabBarIcon: () => <Icon name="home" size={25} style={{color:'black',padding:6}} />,
            title:''
        }

    },
    TabB:{
        screen:Basic1,
        navigationOptions:{
            tabBarIcon: () => <Icon name="search" size={25} style={{color:'black',padding:6}} />,
            title:''
        }
    },
    Tabc:{
        screen:Logout,
        navigationOptions:{
            tabBarIcon: () => <Icon1 name="setting" size={25} style={{color:'black',padding:6}} />,
            title:''
        }
    }






})
export default Tabnavigator;
