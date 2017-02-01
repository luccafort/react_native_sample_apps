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

	componentWillMount() {
		var url = "http://connpass.com/api/v1/event";
		var req = new XMLHttpRequest();
		req.open("GET", url);
		req.onload = () => {
			console.log(JSON.parse(req.responseText));
		};
		req.send();
	}

	render() {
		return (
			<View style = {Style.container}>
				<Text onPress = {this._onPress}>
					this is MainPage
				</Text>
			</View>
		);
	}
}