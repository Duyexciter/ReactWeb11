import React, { Component } from 'react'

export default class Child extends Component {
    state = {
        img: this.props.listArrayssss.mangSP[3].hinhAnh
    }
    //state less
    changeImg = (imgs) => {
        return (
            this.setState({
                img: imgs
            })
        )
    }
    render() {
        // console.log(this.props.listArrayssss);
        //  let fatherProps=this.props.listArrayssss
        //  console.log(fatherProps);
        //Cách 2:detructuring
        let { listArrayssss } = this.props

        return (
            <div className='row'>
                <div className='col-6'>
                    <img src={this.state.img} style={{ width: 300, height: 300 }} />
                    {/* {listArrayssss.mangSP.map((item, index) => {
                        return (
                            <div key={index}>
                                <img src={item.hinhAnh} style={{ width: 300, height: 300 }} />
                                <h1>{item.maSP}</h1>
                                <h1>{item.tenSP}</h1>
                                <h1>{item.gia}</h1>

                            </div>

                        )
                    })} */}


                </div>
                <div className='col-6'>
                    {listArrayssss.mangSP.map((item, index) => {
                        return (
                            <button key={index} onClick={() => this.changeImg(item.hinhAnh)}>
                                <img src={item.hinhAnh} style={{ width: 300, height: 300 }} />
                            </button>
                        )
                    })}
                </div>


            </div>
        )
    }
}
//Sự khác nhau giữa state và props?
