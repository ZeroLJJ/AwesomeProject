import React from 'react';
import {
  View,
  Navigator,
  TouchableOpacity,
  ToolbarAndroid,
  Text
} from 'react-native';
export default class LoginSuccess extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = {
    headerTitle: 'success',
    header: null
  };

  // 回到第一个页面去
  onJump = () => {
    const { navigate } = this.props.navigation;
    if (navigate) {
      navigate('Home', { name: 'Home' });
    }
  }

  render() {
    return (

      <View >
        <TouchableOpacity onPress={this.onJump.bind(this)}>
          <Text> 登录成功，点击返回登录页面 </Text>
        </TouchableOpacity>
      </View>


    );

  }

}