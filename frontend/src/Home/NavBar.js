import React from "react";
import {Link} from "react-router-dom";
import Footer from "./Footer";
import './Header.css';
import DisplayRecipie from "./DisplayRecipe";

const NavBar = () =>{

    var m_names = new Array("January", "February", "March", 
                "April", "May", "June", "July",
                "August", "September", 
                "October", "November", "December");

    var today = new Date();
    var curr_date = today.getDate();
    var curr_month = today.getMonth();
    var curr_year = today.getFullYear();

    today = m_names[curr_month] + " " + curr_date + "/ " + curr_year;
    const refresh = () => {
        //function for manually refresh page
        window.location.reload();
      };
    return(
        <div id="header">
            <div className="topbar">
                <div className="container">
                <div className="row">
                    <div className="col-sm-8">
                    <ul>
                        <li><i className="fa fa-volume-control-phone" aria-hidden="true"></i> 0770113437</li>
                        <li>|</li>
                        <li><a href="mailto:" target="_blank"><i className="fa fa-envelope-o" aria-hidden="true"></i>tnirmalaadasooriya@gmail.com</a></li>
                        <li>|</li>
                        <li><i className="fa fa-clock-o" aria-hidden="true"></i> 24/7 Hours Working</li>
                        <li><span style={{float:"right"}}>{today}</span></li>
                    </ul>
                    </div>
                    <div className="col-sm-4">
                    <ul className="social-icon">
                        <li className="followus-label">Follow Us:</li>
                        <li><a href="https://www.facebook.com/thamalinirmala.nirmala.3" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="https://bit.ly/3rZZMO6" target="_blank"><i className="fa fa-whatsapp" aria-hidden="true"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/thamali-nirmala" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            <header>
                <div className="container">
                <div className="row">
                    <div className="col-12">
                    <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="#"><img src="https://i.ibb.co/3RdbDQC/Food-Recipe-2.png"  alt="logo" style={{width:"73%"}} className="img-thumbnail"/></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbartoggle" aria-controls="navbartoggle" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbartoggle">
                        <ul className="navbar-nav float-right">
                            <li className="nav-item">
                            <Link to="/" className="nav-link"><i class="fa fa-home" aria-hidden="true"></i> Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/add" className="nav-link"><i class="fa fa-plus-square" aria-hidden="true"></i> Add Recipe</Link>
                            
                            </li>             
                        </ul>
                        </div>
                    </nav>
                    
                    </div>
                </div>
                </div>  
                
            </header>
            
            </div>
    )
}

export default NavBar; 