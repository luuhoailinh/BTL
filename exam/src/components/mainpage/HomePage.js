import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './logo.png';
import User from './user.png';

class HomePage extends Component {
    render(){
        return(
            <div>
                <div>
                    <style dangerouslySetInnerHTML={{__html: "\n    body {\n      font-family: 'Merriweather', serif;\n    }\n    .text1{\n      font-size: 35px;\n      color: black;\n      margin: 10px;\n    }\n   /* h6{\n      margin-bottom:0px; \n    }*/\n    .text2{\n      font-size: 20px;\n      /*margin: 5px;*/\n    }\n    .profile {\n      margin-left: 5px;\n    }\n    header{\n      margin-bottom: 40px;\n    }\n    section{\n      text-align: center;\n    }\n    .form-check, .nameTable, td, th{\n      text-align: center;\n    }\n    table{\n      margin-top: 5%;\n    }\n  " }} />
                </div>

                <div>
                    <header>
                        <nav className="navbar navbar-light bg-light">
                            <a className="navbar-brand" href="#">
                                <img src={Logo} height={130} className="d-inline-block align-top" />
                            </a>
                            <p className="text1">Đăng ký lịch thi - Trường Đại học Công nghệ</p>
                            <a href="#" className="profile">
                                <img src={User} width={50} height={50} />
                                <h6>Xin chào: 17021284</h6>
                            </a>
                        </nav>
                    </header>
                    
                    <section> 
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-3 other">
                                    <p className="text2">Mã lớp học phần</p>         
                                </div>
                                <div className="col-sm-6 other2">           
                                    <select className="form-control" id="exampleFormControlSelect1">
                                        <option> </option>
                                        <option>INT1004</option>
                                        <option>INT1872</option>
                                        <option>INT4733</option>
                                        <option>INT0014</option>
                                        <option>INT7565</option>
                                    </select>   
                                </div>          
                            </div>
                        </div>
                    </section>
                </div>

                <div>
                    <table className="table table-bordered">
                        <thead className="thead-dark">
                        <tr>
                            <th scope="col" className="nameTable" width="3%">STT</th>
                            <th scope="col" className="nameTable" width="25%">Mã học phần</th>
                            <th scope="col" className="nameTable" width="30%">Lịch thi</th>
                            <th scope="col" className="nameTable" width="10%">Tick</th>
                            <th scope="col" className="nameTable" width="20%">Số lượng</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td />
                            <td />
                            <td rowSpan={1}>
                            <div className="form-check">
                                <input className="form-check-input position-static" type="checkbox" id="blankCheckbox" defaultValue="option1" aria-label="..." />
                            </div>
                            </td>
                            <td />
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td />
                            <td />
                            <td>
                            <div className="form-check">
                                <input className="form-check-input position-static" type="checkbox" id="blankCheckbox" defaultValue="option1" aria-label="..." />
                            </div>
                            </td>
                            <td />
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td />
                            <td />
                            <td>
                            <div className="form-check">
                                <input className="form-check-input position-static" type="checkbox" id="blankCheckbox" defaultValue="option1" aria-label="..." />
                            </div>
                            </td>
                            <td />
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default withRouter(HomePage);