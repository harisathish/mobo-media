import React, { Component } from 'react'
import Android from './android.png'
import Dashboard from './Dashboard.png'

const Style = {
    float: "left",
    width: "100%",
    padding: "5px"
}
export default class MobileApp extends Component {
    render() {
        return (
            <div className="container" style={{ width: "100%" }}>
                <div className="column" style={Style}>
                    <div className="row" style={{ backgroundColor: "#DDDDE7", paddingTop: "100px" }}>
                        <div className="col-lg-6" style={{ marginTop: "-30px" }}>
                            <img src={Android} alt="Mobile app.." />
                        </div>
                        <div className="col-lg-6">
                            <div style={{ textAlign: "justify" }}>
                                <h1>Mobile apps coming soon!</h1>
                            </div>
                            <div style={{ textAlign: "justify" }}>
                                <p>Our team are working hard to develop awesome apps for our customers as well as our partner's.The ibooking apps will be available in iOs and Android.</p>
                            </div>
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-3 align-self-start" style={{ border: "1px solid gray", borderRadius: "6px" }}>
                                        <i class='fab fa-google-play' style={{ fontSize: "17px" }}></i>
                                        Google Play
                                    </div>
                                    <div class="col-md-3 align-self-center" style={{ border: "1px solid gray", marginLeft: "20px", borderRadius: "6px" }}>
                                        <i class='fa fa-apple' style={{ fontSize: "20px" }}></i>
                                        Apps Store
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                    <div className="row" style={{ backgroundColor: "#00172E" }}>
                        <div class="row">
                            <div class="col-lg-6" style={{textAlign:"left", color:"white", padding:"90px"}}>
                                <div className="class">
                                    <h1 >Finally! A booking software that really works for my business</h1>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    <button type="button" class="btn btn-light">Learn more</button>
                                </div>
                            </div>
                            <div class="col-sm-6" >
                            <img src={Dashboard} alt="Mobile app.." style={{width:"80%", marginTop:"50px"}}/>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}
