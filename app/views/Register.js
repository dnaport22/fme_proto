"use strict";
/**
 * Creates Register
 */
//Importing required components.
import React, { Component } from 'react';
import { TextInput, View, Text, TouchableHighlight, Alert, StyleSheet, Image, ToolbarAndroid } from 'react-native';
import Dimensions from 'Dimensions';
var windowSize = Dimensions.get('window');

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      user: '',
      email: '',
      pass: '',
      pass_check: ''
    }
  }

  render() {
    return(
      <View style={styles.container}>
        <Image style={styles.bg} source={require('./../assets/images/bg-auth.jpg')} />
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="white"
            value={this.state.user}
            onChangeText={(user => this.setState({user}))}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="white"
            value={this.state.email}
            onChangeText={(email => this.setState({email}))}
          />
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor="white"
            value={this.state.pass}
            onChangeText={(pass => this.setState({pass}))}
          />
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Retype Password"
            placeholderTextColor="white"
            value={this.state.pass_check}
            onChangeText={(pass_check => this.setState({pass_check}))}

          />
          <View style={styles.signup}>
            <TouchableHighlight  onPress={this.handleSubmit.bind(this)}>
              <Text style={{color:"#FFF"}}>Sign Up</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    )
  }

  /**
   * Handling form data
   */
  handleSubmit() {
    //TODO Create class to validate form data and create user using firebase auth.
  }
}


var styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      flex: 1,
      backgroundColor: 'transparent'
    },
    form: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#313131',
      marginLeft: 20,
      marginTop: 50,
      marginRight: 20
    },
    toolbar: {
      backgroundColor: '#313131',
      height: 40,
    },
    bg: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: windowSize.width,
        height: windowSize.height
    },
    signup: {
        backgroundColor: '#4d2e9a',
        padding: 20,
        alignItems: 'center',
        width: 250,
        marginTop: 20
    },
    input: {
        width:300,
        fontSize: 16,
        color: "#FFF"
    }
})
