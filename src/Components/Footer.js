import React from 'react'
// import PropTypes from 'prop-types'

const Footer = props => {
    let myStyle = {
        position: 'relative',
        right: '0',
        bottom: '0',
        left: '0'
        
    }
    
  return (
    <footer className=" d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border bg-light text-white"style={myStyle} >
    <div className="container ">
    <p className="text-white col-md-4 mb-0 text-body-secondary ">© 2023 Company, Inc</p>
    </div>
    
  </footer>
  )
}



export default Footer
