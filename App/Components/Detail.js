// Detail.js
import React, {
	Component,
} from 'react';
import {
	Text,
	View,
	StyleSheet,
} from 'react-native';
import Style from './../Styles/Style';

export default class Detail extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style = {Style.container}>
				<Text>this is DetailPage</Text>
			</View>
		)
	}
}