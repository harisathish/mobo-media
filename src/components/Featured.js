import React, { Component } from 'react'
import Image from './cover.jpg'

export default class Featured extends Component {
    render() {
        return (
            <div className="container" style={{width:"100%"}}>
                <div className="card-header" style={{ backgroundColor: "#DDDDE7", marginTop: "20px" }}>
                    <div className="container">
                        <div className="c">
                            <h3 ><b>Featured businesses near you</b></h3>
                        </div>
                        <br />
                        <div className="row">
                            <div class="column1">
                                <div class="card">
                                    <img src={Image} alt="Cardimage" style={{ height: "10%" }} />
                                    <div class="card-body" style={{ textAlign: "left" }}>
                                        some example text.
                                        <br/>
                                        some example text.
                                        <br/>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star" ></i>
                                        <i class="fa fa-star" ></i>
                                        <i class="fa fa-star" ></i>
                                        <i class="fa fa-star" ></i>
                                    </div>
                                </div>
                            </div>
                            <div class="column1">
                            <div class="card">
                                    <img src={Image} alt="Cardimage" style={{ height: "10%" }} />
                                    <div class="card-body" style={{ textAlign: "left" }}>
                                        some example text.
                                        <br/>
                                        some example text.
                                        <br/>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star" ></i>
                                        <i class="fa fa-star" ></i>
                                        <i class="fa fa-star" ></i>
                                        <i class="fa fa-star" ></i>
                                    </div>
                                </div>
                            </div>
                            <div class="column1">
                            <div class="card">
                                    <img src={Image} alt="Cardimage" style={{ height: "10%" }} />
                                    <div class="card-body" style={{ textAlign: "left" }}>
                                        some example text.
                                        <br/>
                                        some example text.
                                        <br/>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star" ></i>
                                        <i class="fa fa-star" ></i>
                                        <i class="fa fa-star" ></i>
                                        <i class="fa fa-star" ></i>
                                    </div>
                                </div>
                            </div>
                            <div class="column1">
                            <div class="card">
                                    <img src={Image} alt="Cardimage" style={{ height: "10%" }} />
                                    <div class="card-body" style={{ textAlign: "left" }}>
                                        some example text.
                                        <br/>
                                        some example text.
                                        <br/>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star" ></i>
                                        <i class="fa fa-star" ></i>
                                        <i class="fa fa-star" ></i>
                                        <i class="fa fa-star" ></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div class="column1">
                                <div class="card">
                                    <img src={Image} alt="Cardimage" style={{ height: "10%" }} />
                                    <div class="card-body" style={{ textAlign: "left" }}>
                                        some example text.
                                        <br/>
                                        some example text.
                                        <br/>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star" ></i>
                                        <i class="fa fa-star" ></i>
                                        <i class="fa fa-star" ></i>
                                        <i class="fa fa-star" ></i>
                                    </div>
                                </div>
                            </div>
                            <div class="column1">
                            <div class="card">
                                    <img src={Image} alt="Cardimage" style={{ height: "10%" }} />
                                    <div class="card-body" style={{ textAlign: "left" }}>
                                        some example text.
                                        <br/>
                                        some example text.
                                        <br/>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star" ></i>
                                        <i class="fa fa-star" ></i>
                                        <i class="fa fa-star" ></i>
                                        <i class="fa fa-star" ></i>
                                    </div>
                                </div>
                            </div>
                            <div class="column1">
                            <div class="card">
                                    <img src={Image} alt="Cardimage" style={{ height: "10%" }} />
                                    <div class="card-body" style={{ textAlign: "left" }}>
                                        some example text.
                                        <br/>
                                        some example text.
                                        <br/>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star" ></i>
                                        <i class="fa fa-star" ></i>
                                        <i class="fa fa-star" ></i>
                                        <i class="fa fa-star" ></i>
                                    </div>
                                </div>
                            </div>
                            <div class="column1">
                            <div class="card">
                                    <img src={Image} alt="Cardimage" style={{ height: "10%" }} />
                                    <div class="card-body" style={{ textAlign: "left" }}>
                                        some example text.
                                        <br/>
                                        some example text.
                                        <br/>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star" ></i>
                                        <i class="fa fa-star" ></i>
                                        <i class="fa fa-star" ></i>
                                        <i class="fa fa-star" ></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
