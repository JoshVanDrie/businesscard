import React from "react"
import GitHub from '../images/IconGitHub.png'
import Insta from '../images/IconInstagram.png'
import Twitter from '../images/IconTwitter.png'

export default function Footer(){
    return (
        <footer>
            <a href="https://github.com/JoshVanDrie">
                <img src={GitHub} className="footer--icon"/>
            </a>

            <a href="https://www.instagram.com/josh.van.drie">
                <img src={Insta} className="footer--icon"/>
            </a>
            <a href="https://twitter.com/MiniVanDrie">
                <img src={Twitter} className="footer--icon"/>
            </a>
        </footer>
    )
}