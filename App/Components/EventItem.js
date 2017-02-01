// EventItem
import React, { Component } from "react";
import {
	Text,
	View,
	TouchableHighlight,
} from "react-native";
import Style from "./../Styles/Style";

export default class EventItem extends Component {
	constructor(props) {
		super(props);

	}
	static defaultProps = {
		title: "",
		date: "",
		description: "",
		address: "",
		place: "",
	}

	render() {
		const {title, started_at, address, place, onPress} = this.props;
		return (
			<TouchableHighlight
			onPress = {onPress}
			underlayColor = "rgba(0,0,0,0.2)">
				<View style = {Style.itemContainer}>
					<Text style = {Style.itemTitle}>{title}</Text>
					<Text style = {Style.itemDescription}>{started_at}</Text>
					<Text style = {Style.itemDescription}>{place}({address})</Text>
				</View>
			</TouchableHighlight>
		);
	}
}