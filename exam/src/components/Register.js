import React, { Component } from 'react';
import Logo from './logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import {withRouter} from 'react-router-dom';
import axios from 'axios';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            MSSV : 0,
            password : ''
        }
    }

    submit(){
        // lấy giá trị của 2 trường input 
        let MSSV = document.getElementById('inputEmail').value;
        let password = document.getElementById('inputPassword').value;

        // set value cho state 
        this.setState({
            MSSV : MSSV,
            password : password
        });
        console.log(this.state.MSSV, this.state.password);
        axios.post('http://localhost:3000/users/authenticate', {
            email : "thinh123@abc.com",
            password : 123456
        }).then( res => {
            console.log(res.data);
            this.props.history.push('/home');  
        }).catch(err => {
            console.log(err);
        })
    }
    render() {
        return (
            <div>
                <div>
                    <style dangerouslySetInnerHTML={{ __html: "\n    #container {\n        position: relative;\n        background: white;\n    }\n    .tt {\n      transform: translate(-50%,-50%);\n      -webkit-transform: translate(-50%,-50%);\n      -moz-transform: translate(-50%,-50%);\n      -o-transform: translate(-50%,-50%);\n      -ms-transform: translate(-50%,-50%);\n    }\n    .ttx {\n      transform: translateX(-50%); \n      -webkit-transform: translateX(-50%); \n      -moz-transform: translateX(-50%); \n      -o-transform: translateX(-50%); \n      -ms-transform: translateX(-50%); }\n\n    .card-signin {\n      position: absolute;\n      left: 50%;\n      top: 50%;\n      width: 20rem;\n      border-radius: 1rem;\n      box-shadow: 0 0.5rem 1rem 0 #72a1b3;\n    }\n\n    .card-signin .card-title {\n      margin-bottom: 2rem;\n      font-weight: 300;\n      font-size: 1.5rem;\n    }\n\n    .card-signin .card-body {\n      text-align: center;\n      padding: 2rem;\n    }\n\n    .form-label-group {\n      position: relative;\n      margin-bottom: 1rem;\n    }\n\n    .form-label-group input {\n      height: auto;\n      border-radius: 2rem;\n    }\n\n      " }} />
                </div>
                <div>
                    <div className="card-signin tt">
                        <div className="card-body">
                            <img src={Logo} />
                            <h5 className="card-title text-center">Sign Up</h5>
                            <form className="form-signin">
                                <div className="form-label-group">
                                    <input type="email" id="inputEmail" className="form-control" placeholder="MSSV" required autoFocus />
                                </div>
                                <div className="form-label-group">
                                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                                </div>
                                <button id="hello" type="button" className="btn btn-outline-primary" style={{ borderRadius: '1rem' }} onClick={() => this.submit()}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Register);