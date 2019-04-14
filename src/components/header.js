import React from "react"
import { Link } from "gatsby"

function headerText(props) {
    return <h1><Link to="/">{props.headerText}</Link></h1>
}

export default headerText