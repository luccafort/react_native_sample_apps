// index.ios.js
import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Navigator,
} from 'react-native';

import MainPage from './App/Components/MainPage';
import Detail from './App/Components/Detail';
import Style from './App/Styles/Style';

class SampleApp extends Component {

  _renderScene(route, navigator) {
    if (route.name == 'detail') {
      return <Detail route = {route} navigator = {navigator} />
    } else {
      return <MainPage toute = {route} navigator = {navigator} />;
    }
  }

  render() {
    var _navigationBar = (
      <Navigator.NavigationBar
      style = {Style.header}
      routeMapper = {{
        LeftButton(route, navigator) {
          if (route.name == "detail") {
            return (
              <Text onPress = {() => {navigator.pop()}} style = {Style.LeftButton}>戻る</Text>
            )
          } else return null;
        },
        RightButton() {
          return null;
        },
        Title(route) {
          if (route.name == "detail") {
            return <Text style = {Style.headerText}>Detail</Text>
          } else {
            return <Text style = {Style.headerText}>Header</Text>
          }
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
