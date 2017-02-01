// Detail.js
import React, { Component } from "react";
import {
	Text,
	View,
	WebView,
} from "react-native";
import Style from "./../Styles/Style";

export default class Detail extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<WebView
			style = {{height: 300, width: 200}}
			style = {Style.listViewContainer}
			source = {{uri:this.props.route.event_url}}
			/>
		);
	}
}