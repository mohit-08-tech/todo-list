import React from 'react'

export const Footer = () => {

    let footerCss = {
        width: "100%",
        position:"relative",
        top:"80vh",
        bottom:"0"
    }

    return (
        <div className="bg-dark text-light py-2" style={footerCss}>
           <p className='text-center'>Mytodo List</p>
        </div>
    )
}
