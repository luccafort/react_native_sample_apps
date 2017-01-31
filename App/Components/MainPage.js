// MainPage
import React, { Component } from "react";
import {
	Text,
	View,
} from "react-native";
import Style from "./../Styles/Style";

export default class MainPage extends Component {

	constructor(props) {
		super(props);
		this._onPress = this._onPress.bind(this);
	}

	_onPress() {
		this.props.navigator.push({name: "detail"});
	}

	render() {
		return (
			<View style={Style.container}>
				<Text onPress = {this._onPress}>this is MainPage</Text>
			</View>
		);
	}
}