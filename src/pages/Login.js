import React,{Component} from 'react';
import {SafeAreaView,View,Text,Image,StyleSheet,ImageBackground} from 'react-native';
import {Card,Cardsection,Button, Input, Spinner} from "../comman/index";
import Icon from 'react-native-vector-icons/MaterialIcons'
import {Empty,validateEmail} from '../validation/validation'
import {loginUser} from "../Actions/LoginAction";
import connect from "react-redux/es/connect/connect";
import Home from './Home'
import {greencolor,greycolor} from '../comman/color'



class Login extends Component{
    constructor(props) {
        super(props)
        this.state = {email: process.env.NODE_ENV === 'development' && '14mscit083@gmail.com' || '',
            password: process.env.NODE_ENV === 'development' && 'juhi' || '',
            emailerror:'',
            passworderror:''}
    }
    onLoginpress=()=>{
        this.setState({emailerror:'',passworderror:''})
        if(Empty(this.state.email)){
            this.setState({emailerror:'error'})
        }else if(!validateEmail(this.state.email)){
            this.setState({emailerror:"enter proper email"})
        }else{}

        if(Empty(this.state.password)){
            this.setState({passworderror:'error'})
        }
        if(Empty(this.state.email) === false && Empty(this.state.password) === false) {

            let user = {
                email: this.state.email,
                password: this.state.password
            }
            this.props.loginUser(user).then((res) => {
                debugger;
                console.log(res);
                this.props.navigation.navigate('Tab')
                //alert("username and password is valid")
            }).catch((err) => {
                alert("username and password is invalid")
                console.log(err)
            })
        }
    }
    onshow=()=>{
        if(this.state.emailerror === 'error'){
            return(
            <View><Icon style={styles.textStyle} size={20} name={this.state.emailerror} /></View>)
        }else{
            return(
            <View><Text style={styles.textStyle}>{this.state.emailerror}</Text></View>)
        }
    }
    onShow1=()=>{
        if(this.state.passworderror === 'error'){
            return(
            <View><Icon style={styles.textStyle} size={20} name={this.state.passworderror} /></View>)
        }
    }

    render(){
        return(
            <View style={{flex: 1,backgroundColor: 'white'}}>
                <ImageBackground
                    style={{flex: 1,opacity:0.6}}
                    resizeMode='cover'
                    source={require('../images/1.jpg')
                    }/>
                <View style={{position:'absolute',top:0,left:0,width:'100%',height:'100%' }}>
                <View style={{marginTop: 200}}><Text style={styles.textStyle1}>Login</Text></View>
                <Card>
                    <Cardsection>
                        <Input
                            size={15}
                            iconname="envelope"
                            label="email"
                            placeholder="enter your email"
                            onChangeText={(email)=>this.setState({email,emailerror:''})}
                            keyboardType="email-address"
                            value={this.state.email}


                        />
                        {this.onshow()}
                        </Cardsection>

                    <Cardsection>
                        <Input
                            size={20}
                            iconname="lock"
                            label="password"
                            placeholder="enter your password"
                            onChangeText={(password) =>this.setState({password,passworderror:''})}
                            secureTextEntry={true}
                            value={this.state.password}
                        />
                        {this.onShow1()}
                    </Cardsection>
                </Card>
                <View style={{padding: 10}}>
                <Button onpress={this.onLoginpress.bind()}>Login</Button>
                </View>
                <View style={{flex:1,flexDirection:'row',alignSelf:'center'}}>
                    <View><Text style={{fontSize: 18}}>Don't have an account than?</Text></View>
                    <View><Text style={{color:greycolor,fontSize: 18,fontWeight: 'bold'}} onPress={()=>{this.props.navigation.navigate('Registration')}}> create one </Text></View>
                </View>
                </View>
            </View>

        )
    }
}
const styles = StyleSheet.create({
    textStyle: {
        color: 'red',
        paddingTop: 8,


    },
    textStyle1: {
        fontWeight:'bold',
        color: greycolor,
        alignSelf: 'center',
        fontSize: 30
    },
    imagestyle:{
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignSelf: 'center',
        paddingTop: 70,


    }


});
const mapStateToProps = state=>{
    return{
        userDetail:state.user.userDetail
    };
};

export default connect(mapStateToProps,{
        loginUser

}) (Login)
