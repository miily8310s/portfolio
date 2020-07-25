import React from "react"

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
