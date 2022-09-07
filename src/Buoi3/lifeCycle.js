import React, { Component } from 'react'

export default class LifeCycle extends Component {
    constructor(props) {
        //Hàm khởi tạo
        super(props)
        this.state = { color: "green" }
    }

    componentWillUnmount() {
        console.log("component will Unmount đã chạy");
    }
    componentDidMount() {
        //componentDidMount chạy đầu tiên
        console.log("component did mount đã chạy");
    }
    componentWillMount(){
        console.log("component will mount đã chạy");
    }

    render() {
        return (
            <div>
                <button onClick={() => this.setState({ color: 'aaaa' })}>
                    submit
                </button>
                <p>
                    {this.state.color}
                </p>
            </div>
        )
    }
}
