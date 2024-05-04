import '../App.css'
import React, { useContext } from 'react';

function Header({children}) {


  return (
      <div className={`headernew `}>
        {children}
      </div>

    
  )
}

export default Header
