import React from "react";


class Table extends React.Component {

    state = {
        tabeArr: [],
        namaValue:"",
        dateValue:"",
        statusValue:""
    }

    render() {
        return (
            <div>
                {/* <table>
                    <thead>
                        <tr>
                            <td>日期</td>
                            <td>订单</td>
                            <td>状态</td>
                            <td>操作</td>
                        </tr>
                    </thead>
                </table> */}
                namaValue:{this.state.namaValue} <br></br>
                <label>name</label>
                <input value={this.state.namaValue} onInput={(e) => {
                    this.setState({
                        namaValue:e.target.value
                    })
                }}></input>
            </div>
        )
    }
}

export default Table