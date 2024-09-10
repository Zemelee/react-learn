import React from "react";
import sonStyle from "./Son.module.css"
// import classnames from "classnames";
// let str = classnames({
//     son :true,
//     son1: true
// })
// PureComponent
class Son extends React.Component {
    state = {
        sonMes: "hello",
        hasSon2: false
    }
    // 横跨挂载与更新
    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps", props, state)
        return null
    }
    // return false不会执行render,性能优化
    shouldComponentUpdate() {
        console.log("shouldComponentUpdate")
        return true
    }
    // 更新完成
    componentDidUpdate() {
        console.log("componentDidUpdate")
        return null
    }

    getSnapshotBeforeUpdate() {

    }
    // 决定渲染什么内容,更新或者初次挂载都会执行render
    render() {
        console.log("render")
        return <div style={{
            border: "1px solid red",
        }} className={sonStyle.son + " " + sonStyle.son1 + (this.state.hasSon2 ? " son2" : "")}>
            <button onClick={() => {
                this.setState({
                    hasSon2: !this.state.hasSon2
                })
            }}>son2</button>
            默认插槽：{this.props.children}
            <div>父组件参数：{this.props.slot}</div>
            <div> 子传父数据: {this.props.scopeslot("父的参数写成带参函数")} </div>
            子组件参数(具有默认值):  {this.props.mes} <br></br>
            子组件数据: {this.state.sonMes}
            <br />
            <button onClick={() => { this.props.changeMes(this.state.sonMes) }}>父组件事件</button>
            son of app
        </div>
    }
    //组件挂载完成(mounted)
    componentDidMount() {

    }

    
    // 卸载前,去除!全局!事件监听，定时器，计时器
    componentWillUnmount() {
        console.log("componentWillUnmount")
    }
}


Son.propTypes = {
    mes: function (props) {
        if (typeof props.mes !== "string") {
            throw new Error("mes must be a string");
        }
    }
}
Son.defaultProps = {
    mes: "default_mes_value"
}
export default Son;