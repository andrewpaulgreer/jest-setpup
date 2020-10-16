import React from 'react'
import './styles.scss'

function Header() {
    return (
       <header data-test="headerComponent">
           <div className="wrap">
               <div className="logo">
                   <h1 className="logo-text" data-test="logo">LOGO</h1>
               </div>
           </div>
       </header>
    )
}

export default Header
