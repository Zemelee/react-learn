import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import logo from "./logo.svg"
import Son from "./Son"
import Article from './Article';
import Table from "./Table"
class App extends React.Component {
  state = {
    count: 0,
    arr: [1, 2, 3],
    c: {
      c1: 123,
      c2: 456
    },
    show: Math.random() > 0.5,
    originArr: [1, 2, 3],//数据数组转换成元素数组
    inputVal: "",
    checkedArr: ["c2"],

    imgData: {
      className: "img",
      style: {
        width: 44,
        height: 44,
        backgroundColor: "grey"
      }
    }
  }
  addArr() {
    //数组对象 --> 引用类型,通过内存变化判断是否改变
    let _arr = [...this.state.arr] //接触引用，拷贝一份
    _arr.push(4)
    this.setState({
      arr: _arr  //赋予新数组
    }, () => {
      // console.log(this.state.arr)
    })
  }
  addCount() {
    //更新为异步更新
    this.setState({
      count: this.state.count + 1
    }, () => {
      console.log(this.state.count)
    })
    console.log(this.state.count) //1
  }
  updateC() {
    this.setState({
      // setState内部采用assign浅拷贝，覆盖第一层
      c: {
        ...this.state.c,
        c1: 999
      }
    })
  }
  switch() {
    this.setState({
      show: !this.state.show
    })
  }
  getArr() {
    let newArr = [];
    this.state.originArr.forEach(item => {
      // Fragment   相当于  vue的template
      newArr.push(<Fragment key={item}><div>{item}</div></Fragment>)
    })
    return newArr;
  }
  updateArr() {
    let _arr = [...this.state.originArr];
    _arr.push(Math.random());
    this.setState({
      originArr: _arr
    })
  }
  handlerCheck = (e) => {
    let _arr = [...this.state.checkedArr]
    if (e.target.checked) {
      _arr.push(e.target.value)
    } else {
      _arr.splice(_arr.indexOf(e.target.value), 1);//移除
    }
    this.setState({
      checkedArr: _arr
    })
    console.log(e.target.value)
  }

  changeMes(msg) {
    this.setState({
      inputVal: msg
    })
  }




  // 
  render() {
    return (
      // 严格模式：开发环境下的自动代码审查
        <div>
          <h2>计数器：{this.state.count} <button onClick={this.addCount.bind(this)}>addCount</button></h2>
          <div>  <button onClick={this.addArr.bind(this)}>addArr</button> {this.state.arr} <br /></div>
          <div> c1:{this.state.c.c1} <br /> </div>
          <div> c2:{this.state.c.c2} <br /> <button onClick={this.updateC.bind(this)}>updateC</button></div>
          <div>条件渲染：{this.state.show ? 'show' : 'hide'} <button onClick={this.switch.bind(this)}>switch</button></div>
          {/* 各种效果通过逻辑运算产生对应的内容渲染 */}
          <div>列表渲染：<button onClick={this.updateArr.bind(this)}>updateArr</button>{this.getArr()}</div>
          <hr />

          <input placeholder='双向绑定' value={this.state.inputVal} onInput={(e) => {
            this.setState({
              inputVal: e.target.value
            })
          }}></input>
          {this.state.inputVal}
          <input type='checkbox' checked={this.state.checkedArr.includes("c1")} onChange={this.handlerCheck.bind(this)} value="c1" name='choose' />opt1
          <input type='checkbox' checked={this.state.checkedArr.includes("c2")} onChange={this.handlerCheck.bind(this)} value="c2" name='choose' />opt2
          <input type='checkbox' checked={this.state.checkedArr.includes("c3")} onChange={this.handlerCheck.bind(this)} value="c3" name='choose' />opt3
          <br /> checkedArr: {this.state.checkedArr}
          <hr></hr>
          <Son
            a="1"
            slot={<span>this.props.slot 剧名插槽</span>}
            scopeslot={(str) => { return <span>{str}</span> }}
            changeMes={this.changeMes.bind(this)}>
            {/* 插槽slot */}
            <span>this.props.children</span>
          </Son>
          <img
            src={logo}
            alt="111"
            {...this.state.imgData}
          ></img>
          <Article title="1" active></Article>
          <Article title="2"></Article>
          <hr></hr>
        <Table></Table>
        </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))