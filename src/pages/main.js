import React, { Component } from "react";
import { View, Text } from "react-native";

export default class Main extends Component {
  static navigationOptions = {
    title: 'JSHunt'
  };

  render() {
    return (
      <View>
        <Text>Página main</Text>
      </View>
    )
  }
}