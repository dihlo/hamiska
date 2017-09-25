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
  ScrollView,
  Animated,
  Dimensions,
  Alert,
  TouchableHighlight
} from 'react-native';
import FlipCard from 'react-native-flip-card';

class CardLine extends Component {
  render() {
    return (
      <View style={styles.cardline}>
		<FlipCard 
		  friction={6}
		  perspective={1000}
		  flipHorizontal={true}
		  flipVertical={true}
		  flip={false}
		  clickable={true}
		  onFlipEnd={(isFlipEnd)=>{console.log('isFlipEnd', isFlipEnd)}}
		>
		  {/* Face Side */}
		  <View style={styles.card}>
		    <Text>The Face</Text>
		  </View>
		  {/* Back Side */}
		  <View style={styles.card}>
		    <Text>The Back</Text>
		  </View>
		</FlipCard>
		
      </View>
    );
  }
}

export default class AwesomeProject extends Component {
	constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0);
    this.test = this.test.bind(this)
    this.state = {text: ''};
  }
  render() {
  const rotateY = this.animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['0deg', '180deg', '0deg']
  });
    return (
    	<View style={styles.container}>
    		<View style={styles.hp}>
    			<Text style={{color: 'red'}}>15 HP</Text>    			   			
    		</View>
    		<View style={{flex: 4}}>
    			<CardLine/> 
    			<CardLine/>
    			<CardLine/> 
    			<CardLine/> 
    			<CardLine/>             			
    		</View>
    		<View style={styles.hp}>
    			<Text style={{color: 'red'}}>15 HP</Text>    			   			
    		</View>
    	</View>
    );
  }

  test() {
  	Alert.alert('You tapped the button!');
  }

  animate() {
  	console.log('OK Pressed');
	  this.animatedValue.setValue(0);
	  Animated.timing(
	    this.animatedValue,
	    {
	      toValue: 1,
	      duration: 2000,
	      easing: Easing.linear
	    }
	  ).start(() => this.reverseCard())
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  hp: {
  	flex: 1,
  	alignItems: 'center',
  	flexDirection: 'row',
  },
  cardline: {
  	flex: 1,
  	flexDirection: 'row',
  	justifyContent: 'space-around',
  	backgroundColor: 'black',
  	alignItems: 'center',
  },
  card: {
  	transform: [{rotateY: '0 deg'}],
  	height: 60,
  	width: 45,
  	backgroundColor: 'red',
  	zIndex: 1000,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
