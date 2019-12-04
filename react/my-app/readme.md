# React 教程
[教程地址](https://react.docschina.org/tutorial/tutorial.html)  

+ 搭建本地开发环境
```shell
#推荐安装最新稳定版的 Node
#安装脚手架
$ npm i create-react-app -g
#启动应用
$ npm start
```

+ 通过 Props 传递属性据
```javascript
class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;//调用子组件，添加属性
  }
}

class Square extends React.Component {
  render() {
    return (//props 属性获取属性
      <button className="square">
        {this.props.value}
      </button>
    );
  }
}
```
+ 每个组件都是 class 构造函数开头必须是 super(props) 调用父类的构造函数
+ 每次在组件中调用setState时，React都会更新其子组件  
+ 为了提高可读性，我们把返回的 React 元素拆分成了多行，同时在最外层加了小括号，这样 JavaScript 解析的时候就不会在 return 的后面自动插入一个分号从而破坏代码结构了。
+ 没有state组件推荐写成函数组件