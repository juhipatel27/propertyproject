import {createStackNavigator} from 'react-navigation';
import Login from '../pages/Login';
import Registration from '../pages/Registration';
import Selling from '../pages/Selling';
import Selling1 from '../pages/Selling1';
import Home from '../pages/Home';
import Basic1 from '../pages/rentbuy/basic1';
import Basic2 from '../pages/rentbuy/basic2';
import Basic3 from '../pages/rentbuy/basic3';
import Basic4 from '../pages/rentbuy/basic4';
import Basic5 from '../pages/rentbuy/basic5';
import Display from '../pages/rentbuy/display';
import Home1 from '../pages/Home1'
import Display1 from '../pages/rentbuy/Display1'
import Displayall from '../pages/rentbuy/Displayall'
import City from '../pages/searchpages/city'
import Searchhome from '../pages/searchpages/Searchhome'
import List from "../pages/searchpages/List";
import Listptype from '../pages/searchpages/Listptype'
import Type from '../pages/searchpages/type'
import Rate from '../pages/searchpages/Rate'
import Listrate from '../pages/searchpages/ListRate'
import Listbedroom from '../pages/searchpages/Listbedroom'
import Bedroom from '../pages/searchpages/bedroom'
import Tab from './AppTab'



const Stacknavigation = createStackNavigator({
        Login: {
            screen: Login
        },
        Registration:{
            screen:Registration
        },
        Selling:{
            screen:Selling
        },
        Selling1:{
          screen:Selling1
        },
        Basic1:{
            screen:Basic1
        },
        Basic2:{
            screen:Basic2
        },
        Basic3:{
            screen:Basic3
        },
        Basic4:{
            screen:Basic4
        },
        Basic5:{
            screen:Basic5
        },
        Display:{
          screen:Display
        },
        Home1:{
            screen:Home1
        },
        Display1:{
            screen:Display1
        },
        Displayall:{
            screen:Displayall
        },
        Searchhome:{
            screen:Searchhome
        },
       City:{
            screen:City
        },
        List:{
            screen:List
        },
        Listptype:{
            screen:Listptype
        },
        Type:{
            screen:Type
        },
        Listrate:{
            screen:Listrate
        },
        Rate:{
            screen:Rate
        },
        Bedroom:{
            screen:Bedroom
        },
        Listbedroom:{
            screen:Listbedroom
        },
        Tab:{
            screen:Tab
        },



        },

        {
            initialRouteName:'Home1',
            headerMode:'none'

        });

export default Stacknavigation;