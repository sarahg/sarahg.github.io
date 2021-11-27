import React from "react"
import { Link } from "gatsby"

function headerText(props) {
    return <h1><Link to="https://sarahgerman.com">{props.headerText}</Link></h1>
}

export default headerText