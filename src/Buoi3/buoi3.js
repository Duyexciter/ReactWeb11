import React, { Component } from 'react'
import img1 from "../asset/anh1.png"
import img2 from "../asset/anh2.png"
import img3 from "../asset/anh3.png"
import img4 from "../asset/anh4.png"
import Child from './child'
export default class Buoi3 extends Component {
    listArray = {
        mangSP: [
            { maSP: 1, tenSP: "IphoneX", gia: 100, hinhAnh: img1 },
            { maSP: 2, tenSP: "IphoneXs", gia: 100, hinhAnh: img2 },
            { maSP: 3, tenSP: "Iphone11", gia: 100, hinhAnh: img3 },
            { maSP: 4, tenSP: "Iphone12", gia: 100, hinhAnh: img4 },
        ]
    }
    //props: Truyền dữ liệu thông qua component
    render() {
        return (
            <div>
                <Child listArrayssss={this.listArray} />
            </div>
        )
    }
}
