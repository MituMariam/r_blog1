import React from 'react'
import Logo from "../img/logo.png"

const Footer = () => {
  return (
    <footer>
       <img src={Logo} alt="" />
       <span> Made with  &#x2764; and <b>React.js</b> </span>
       {/* <span>❤</span> */}
    </footer>
  )
}

export default Footer