import React from 'react'
import "../styles/Footer.css"


const Footer = () => {
  return (
    <div className="footer">
    <div className="footer-copyright text-center py-3">
      <h5>
        &copy; {new Date().getFullYear()} Copyright: Made By Subramanian Anand
      </h5>
    </div>
  </div>
  )
}

export default Footer