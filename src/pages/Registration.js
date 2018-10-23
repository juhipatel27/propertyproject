import React,{Component} from 'react';
import {SafeAreaView, View, Text, Image, StyleSheet, ScrollView, ImageBackground} from 'react-native';
import {Card,Cardsection,Button, Input, Spinner} from "../comman/index";
import Icon from 'react-native-vector-icons/MaterialIcons'
import {Empty,validateEmail,validateNum} from '../validation/validation'
import {connect} from 'react-redux';
import {registerUser} from "../Actions/RegistrationAction";
import {greencolor,greycolor} from '../comman/color'
class Registration extends Component {
    constructor(props) {
        super(props)
        this.state={
            name: '',
            email: '',
            password: '',
            phone: '',
            nameerror: '',
            emailerror: '',
            passworderror: '',
            phonenoerror: ''
        }
    }

    onRegiPress = () => {
        this.setState({emailerror: '', passworderror: '', nameerror: '', phonenoerror: ''})
        if (Empty(this.state.name)) {
            this.setState({nameerror: 'error'})
        }

        if (Empty(this.state.email)) {
            this.setState({emailerror: 'error'})
        } else if (!validateEmail(this.state.email)) {
            this.setState({emailerror: "enter proper email"})
        } else {
        }

        if (Empty(this.state.password)) {
            this.setState({passworderror: 'error'})
        }

        if (Empty(this.state.phone)) {
            this.setState({phonenoerror: 'error'})
        } else if (!validateNum(this.state.phone)) {
            this.setState({phonenoerror: "enter proper number"})
        } else {
        }

        if(Empty(this.state.name) === false &&
            Empty(this.state.email) === false &&
            Empty(this.state.password) === false &&
            Empty(this.state.phone) === false) {

            let user = {
                uname: this.state.name.trim(),
                email: this.state.email.trim(),
                password: this.state.password.trim(),
                phoneno: this.state.phone.trim().toString()
            }
            this.props.registerUser(user).then((res) => {
                this.props.navigation.navigate('Login')
            }).catch((err) => {
                console.log(err);
                //alert("in unsucess call")
            })

        }

    }

    onemailshow = () => {
        if (this.state.emailerror === 'error') {
            return (
                <View><Icon style={styles.textStyle} size={20} name={this.state.emailerror}/></View>)
        } else {
            return (
                <View><Text style={styles.textStyle}>{this.state.emailerror}</Text></View>)
        }
    }
    onphoneshow=()=>{
        if (this.state.phonenoerror === 'error') {
            return (
                <View><Icon style={styles.textStyle} size={20} name={this.state.phonenoerror}/></View>)
        } else {
            return (
                <View><Text style={styles.textStyle}>{this.state.phonenoerror}</Text></View>)
        }
    }
    onShowname=()=>{

        if(this.state.nameerror === 'error'){
            return(
                <View><Icon style={styles.textStyle} size={20} name={this.state.nameerror} /></View>)
        }
    }
    onShowpassword=()=>{

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
                    <View style={{marginTop: 150}}><Text style={styles.textStyle1}>Registration</Text></View>

                <Card>
                    <Cardsection>
                        <Input
                            size={20}
                            iconname="user"
                            label="name"
                            placeholder="enter your name"
                            onChangeText={(name) =>this.setState({name,nameerror:''})}
                            value={this.state.name}
                        />
                        {this.onShowname()}
                    </Cardsection>

                    <Cardsection>
                        <Input
                            size={15}
                            iconname="envelope"
                            label="email"
                            placeholder="enter your email"
                            onChangeText={(email)=>this.setState({email,emailerror:''})}
                            value={this.state.email}
                            keyboardType="email-address"

                        />
                        {this.onemailshow()}
                    </Cardsection>

                    <Cardsection>
                        <Input
                            size={20}
                            iconname="lock"
                            label="password"
                            placeholder="enter your password"
                            onChangeText={(password) =>this.setState({password,passworderror:''})}
                            value={this.state.password}
                            secureTextEntry={true}
                        />
                        {this.onShowpassword()}
                    </Cardsection>
                    <Cardsection>
                        <Input
                            size={20}
                            iconname="phone"
                            label="phoneno"
                            placeholder="enter your phoneno"
                            onChangeText={(phone) =>this.setState({phone,phonenoerror:''})}
                            value={this.state.phone}
                            keyboardType="number-pad"

                        />
                        {this.onphoneshow()}
                    </Cardsection>
                </Card>
                <View style={{padding: 10}}>
                    <Button onpress={this.onRegiPress.bind()}>Registration</Button>
                </View>
                    <View style={{flex:1,flexDirection:'row',alignSelf:'center'}}>
                        <View><Text style={{fontSize: 18}}>You have an account than?</Text></View>
                        <View><Text style={{color:greycolor,fontSize: 18,fontWeight: 'bold'}} onPress={()=>{this.props.navigation.navigate('Login')}}> Login </Text></View>
                    </View>

                </View>
            </View>



        )
    }
}
const styles = StyleSheet.create({
    textStyle: {
        color: 'red',
        paddingTop: 8

    },
    textStyle1: {
        color:greycolor ,
        alignSelf: 'center',
        fontSize: 30,
        fontWeight: 'bold'
    },
    imagestyle: {
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignSelf: 'center',
        paddingTop: 50
    }


});
const mapStateprops = state=>{
    return{

    };
};

export default connect(mapStateprops,{
    registerUser

}) (Registration)