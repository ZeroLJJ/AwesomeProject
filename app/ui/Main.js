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
export default class Main extends React.Component {
  // 因constructor会覆盖父类的构造方法，导致父类未执行构造方法
  // 如果你用到了constructor就必须写super(),是用来初始化this的，可以绑定事件到this上;
  // 如果你在constructor中要使用this.props,就必须给super加参数：super(props)；
  // （无论有没有constructor，在render中this.props都是可以使用的，这是React自动附带的；）
  // 如果没用到constructor,是可以不写的
  constructor(props) {
    super(props);
    this.userName = "";
    this.password = "";
    // ES6 类中成员函数必须手动绑定this如下，否则无法使用this:
    // this.onLoginSuccess = this.onLoginSuccess.bind(this);
    // 或者如本例中成员函数用()=>箭头函数赋值，箭头函数因无this,会自动获取外层this。
  }

  static navigationOptions = {
    header: null,  //可以设置一些导航的属性，当然如果想隐藏顶部导航条只要将这个属性设置为null就可以了
    headerTitle: 'Welcome' //设置导航栏标题，推荐用这个方法。
    /*
    title: 标题，如果设置了这个导航栏和标签栏的title就会变成一样的，所以不推荐使用这个方法。
    headerBackTitle：设置跳转页面左侧返回箭头后面的文字，默认是上一个页面的标题。可以自定义，也可以设置为null
    headerTruncatedBackTitle：设置当上个页面标题不符合返回箭头后的文字时，默认改成"返回"。（上个页面的标题过长，导致显示不下，所以改成了短一些的。）
    headerRight：设置导航条右侧。可以是按钮或者其他。
    headerLeft：设置导航条左侧。可以是按钮或者其他。
    headerStyle：设置导航条的样式。背景色，宽高等。如果想去掉安卓导航条底部阴影可以添加elevation: 0，iOS下用shadowOpacity: 0。
    headerTitleStyle：设置导航条文字样式。安卓上如果要设置文字居中，只要添加alignSelf:'center'就可以了
    headerBackTitleStyle：设置导航条返回文字样式。
    headerTintColor：设置导航栏文字颜色。总感觉和上面重叠了。
    headerPressColorAndroid：安卓独有的设置颜色纹理，需要安卓版本大于5.0
    gesturesEnabled：是否支持滑动返回收拾，iOS默认支持，安卓默认关闭
    */
  };

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
  onLoginSuccess = () => {
    const { navigate } = this.props.navigation;
    if (navigate) {
      navigate('LoginSuccess', { name: 'LoginSuccess' });
    }
  };
}

const LoginStyles = StyleSheet.create({
  loginview: {
    flex: 1,
    padding: 30,
    backgroundColor: "#ffffff"
  }
});
