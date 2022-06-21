import React from "react";

export default class Portfolio extends React.Component {

    constructor() {
        super()
    }

    render() {
        return (
            <>
            
                <div className="row" style={{margin:"5%",color:"white"}}>
                    <h1 style={{color:"black"}}>Portfolio</h1>
                    <div className="col-lg-3" style={{border: "3px solid black",backgroundColor:"#777",textAlign:"center",padding:"30px",margin:"5px"}}>
                        <h2>WEB<br/> DESIGN</h2>
                    </div>
                    <div className="col-lg-3" style={{border: "3px solid black",backgroundColor:"#333",textAlign:"center",padding:"30px",margin:"5px"}}>
                        <h2>MOBILE<br/> DESIGN</h2>
                    </div>
                    <div className="col-lg-3" style={{border: "3px solid black",backgroundColor:"#777",textAlign:"center",padding:"30px",margin:"5px"}}>
                        <h2>LOGO<br/> DESIGN</h2>
                    </div>
                    

                    <div className="col-lg-3" style={{border: "3px solid black",backgroundColor:"#333",textAlign:"center",padding:"30px",margin:"5px"}}>
                        <h2>WEB APPLICATION<br/> DEVELOPMENT</h2>
                    </div>
                    <div className="col-lg-3" style={{border: "3px solid black",backgroundColor:"#777",textAlign:"center",padding:"30px",margin:"5px"}}>
                        <h2>MOBILE APPLICATION<br/> DEVELOPMENT</h2>
                    </div>
                    <div className="col-lg-3" style={{border: "3px solid black",backgroundColor:"#333",textAlign:"center",padding:"30px",margin:"5px"}}>
                        <h2>PWA<br/> DEVELOPMENT</h2>
                    </div>

                    
        

                </div>
            </>
        )
    }
}