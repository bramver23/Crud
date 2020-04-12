import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import getData from "./getData";
import postData from "./postData";
import putData2 from "./putData2";
import logo from "../logo.png";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-expand-lg  navbar-dark" >
                        <a className="navbar-brand"><img src={logo} /></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <div className="nav-item nav-link active"> <Link to="/">GET</Link></div>
                                <div className="nav-item nav-link">        <Link to="/post">POST </Link></div>
                                <div className="nav-item nav-link">        <Link to="/put">PUT</Link></div>
                            </div>
                        </div>

                    </nav>
                    <Route exact path="/" component={getData} />
                    <Route path="/post" component={postData} />
                    <Route path="/put" component={putData2} />
                </div>
            </Router>
        );
    }
}

export default Header;