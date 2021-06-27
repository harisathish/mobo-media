import React, { Component } from 'react'
import swal from 'sweetalert';

export default class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '', nameError: '',
            surname: '', surnameError: '',
            email: '', emailError: '',
            phone: '', phoneError: '',
            subject: '', subjectError: '',
            message: '', messageError: '',
            captcha: '', captchaError: ''
        }
    }

    changeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
    }

    SubmitHandler = e => {
        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            swal({
                title: "Done!",
                text: "Your data successfully saved..",
                icon: "success",
                timer: 2000,
                button: false
            })
            this.setState({
                name: '', nameError: '',
                surname: '', surnameError: '',
                email: '', emailError: '',
                phone: '', phoneError: '',
                subject: '', subjectError: '',
                message: '', messageError: '',
                captcha: '', captchaError: ''
            })
        }
    }

    validate = () => {

        let nameError = ''; let surnameError = ''; let emailError = ''; let phoneError = '';
        let subjectError = ''; let messageError = ''; let captchaError = ''; let formIsValid = true;

        if (!this.state.name) {
            formIsValid = false;
            nameError = "First Name can't be blank";
        }

        if (this.state.name) {

            var regName = /^[a-zA-Z]+$/;
            if (!regName.test(this.state.name)) {
                formIsValid = false;

                nameError = "Enter valid First Name"
            }
        }

        if (!this.state.surname) {
            formIsValid = false;
            surnameError = "Surname can't be blank";
        }

        if (this.state.surname) {

            var regName1 = /^[a-zA-Z]+$/;
            if (!regName1.test(this.state.surname)) {
                formIsValid = false;

                surnameError = "Enter valid Surname"
            }
        }

        if (!this.state.email) {
            formIsValid = false;
            emailError = "Email can't be blank";

        }

        if (this.state.email) {

            var EmailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!EmailReg.test(this.state.email)) {
                formIsValid = false;

                emailError = "Enter valid Email Address"

            }

        }

        if (!this.state.phone) {
            formIsValid = false;
            phoneError = "Phone number can't be blank";

        }

        if (this.state.phone) {

            if (this.state.phone.length < 10 || this.state.phone.length > 10) {

                formIsValid = false;

                phoneError = "Phone number must be exactly 10 digits"
            }
            else {
                phoneError = null;
            }
        }

        if (!this.state.subject) {
            formIsValid = false;
            subjectError = "Subject can't be blank";

        }

        if (!this.state.message) {
            formIsValid = false;
            messageError = "Message can't be blank";

        }

        if (nameError) {

            this.setState({ nameError })

        }
        if (!nameError) {

            this.setState({ nameError })

        }

        if (surnameError) {

            this.setState({ surnameError })

        }
        if (!surnameError) {

            this.setState({ surnameError })

        }

        if (!emailError) {

            this.setState({ emailError })

        }
        if (emailError) {

            this.setState({ emailError })

        }
        if (phoneError) {


            this.setState({ phoneError })

        }
        if (!phoneError) {


            this.setState({ phoneError })
        }

        if (subjectError) {


            this.setState({ subjectError })

        }
        if (!subjectError) {


            this.setState({ subjectError })
        }

        if (messageError) {


            this.setState({ messageError })

        }
        if (!messageError) {


            this.setState({ messageError })
        }

        return formIsValid;

    }

    render() {
        const { name, nameError, surname, surnameError, email, emailError, phone, phoneError, subject, subjectError, message, messageError, captcha, captchaError } = this.state;
        return (
            <div className="container justify-content-center">
                <div className="card-header" style={{ backgroundColor: "#DDDDE7", marginTop: "20px", borderRadius: "25px" }}>
                    <form onSubmit={this.SubmitHandler} autoComplete="off">
                        <div className="row justify-content-center">
                            <h3 className="mb-4">REGISTRATION FORM</h3>
                        </div>
                        <div className="form-group row center">
                            <div className="col-md-5 ml-3 mt-2">
                                <label htmlFor="ex1" style={{ float: "left" }}><b> Your Name</b> <i className="fa fa-user"></i> <b><span style={{ color: "#D93025" }} className="required" >*</span></b></label>
                                <input autoComplete="none" ref={(input) => { this.nameInput = input; }} className="form-control" value={name} name="name" type="text" placeholder="Enter your first name" onChange={this.changeHandler} />
                                <span style={{ color: "#D93025", float: "left" }}>{nameError}</span>
                            </div>
                            <div className="col-md-5 ml-3 mt-2">
                                <label htmlFor="ex1" style={{ float: "left" }}><b> Your Surname</b> <i className="fa fa-user"></i> <b><span style={{ color: "#D93025" }} className="required" >*</span></b></label>
                                <input autoComplete="none" className="form-control" value={surname} name="surname" type="text" placeholder="Enter your surname" onChange={this.changeHandler} />
                                <span style={{ color: "#D93025", float: "left" }}>{surnameError}</span>
                            </div>
                        </div>

                        <div className="form-group row center">
                            <div className="col-md-5 ml-3 mt-2">
                                <label htmlFor="ex1" style={{ float: "left" }}><b> Your Email</b> <i className="fa fa-envelope"></i> <b><span style={{ color: "#D93025" }} className="required" >*</span></b></label>
                                <input autoComplete="none" className="form-control" value={email} name="email" type="text" placeholder="Enter your email address" onChange={this.changeHandler} />
                                <span style={{ color: "#D93025", float: "left" }}>{emailError}</span>
                            </div>
                            <div className="col-md-5 ml-3 mt-2">
                                <label htmlFor="ex2" style={{ float: "left" }}><b>Your Phone No.</b> <i className="fa fa-phone"></i> <b><span style={{ color: "#D93025" }} className="required" >*</span></b></label>
                                <input autoComplete="none" ref={(input) => { this.phoneInput = input; }} className="form-control" value={phone} name="phone" type="number" placeholder="Enter your contact number" onChange={this.changeHandler} />
                                <span style={{ color: "#D93025", float: "left" }}>{phoneError}</span>
                            </div>
                        </div>
                        <div className="form-group row center">
                            <div className="col-md-10 ml-3 mt-2">
                                <label htmlFor="ex1" style={{ float: "left" }}><b> Your Subject</b> <i className="fa fa-envelope"></i> <b><span style={{ color: "#D93025" }} className="required" >*</span></b></label>
                                <input autoComplete="none" className="form-control" value={subject} name="subject" type="text" placeholder="Enter your subject" onChange={this.changeHandler} />
                                <span style={{ color: "#D93025", float: "left" }}>{subjectError}</span>
                            </div>
                        </div>
                        <div className="form-group row center">
                            <div className="col-md-10 ml-3 mt-2">
                                <label htmlFor="ex1" style={{ float: "left" }}><b> Your Message</b> <i className="fa fa-comment"></i> <b><span style={{ color: "#D93025" }} className="required" >*</span></b></label>
                                <textarea style={{ height: "125px" }} autoComplete="none" className="form-control" value={message} name="message" type="text" placeholder="Please enter your message" onChange={this.changeHandler} />
                                <span style={{ color: "#D93025", float: "left" }}>{messageError}</span>
                            </div>
                        </div>
                        <div className="btn-toolbar" style={{ marginLeft: "20px" }}>
                            <button type="submit" style={{ borderRadius: "10px" }} className="btn btn-dark">Send message</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
