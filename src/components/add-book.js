import React, { Component } from "react"
import { StyleSheet, SafeAreaView, Text, View, TextInput, Button } from "react-native"

export default class AddBook extends Component {
  state = {
    title: "",
    author: ""
  };

  render() {
    const { title, author } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1, margin: 10}}
            onChangeText={(title) => this.setState({title})}
            value={title}
            placeholder='Title of the book'
          />

          <TextInput
            {...this.props}
            editable = {true}
            maxLength = {40}
          />

          <TextInput
            value={author}
            placeholder='Name of the Author'
            style={styles.textInput}
            onChangeText={value => this.setState({ author: value })}
          />
          <Button onPress={() => alert("Add the book")} title='Add the book' color='#841584' style={styles.btn}>
            Add
          </Button>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  inputContainer: {
    margin: 10
  },
  textInput: {
    height: 40,
    textAlign: "center",
    color: "#333333",
    marginBottom: 10,
    fontSize: 14,
    borderWidth: 1,
    borderBottomColor: "#111111"
  },
  btn: {
    width: 100,
    height: 40,
    backgroundColor: "#F00"
  }
});