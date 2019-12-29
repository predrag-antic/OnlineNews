import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import { createBrowserHistory } from 'history';

class NavigationBar extends React.Component{

    constructor(){
        super();
        this.state={

         }
    }

    handleLogout = () => {
        localStorage.clear();
        window.location.reload(true);
    }

    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{fontSize:'20px'}}>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                    <div className="container collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item ml-3">
                            <Link to="/home" style={{color: '#ffffff', textDecoration: 'none'}}>
                                Home
                            </Link> 
                        </li>
                        <li className="nav-item ml-3">
                            <Link to="/tag/sport" style={{color: '#ffffff', textDecoration: 'none'}}>
                                Sport
                            </Link> 
                        </li>
                        <li className="nav-item ml-3">
                            <Link to="/tag/politika" style={{color: '#ffffff', textDecoration: 'none'}}>
                                Politika
                            </Link> 
                        </li>
                            {
                                (localStorage.getItem('username') && (localStorage.getItem('isJournalist')==='true'))?
                                <li className="nav-item ml-3">
                                    <Link to="/create-novelty" style={{color: '#ffffff', textDecoration: 'none'}}>
                                        Create-Novelty
                                    </Link>
                                </li>
                                :
                                null
                            }
                            {
                            localStorage.getItem('username')?
                            <li className="nav-item ml-3">
                                <div onClick={this.handleLogout} className="btn btn-primary">
                                    Logout
                                </div>
                            </li>
                            :
                            null
                            }
                            {
                                !localStorage.getItem('username')?
                                <li className="nav-item ml-3">
                                    <Link to="/login" style={{color: '#ffffff', textDecoration: 'none'}}>
                                        Login
                                    </Link>
                                </li>
                                :
                                null
                            }
                            {
                                !localStorage.getItem('username')?
                                <li className="nav-item ml-3">
                                    <Link to="/register" style={{color: '#ffffff', textDecoration: 'none'}}>
                                        Register
                                    </Link>
                                </li>
                                :
                                null
                            }
                            </ul>
                    </div>
            </nav>
        )
    }
}

function mapStateToProps (state) {
    return {
        loginSuccess: state.user.loginSuccess
    }
}

export default connect(mapStateToProps,null)(NavigationBar);