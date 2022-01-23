import React from "react";

function Footer (){
    return (
        <div className="container">
        <footer className="bg-dark text-center text-white">
            {/*<!-- Grid container -->*/}
            <div className="container p-4 pb-0" style = {{top:"100px"}}>
                {/*<!-- Section: Social media -->*/}
                <section className="mb-4">
                {/*<!-- Facebook -->*/}
                <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/thamalinirmala.nirmala.3" role="button" target = "_blank"><i className="fa fa-facebook" aria-hidden="true" style = {{marginTop:"10px"}}></i></a>

                {/*<!-- Google -->*/}
                <a className="btn btn-outline-light btn-floating m-1" href="https://www.google.com/" role="button" target = "_blank"><i className="fa fa-google" aria-hidden="true" style = {{marginTop:"10px"}}></i></a>

                {/*<!-- Instagram -->*/}
                <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/__thamali_nirmala__/" role="button" target = "_blank"><i className="fa fa-instagram" aria-hidden="true" style = {{marginTop:"10px"}}></i></a>

                {/*<!-- Linkedin -->*/}
                <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/thamali-nirmala" role="button" target = "_blank" ><i className="fa fa-linkedin" aria-hidden="true" style = {{marginTop:"10px"}}></i></a>

                {/*<!-- Github -->*/}
                <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/ThamaliNirmala" role="button" target = "_blank"><i className="fa fa-github" aria-hidden="true" style = {{marginTop:"10px"}}></i></a>
                </section>
                {/*<!-- Section: Social media -->*/}
            </div>
            {/*<!-- Grid container -->*/}

            {/*<!-- Copyright -->*/}
            <div className="text-center p-3" style={{backgroundcolor: "rgba(0, 0, 0, 0.2)"}}>
                © 2021 Copyright: 
                <a className="text-white" href="#" style = {{textDecoration:"none"}}> Studio-600D</a>
                
            </div>
            {/*<!-- Copyright -->*/}
        </footer>
    </div>
    );
}

export default Footer;