import React, { Component } from "react";
import {
  ToolbarAndroid,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";
import EditView from "../lib/EditView";
import LoginButton from "../lib/LoginButton";
import LoginSuccess from "../ui/LoginSuccess";
import NetUitl from "../lib/NetUtil";
export default class LoginActivity extends Component {
  constructor(props) {
    // 因constructor会覆盖父类的构造方法，导致父类未执行构造方法
    // 如果你用到了constructor就必须写super(),是用来初始化this的，可以绑定事件到this上;
    // 如果你在constructor中要使用this.props,就必须给super加参数：super(props)；
    // （无论有没有constructor，在render中this.props都是可以使用的，这是React自动附带的；）
    // 如果没用到constructor,是可以不写的
    super(props);
    this.userName = "";
    this.password = "";
  }

  render() {
    return (
      <View style={LoginStyles.loginview}>
        <View
          style={{
            flexDirection: "row",
            height: 100,
            marginTop: 1,
            justifyContent: "center",
            alignItems: "flex-start"
          }}
        >
          <Image source={require("../image/login.png")} />
        </View>
        <View
          style={{
            marginTop: 80
          }}
        >
          <EditView
            name="输入用户名/注册手机号"
            onChangeText={text => {
              this.userName = text;
            }}
          />
          <EditView
            name="输入密码"
            onChangeText={text => {
              this.password = text;
            }}
          />
          <LoginButton name="登录" onPressCallback={this.onPressCallback} />
          <Text
            style={{
              color: "#4A90E2",
              textAlign: "center",
              marginTop: 10
            }}
          >
            忘记密码？
          </Text>
        </View>
      </View>
    );
  }

  onPressCallback = () => {
    let formData = new FormData();
    formData.append("id", this.userName);
    formData.append("pwd", this.password);
    // 请求url换成localhost或127.0.0.1会失败,因为此时是映射到模拟器的本机ip，所以失败。
    // 也可以使用以下ip，以下为Genymotion模拟器的ip，即可映射到电脑。
    // let url = "http://10.0.3.2:8080/login";
    let url = "http://192.168.66.218:8080/login";
    NetUitl.postJson(url, formData, responseText => {
      alert(responseText);
      this.onLoginSuccess();
    });
  };

  //跳转到第二个页面去
  onLoginSuccess() {
    const { navigator } = this.props;
    if (navigator) {
      navigator.push({
        name: "LoginSuccess",
        component: LoginSuccess
      });
    }
  }
}

class loginLineView extends Component {
  render() {
    return <Text>没有帐号</Text>;
  }
}

const LoginStyles = StyleSheet.create({
  loginview: {
    flex: 1,
    padding: 30,
    backgroundColor: "#ffffff"
  }
});
