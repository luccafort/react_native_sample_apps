// MainPage
import React, { Component } from 'react';
import {
	Text,
	View,
} from 'react-native';
import Style from './../Styles/Style';

export default class MainPage extends Component {
	render() {
		return (
			<View style={Style.container}>
				<Text>this is MainPage</Text>
			</View>
		);
	}
}