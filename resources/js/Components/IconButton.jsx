import React from 'react'

const IconButton = ({ children, onclick = () => {}, link = '', classname = '', name = '' }) => {

  classname = `iconbutton notification-btn flex justify-center items-center w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] rounded-full relative ${classname}`;
  
  return (
    link == '' ?
    <button onClick={onclick} className={classname} style={{'--name': `"${name}"`}}>
        {children}
    </button> 
    :
    <a onClick={onclick} href={link} className={classname}>
        {children}
    </a> 

  )
}

export default IconButton