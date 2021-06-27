import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


export default class Navigation extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-inverse">
                    <div class="container-fluid">
                        <div class="navbar-header"></div>

                        <ul class="nav navbar-nav" style={{ display: "inline-block", listStyleType: "none", float: "right" }}>
                            <NavLink style={{color:"#fff", cursor: "pointer", marginRight: "30px" }} to="/Form" exact activeStyle={{}}>Form </NavLink >
                            {/* <NavLink style={{color:"#fff", cursor: "pointer", marginRight: "30px" }} to="/Images" exact activeStyle={{}}>Images </NavLink > */}
                            <NavLink style={{ color:"#fff",cursor: "pointer", marginRight: "30px" }} to="/SuperCharge" exact activeStyle={{}}>SuperCharge </NavLink >
                            <NavLink style={{color:"#fff", cursor: "pointer", marginRight: "30px" }} to="/Featured" exact activeStyle={{}} >Featured</NavLink >
                            <NavLink style={{ color:"#fff",cursor: "pointer", marginRight: "30px" }} to="/Ibooking" exact activeStyle={{}} >Ibooking</NavLink >
                            <NavLink style={{ color:"#fff",cursor: "pointer", marginRight: "30px" }} to="/MobileApp" exact activeStyle={{}} >MobileApp</NavLink >

                        </ul>
                    </div>
                </nav>
                </div>
                )
    }
}
