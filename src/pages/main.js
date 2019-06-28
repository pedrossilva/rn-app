import React, { Component } from "react";
import { View, Text } from "react-native";
import AddBook from "../components/add-book";

export default class Main extends Component {
  static navigationOptions = {
    title: 'JSHunt'
  };

  render() {
    return (
      <View>
        <Text>Página main</Text>
        <AddBook/>
      </View>
    )
  }
}