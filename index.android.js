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

class CardLine extends Component {
  render() {
    return (
      <View style={styles.cardline}>
      	<Image style={styles.card} source={require('./components/img/Blizkon.png')}></Image>
      	<Image style={styles.card} source={require('./components/img/Blizkon.png')}></Image>
      	<Image style={styles.card} source={require('./components/img/Blizkon.png')}></Image>
      	<Image style={styles.card} source={require('./components/img/Blizkon.png')}></Image>
      	<Image style={styles.card} source={require('./components/img/Blizkon.png')}></Image>
      	<Image style={styles.card} source={require('./components/img/Blizkon.png')}></Image>
      </View>
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
    	<View style={styles.container}>
    		<View style={styles.hp}>
    			<Text style={{flex: 1, color: 'red'}}>15 HP</Text>    			   			
    		</View>
    		<View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
    			<CardLine/> 
    			<CardLine/>
    			<CardLine/> 
    			<CardLine/> 
    			<CardLine/> 
    			<CardLine/>     			    			   	            			
    		</View>
    		<View style={styles.hp}>
    			<Text style={{flex: 1, color: 'red'}}>15 HP</Text>    			   			
    		</View>
    	</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hp: {
  	alignItems: 'center',
  	flexDirection: 'row',
  },
  cardline: {
  	flex: 2,
  	flexDirection: 'row',
  	justifyContent: 'space-between',
  	backgroundColor: 'black',
  },
  card: {
  	height: 50,
  	width: 70,
  	resizeMode: 'stretch',
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
