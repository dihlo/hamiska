/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView
} from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState({ showText: !this.state.showText });
    }, 1000);
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}

export default class AwesomeProject extends Component {
	constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render() {
  	let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
    	<Image source={require('./components/img/bg.jpg')} style={styles.container}>
    		<View style={styles.hp}>
    			<Text style={{color: 'red'}}>15 HP</Text>
    			<Text>HP</Text>    			
    		</View>
    	</Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    resizeMode: 'stretch',
  },
  hp: {
  	alignItems: 'center',
  	flexDirection: 'row',
  },

});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
