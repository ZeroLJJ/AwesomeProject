let NetUtil = {
  postJson(url, data, callback) {
    var fetchOptions = {
      method: 'post',
      headers: {},
      //mode属性控制是否允许跨域。same-origin（同源请求）、no-cors（默认）和cros（允许跨域请求）
      mode: "no-cors",
      body: data
    };

    // 用于异步请求，类似AJAX，请求后返回个promise对象
    // Promise 对象可以理解为一次将要执行的操作,可以用一种链式调用的方式来组织代码，让代码更加直观
    // Promise 对象有三种状态：
    //   Fulfilled 可以理解为成功的状态
    //   Rejected 可以理解为失败的状态
    //   Pending 既不是 Fulfilld 也不是 Rejected 的状态，可以理解为 Promise 对象实例创建时候的初始状态
    // then 方法就是根据 Promise 对象的状态来确定执行的操作，
    // 成功时执行第一个函数（onFulfilled），失败时执行第二个函数（onRejected），并返回一个Promise 对象。
    // catch(function)相当于then(null,function)
    fetch(url, fetchOptions)
      .then((response) => response.text())
      .then((responseText) => {
        //  callback(JSON.parse(responseText));
        callback(responseText);
      }).done();
  },
}
export default NetUtil;