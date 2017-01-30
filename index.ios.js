// index.ios.js
import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Navigator,
} from 'react-native';

import MainPage from './App/Components/MainPage';
import Style from './App/Styles/Style';

class SampleApp extends Component {

  _renderScene() {
    return <MainPage />;
  }

  render() {
    var _navigationBar = (
      <Navigator.NavigationBar
      style = {Style.header}
      routeMapper = {{
        LeftButton() {
          return null;
        },
        RightButton() {
          return null;
        },
        Title() {
          return <Text style = {Style.headerText}>Header</Text>
        }
      }}
      />
    );

    return (
      <Navigator initialRoute = {{
        name: "mainpage",
        index: 0,
        component: MainPage,
      }}
      renderScene = {this._renderScene}
      NavigationBar = {_navigationBar}
      />
    );
  }
}

AppRegistry.registerComponent('SampleApp', () => SampleApp);
