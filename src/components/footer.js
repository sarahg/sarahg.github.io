import React from "react"
import DrupalLogo from "../assets/drupalassoc.png"

function Footer() {
    return <div>
        <div id="stripe"></div>
        <div id="footer">
        <img src={DrupalLogo} alt="Drupal Association logo" title="Drupal Association member" />
        <ul id="social">
            <li><a href="https://www.drupal.org/user/562544">Drupal</a></li>
            <li><a href="https://github.com/sarahg">GitHub</a></li>
            <li><a href="https://instagram.com/heygermano">Instagram</a></li>
            <li><a href="https://www.last.fm/user/hey_germano">Last.fm</a></li>
            <li><a href="https://www.linkedin.com/in/sarahgerman">LinkedIn</a></li>
            <li><a href="https://twitter.com/hey_germano">Twitter</a></li>
        </ul>
        </div>
    </div>
}

export default Footer
