import React from "react"
import ProfilePic from '../images/Profile.jpeg'

export default function Info() {
    return (
        <div>
            <information>
                <img src={ProfilePic} className="info--picture"/>
                <h1 className="info--name">Joshua Van Drie</h1>
                <h2 className="info--title"> Frontend Developer</h2>
            </information>
            <connect>
                <button className="info--button_email">Email</button>
                <button className="info--button_LinkedIn"onClick={()=> window.open("https://www.linkedin.com/in/joshuavandrie/", "_blank")}>Linkedin</button>
            </connect>
        </div>
    )
}

