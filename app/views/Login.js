"use strict";
/**
 * Creates Login
 */
//Importing required components.
import React, { Component } from 'react';
import { TextInput, View, Text, TouchableHighlight, Alert, StyleSheet, Image } from 'react-native';
import Dimensions from 'Dimensions';
var windowSize = Dimensions.get('window');

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      user: '',
      pass: '',
    }
  }

  render() {
    return(
      <View style={styles.container}>
        <Image style={styles.bg} source={require('./../assets/images/bg-auth.jpg')} />
        <View style={styles.header}>
          <Image style={styles.mark} source={require('./../assets/images/logo.png')}/>
        </View>
        <View style={styles.inputs}>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Username"
              placeholderTextColor="black"
              value={this.state.user}
              onChangeText={(user) => this.setState({user})}
            />
            <TextInput
              secureTextEntry={true}
              placeholder="Password"
              placeholderTextColor="#737276"
              value={this.state.pass}
              onChangeText={(pass) => this.setState({pass})}
            />
          </View>
        </View>
        <TouchableHighlight
          onPress={() => this.signInUser()}>
          <View style={styles.signin}>
            <Text style={styles.whiteFont}>Sign In</Text>
          </View>
        </TouchableHighlight>
        <View style={styles.signup}>
          <TouchableHighlight
            onPress={this.handleSubmit.bind(this)}>
            <Text style={styles.greyFont}>Don't have an account?<Text style={styles.whiteFont} onPress={() => this.signUpUser()}>  Sign Up</Text></Text>
          </TouchableHighlight>

        </View>
      </View>
    )
  }

  /**
   * Handling form data
   */
  handleSubmit() {
    //TODO Create class to validate form data and submit to the firebase auth.
  }

  /**
   * @return navigator.push() Register view
   */
  signUpUser() {
     return this.props.navigator.push({
         view: 'Register',
         passProps: {
             header: 'Sign Up'
         }
     })
  }

  /**
   * @return navigator.push() Login view
   */
  signInUser() {
      this.props.navigator.push({
          view: 'Main',
          passProps: {
              header: 'Forbes'
          }
      })
  }
}


var styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      flex: 1,
      backgroundColor: 'transparent'
    },
    bg: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: windowSize.width,
        height: windowSize.height
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: .5,
        backgroundColor: 'transparent'
    },
    mark: {
        width: 150,
        height: 150
    },
    signin: {
        backgroundColor: '#4d2e9a',
        padding: 20,
        alignItems: 'center'
    },
    signup: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: .15
    },
    inputs: {
        marginTop: 10,
        marginBottom: 10,
        flex: .25
    },
    inputPassword: {
        marginLeft: 15,
        width: 20,
        height: 21
    },
    inputUsername: {
      marginLeft: 15,
      width: 20,
      height: 20
    },
    inputContainer: {
        padding: 10,
        borderWidth: 1,
        borderBottomColor: '#CCC',
        borderColor: 'transparent'
    },
    input: {
        position: 'absolute',
        left: 61,
        top: 12,
        right: 0,
        height: 20,
        fontSize: 14
    },
    forgotContainer: {
      alignItems: 'flex-end',
      padding: 0,
      marginBottom: 30,
    },
    greyFont: {
      color: '#D8D8D8'
    },
    whiteFont: {
      color: '#FFF'
    }
})
