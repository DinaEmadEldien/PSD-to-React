import React from "react";
import './first.css';



export default class First extends React.Component {

    constructor() {
        super()
    }

    render() {
        return (
            <>
                <div className="head" style={{padding:"20%"}}>
                    <div style={{textAlign:"left"}}>
                        <h1 style={{color:"white"}}>Dina Emad Elden</h1>
                        <h3 style={{color:"gray"}}>Web Developer</h3>
                        <button className="btn btn-outline-secondary">CONTACT ME</button>
                    </div>
                </div>

            </>
        )
    }
}