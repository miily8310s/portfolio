import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons"

let today = new Date()
let year = today.getFullYear()

export default () => {
  return (
    <footer className="text-center text-white bg-green-500 p-6">
      <p>&#064;miruo's portfolio {year}</p>
      <span>made by Gatsby.js</span>
    </footer>
  )
}
