import React, { Component } from 'react'
import { connect } from 'react-redux'

 class XucXac extends Component {
    rederXucXac=()=>{
        return this.props.xucXac.map((item,key)=>{
            return (<img key={key}
            src={item.hinhAnh}/>
           )
        })
        
    }
    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='rol-2'>

                    </div>
                </div>
                <div className='col-8'>
                {this.rederXucXac()}
                </div>
            </div>
            
        )
    }
}

const mapStateToProps=(state)=>{
    return{
       xucXac:state.bauCuaTomCaReducer.xucXac,
       tongTien:state.bauCuaTomCaReducer.tongTien,
    }
}
export default connect(mapStateToProps,null)(XucXac)