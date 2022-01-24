import { useEffect } from "react";
import { Link , useParams} from "react-router-dom";
import Button from '@mui/material/Button';

const PrivateScreen = ({history} , props)=>{

  
    var m_names = new Array("January", "February", "March", 
    "April", "May", "June", "July",
    "August", "September", 
    "October", "November", "December");

    var today = new Date();
    var curr_date = today.getDate();
    var curr_month = today.getMonth();
    var curr_year = today.getFullYear();

    today = m_names[curr_month] + " " + curr_date + "/ " + curr_year;

     const { id , name } = useParams();
    return(
        <div id="header">
            <div className="topbar">
                <div className="container">
                <div className="row">
                    <div className="col-sm-8">
                    <ul>
                        <li><i className="fa fa-volume-control-phone" aria-hidden="true"></i> 0774087979</li>
                        <li>|</li>
                        <li><a href="mailto:" target="_blank" style = {{textDecoration: "none"}}><i className="fa fa-envelope-o" aria-hidden="true"></i>studio600d@gmail.com</a></li>
                        <li>|</li>
                        <li><i className="fa fa-clock-o" aria-hidden="true"></i> 24/7 Hours Working</li>
                        <li><span style={{float:"right"}}>{today}</span></li>
                    </ul>
                    </div>
                    <div className="col-sm-4">
                    <ul className="social-icon">
                        <li className="followus-label">Follow Us:</li>
                        <li><a href="https://www.facebook.com/studio600d" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="https://api.whatsapp.com/send?phone=94774087979&app=facebook&entry_point=page_cta" target="_blank"><i className="fa fa-whatsapp" aria-hidden="true"></i></a></li>
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
                    <a className="navbar-brand" href="#"><img src="https://i.ibb.co/D8BXSb1/Studio-600-D.png"  alt="logo" style={{width:"73%"}} className="img-thumbnail" title = "Studio-600D"/></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbartoggle" aria-controls="navbartoggle" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fa fa-bars" aria-hidden="true"></i><span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbartoggle">
                        <ul className="navbar-nav float-right">
                            <li className="nav-item">
                            <Link to = "/" className="nav-link "><img src="https://img.icons8.com/ios-glyphs/30/000000/film-reel--v1.png"/>  Home </Link>
                            </li>
                            <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Collection</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to="/kids"><i className="fa fa-check-circle-o" aria-hidden="true"></i> Kids Collection </Link>
                                <Link className="dropdown-item" to="/goingaway"><i className="fa fa-check-circle-o" aria-hidden="true"></i> HomeComming </Link>
                                <Link className="dropdown-item" to="/modelling"><i className="fa fa-check-circle-o" aria-hidden="true"></i> Modelling</Link>
                                <Link className="dropdown-item" to="/preshoot"><i className="fa fa-check-circle-o" aria-hidden="true"></i> Pre Shoot </Link>
                                <Link className="dropdown-item" to="/weddingshoot"><i className="fa fa-check-circle-o" aria-hidden="true"></i> Wedding Shoot </Link>
                            </div>
                            </li>   
                            <li className="nav-item active">
                            <Link to="#" className="nav-link">Admin</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/contact" className="nav-link">Contact Us</Link>
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
            
            <ul class=" nav-flex-icons" style={{float:"right" , listStyleType:"none"}}>
                <li class="nav-item avatar dropdown">
                <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-5" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">
                    <img src="https://i.ibb.co/XJrbVRh/kaun.jpg" class="rounded-circle z-depth-0 md-avatar" alt="avatar image"/>
                    <span>{name}</span>
                </a>
                <div class="dropdown-menu dropdown-menu-right dropdown-secondary" aria-labelledby="navbarDropdownMenuLink-5">
                    <a class="dropdown-item" href="#" onClick={logoutHandler}><i class="fa fa-sign-out" aria-hidden="true"></i> Logout</a>
                </div>
                </li>
            </ul>
        </div>
        </div>
        
            <hr class="my-4"></hr>
            <center>
                <h2 style = {{fontWeight:"normal"}}> The Most Wonderful Wedding Photography In The World.</h2>
            </center>
            <hr class="my-4"></hr>

            <section>
                <article className="article">
                    <center>
                        <div className="container" style={{width:"100%"}}>
                            
                        </div>
                    </center>
                </article>
            </section>
          
        </div>
    )
}


export default PrivateScreen;
