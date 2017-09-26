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
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import FlipCard from 'react-native-flip-card';

class CardLine extends Component {

	componentWillMount() {
		this.animatedValue = new Animated.Value(0);
		this.value = 0;
		this.animatedValue.addListener(({ value }) => {
		  this.value = value;
		})
		this.frontInterpolate = this.animatedValue.interpolate({
		  inputRange: [0, 180],
		  outputRange: ['0deg', '180deg'],
		})
		this.backInterpolate = this.animatedValue.interpolate({
		  inputRange: [0, 180],
		  outputRange: ['180deg', '360deg']
		})
	}
	flipCard() {
	if (this.value >= 90) {
		Animated.spring(this.animatedValue,{
			toValue: 0,
			friction: 8,
			tension: 10
		}).start();
	} else {
		Animated.spring(this.animatedValue,{
			toValue: 180,
			friction: 8,
			tension: 10
		}).start();
	}
	}

	render() {
	const frontAnimatedStyle = {
	  transform: [
	    { rotateY: this.frontInterpolate}
	  ]
	}
	const backAnimatedStyle = {
	  transform: [
	    { rotateY: this.backInterpolate }
	  ]
	}
	return (
	  <View style={styles.container1}>
	    <View>
		   	<TouchableOpacity onPress={() => this.flipCard()}>
		      <Animated.View style={[styles.flipCard, frontAnimatedStyle]}>
		        <Text style={styles.flipText}>
		          111
		        </Text>
		      </Animated.View>
		      <Animated.View style={[backAnimatedStyle, styles.flipCard, styles.flipCardBack]}>
		        <Text style={styles.flipText}>
		          222
		        </Text>
		      </Animated.View>
		   	</TouchableOpacity>  
		</View>
	  </View>
	);
	}
}

export default class AwesomeProject extends Component {
	constructor(props) {
	super(props);
	this.animatedValue = new Animated.Value(0);
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

	animate() {
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
		alignItems: 'center',
	},
	card: {
		height: 60,
		width: 45,
		backgroundColor: 'red',
		zIndex: 1000,
	},
	container1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
	},
	flipCard: {
		height: 60,
		width: 45,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'blue',
		backfaceVisibility: 'hidden',
	},
	flipCardBack: {
		backgroundColor: "red",
		position: "absolute",
		top: 0,
	},
	flipText: {
		color: 'white',
		fontWeight: 'bold',
	}
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
