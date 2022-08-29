import React from "react";
import github from "../../utils/images/githubicon.png"
import linkedin from "../../utils/images/linkedin.png"
import leetcode from "../../utils/images/leetcode.png"
import "./index.css";


function Footer() {
    return(
        <footer>
            <a href="https://github.com/DanielCConlon" target="_blank" rel="noreferrer">
                <img src={github} alt="github pic" />
            </a>

            <a href="https://www.linkedin.com/in/daniel-conlon/" target="_blank" rel="noreferrer">
                <img src={linkedin} alt="linkedin pic" />
            </a>

            <a href="https://leetcode.com/danielcconlon/" target="_blank" rel="noreferrer">
                <img src={leetcode} alt="linkedin pic" />
            </a>
        </footer>
    );
}

export default Footer;