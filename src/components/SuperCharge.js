import React, { Component } from 'react'
import Image from './cover.jpg'

export class SuperCharge extends Component {
    render() {
        return (
            <div className="container" style={{ marginTop: "20px" }}>
                <div className="c">
                    <h1 >Supercharge your business with ibooking</h1>
                </div>
                <div className="c">
                    <p >
                        A well-organized paragraph supports or develops a single controlling idea, which is expressed in a sentence called the topic sentence. A topic sentence has several important functions: it substantiates or supports an essay’s thesis statement; it unifies the content of a paragraph and directs the order of the sentences; and it advises the reader of the subject to be discussed and how the paragraph will discuss it. Readers generally look to the first few sentences in a paragraph to determine the subject and perspective of the paragraph. That’s why it’s often best to put the topic sentence at the very beginning of the paragraph. In some cases, however, it’s more effective to place another sentence befo
                    </p>
                </div>
                <div className="c">
                    <p >
                        A well-organized paragraph supports or develops a<span style={{ color: "red" }}> single controlling idea</span>, which is expressed in a sentence called the topic sent.
                    </p>
                </div>
                <div className="c">
                    <p >
                        A well-organized paragraph supports or develops a single controlling idea, which is expressed in a sentence called the topic sentence. A topic sentence has several important functions: it substantiates or supports an essay’s thesis statement; it unifies the content of a paragraph and directs the order of the sentences; and it advises the reader of the subject to be discussed and how the paragraph will discuss it. Readers generally look to the first few sentences in a paragraph to determine the subject and perspective of the paragraph.
                    </p>
                </div>
                <div className="c">
                    <p >
                        A well-organized paragraph supports or develops a single controlling idea, which is expressed in a sentence called the topic sentence. A topic sentence has several important functions.
                    </p>
                </div><br />
                <div className="c">
                    <h1 >Popular services near you</h1>
                </div>
                <div className="row">
                    <div class="column">
                        <div class="card">
                            <img src={Image} alt="Cardimage" style={{ height: "10%" }} />
                            <div class="card-body">
                                <p class="card-text" >some example text.</p>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="card">
                            <img src={Image} alt="Cardimage" style={{ height: "10%" }} />
                            <div class="card-body">
                                <p class="card-text" >some example text.</p>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="card">
                            <img src={Image} alt="Cardimage" style={{ height: "10%" }} />
                            <div class="card-body">
                                <p class="card-text" >some example text.</p>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="card">
                            <img src={Image} alt="Cardimage" style={{ height: "10%" }} />
                            <div class="card-body">
                                <p class="card-text" >some example text.</p>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="card">
                            <img src={Image} alt="Cardimage" style={{ height: "10%" }} />
                            <div class="card-body">
                                <p class="card-text" >some example text.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SuperCharge
