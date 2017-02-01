// EventItem
import React, { Component } from "react";
import {
	Text,
	View
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
		const {title, started_at, address, place} = this.props;
		return (
			<View style = {Style.itemContainer}>
				<Text style = {Style.itemTitle}>{title}</Text>
				<Text style = {Style.itemDescription}>{started_at}</Text>
				<Text style = {Style.itemDescription}>{place}</Text>
			</View>
		);
	}
}