import React, { Component } from 'react'
import './buoi1.css'
import Header from './header'
import Body from './body'
import Footer from './footer'
import BodyRight from './bodyRight'
export default class Buoi1 extends Component {
    render() {


        return (

            <div>
                {/* {renderHTML()}
                buoi1 */}
                <Header />
                <div className='body1'>
                <Body/>
                <BodyRight/>
                </div>
                
                <Footer/>
                
            </div>
        )
    }
}
