import React, { Component } from 'react';
import {
  ToolbarAndroid,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';
export default class EditView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <View style={LoginStyles.TextInputView}>
        <TextInput style={LoginStyles.TextInput}
          placeholder={this.props.name}
          onChangeText={
            (text) => {
              // text外还有个{}是ES6的新特性，对数组或对象进行解构
              // 对象则需名字对应上，或者{text:t}这样后面的t才是真正被赋值的变量
              this.setState({ text });
              this.props.onChangeText(text);
            }
          }
        />
      </View>
    );
  }
}


const LoginStyles = StyleSheet.create({
  TextInputView: {
    marginTop: 10,
    height: 50,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    borderWidth: 0.3,
    borderColor: '#000000',
    flexDirection: 'column',
    justifyContent: 'center',
  },

  TextInput: {
    backgroundColor: '#ffffff',
    height: 45,
    margin: 18,
  },
});