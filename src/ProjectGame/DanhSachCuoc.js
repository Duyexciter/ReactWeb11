import React, { Component } from 'react'
import { connect } from 'react-redux'
class DanhSachCuoc extends Component {
  renderDanhSachCuoc = () => {
    return this.props.danhSachCuocs.map((quanCuoc, index) => {
      return (
        <div className='col-4 mt-2' key={index}>
          <img src={quanCuoc.hinhAnh} />
          <br />
          <span style={{ fontSize: '50px', color: "red" }}>
            {quanCuoc.diemCuoc}
          </span>
        </div>
      )
    })
  }
  render() {
    console.log(this.props.danhSachCuoc);
    return (
      <div className='container'>
        <div className='row'>
          {this.renderDanhSachCuoc()}
        </div>
      </div>
    )
  }
}
//

const mapStateToProps = (state) => {

  return {
    //Đặt tên giá trị :lấy dữ liệu từ trong kho
    danhSachCuocs: state.bauCuaTomCaReducer.danhSachCuoc
    //Biến tự đặt: 
  }
}
export default connect(mapStateToProps, null)(DanhSachCuoc)

