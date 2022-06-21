import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';

export default class Skills extends React.Component {

    constructor() {
        super()
    }

    render() {
        return (
            <>
                <div style={{ backgroundColor: "#333", textAlign: "center", color: "white", padding: "5%" }}>
                    <h2>Skills</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br /> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                        laborum.</p><br/><br/><br/>

                    <div className="row">
                        <div className="col-lg-6">
                            <h3>MY FOCUS</h3><hr />
                            <p>UI/UX DESIGN</p><br />
                            <p>RESPONSIVE DESIGN</p><br />
                            <p>WEB DESIGN</p><br />
                            <p>MOBILE APP DESIGN</p><br />
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-4">
                                    <h3>HTML</h3>
                                </div>
                                <div className="col-lg-8">
                                    <ProgressBar variant="success" now={90} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <h3>CSS</h3>
                                </div>
                                <div className="col-lg-8">
                                    <ProgressBar variant="success" now={80} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <h3>JS</h3>
                                </div>
                                <div className="col-lg-8">
                                    <ProgressBar variant="success" now={60} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <h3>React</h3>
                                </div>
                                <div className="col-lg-8">
                                    <ProgressBar variant="success" now={50} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <h3>Photoshop</h3>
                                </div>
                                <div className="col-lg-8">
                                    <ProgressBar variant="success" now={65} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <h3>Node JS</h3>
                                </div>
                                <div className="col-lg-8">
                                    <ProgressBar variant="success" now={50} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <h3>Wordpress</h3>
                                </div>
                                <div className="col-lg-8">
                                    <ProgressBar variant="success" now={80} />
                                </div>
                            </div>





                        </div>


                    </div>
                </div>

            </>
        )
    }
}