import React from "react";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";







export default class Footer extends React.Component {

    constructor() {
        super()
    }

    render() {
        return (
            <>
                <div className="row" style={{ backgroundColor: "black", color: "white", padding: "3%" }}>
                    <div className="col-lg-4">
                        <h3>GET IN TOUCH</h3>
                        <p><FontAwesomeIcon icon={faCoffee}/> dina@gmail.com</p>

                    </div>
                    <div className="col-lg-4">
                        <button className="btn btn-outline-secondary">CONTACT US</button>

                    </div>
                    <div className="col-lg-4"  >
                        <a><FaTwitter/> </a>
                        <a><FaLinkedin /> </a>
                        <a><FaFacebook /> </a>
                        <p>CopyRight@2019</p>

                    </div>
                </div>

            </>
        )
    }
}