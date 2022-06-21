import React from "react";

export default class About extends React.Component {

    constructor() {
        super()
    }

    render() {
        return (
            <>
                <div className="row" style={{margin: "50px"}}>
                    <div className="col-lg-4">
                        <h2>About Me</h2>

                    </div>
                    <div className="col-lg-8">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br/> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                        laborum.</p>
                    <button className="btn btn-dark">Download Resume</button>


                    </div>
                </div>

            </>
        )
    }
}