import React from 'react';

const Footer = () =>{
    let footerStyle={
        width:"100%",
        height:"70px",
        backgroundColor:"black",
        color:"white",

    }
    return(
        <div style={footerStyle}>
            <div className="py-3">
                <p className="text-center">My footer</p>
            </div>
        </div>
    )
}

export default Footer;