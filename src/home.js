import React from 'react'
import background from './1.jpg'
export default function Home() {
    let mainStyle = {
        height: "500px",
        width: "100%",
        backgroundImage: `url(${background})`,
        backgroundSize:"cover",
        

    }
    let homeStyle =
    {
        fontSize: "50px",
        color: "white",
        textShadow:"0 0 10px black",
        display:"flex",
        justifyContent:"center",
        alignItem:"center"
    }

    return (
        <div style={mainStyle}>
            <p className="text-center" style={homeStyle}>
                Welcome To Our Home Page
            </p>
            <p className="text-center">
                
            </p>

        </div>
    )
}
