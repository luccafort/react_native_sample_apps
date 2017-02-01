// MainPage
import React, { Component } from "react";
import {
	Text,
	View,
	ScrollView,
} from "react-native";
import Style from "./../Styles/Style";
import EventItem from './EventItem';

export default class MainPage extends Component {

	constructor(props) {
		super(props);

		this.state = {
			eventItems: [],
		};
		this._renderRow = this._renderRow.bind(this);
	}

	_renderRow() {
		var array = this.state.eventItems.map((props, index) => {
			return (
				<EventItem key = {props.event_id} {...props} />
			)
		});
		return array;
	}

	_onPress() {
		this.props.navigator.push({name: "detail"});
	}

	componentWillMount() {
		var url = "https://connpass.com/api/v1/event/";
		var req = new XMLHttpRequest();
		req.open("GET", url);
		req.onload = () => {
			this.setState({eventItems: JSON.parse(req.responseText).events});
		};
		req.send();
	}

	render() {
		return (
			<ScrollView style = {Style.listViewContainer}>
				{this._renderRow()}
			</ScrollView>
		);
	}
}