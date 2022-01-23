import React from "react";
import {Link} from "react-router-dom";
import Footer from "./Footer";
import './Header.css'

const Header = () =>{

    var m_names = new Array("January", "February", "March", 
                "April", "May", "June", "July",
                "August", "September", 
                "October", "November", "December");

    var today = new Date();
    var curr_date = today.getDate();
    var curr_month = today.getMonth();
    var curr_year = today.getFullYear();

    today = m_names[curr_month] + " " + curr_date + "/ " + curr_year;

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
                            <a className="nav-link" href="#"><i class="fa fa-home" aria-hidden="true"></i> Home </a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#"><i class="fa fa-plus-circle" aria-hidden="true"></i> Add Recipe</a>
                            </li>               
                        </ul>
                        </div>
                    </nav>
                    </div>
                </div>
                </div>  
            </header>
            <div class="card">
                <div class="card-header">
                </div>
            </div><br/>

            <section>
                <nav className="nav">
                    <ul className="ul">
                        <center>
                            <li className="li"><a class="active" href="#home">Home</a></li>
                            <li className="li"><a href="#news"> Add Recipe </a></li>
                           
                        </center>
                     </ul>
                </nav>

                <article>
                    <div className="card">
                        <div className="card-header">
                            Featured <i class="fa fa-bookmark-o" aria-hidden="true"></i>
                        </div>
                        <div className="card-body">
                            <center>
                                <h5 className="card-title">The Most Popular Food Recipe 🥘🥂</h5><br/>
                                <div class="row">
                                    <div class="col-lg-4 col-md-6">
                                        <div class="card">
                                            <div class="view overlay">
                                                <img src="https://i.ibb.co/PQBfJzf/Hyderabadi-chicken-Biryani.jpg" class="card-img-top" alt=""/>
                                                <a href="#">
                                                <div class="mask rgba-white-slight"></div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="card">
                                            <div class="view overlay">
                                                <img src="https://i.ibb.co/xGsVPwJ/200730-Soy-Sauce-Noodles-550.jpg" class="card-img-top" alt=""/>
                                                <a href="#">
                                                <div class="mask rgba-white-slight"></div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="card">
                                            <div class="view overlay">
                                                <img src="https://i.ibb.co/m4w5Lnb/ECk-S2-MDWw-AA86mv.jpg"  class="card-img-top" alt=""/>
                                                <a href="#">
                                                <div class="mask rgba-white-slight"></div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div><br/><br/>
                                <div class="row">
                                    <div class="col-lg-4 col-md-6">
                                        <div class="card">
                                            <div class="view overlay">
                                                <img src="https://i.ibb.co/kJyf70J/Chicken-Fried-Rice-square-FS.jpg" class="card-img-top" alt=""/>
                                                <a href="#">
                                                <div class="mask rgba-white-slight"></div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="card">
                                            <div class="view overlay">
                                                <img src="https://i.ibb.co/tHQyfj8/hakka-noodles-recipe.jpg" class="card-img-top" alt=""/>
                                                <a href="#">
                                                <div class="mask rgba-white-slight"></div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="card">
                                            <div class="view overlay">
                                                <img src="https://i.ibb.co/jzXHdCy/Chicken-Rice-Casserole-8.jpg"  class="card-img-top" alt=""/>
                                                <a href="#">
                                                <div class="mask rgba-white-slight"></div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </center>
                        </div>
                    </div>

                </article>
            </section>



        </div>
    )
}

export default Header; 