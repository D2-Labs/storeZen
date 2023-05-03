import React from 'react'

const IconButton = ({ children, link = '', classname = '', name = '', ...rest }) => {

  classname = `iconbutton notification-btn flex justify-center items-center w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] rounded-full ${classname}`;
  
  return (
    link == '' ?
    <button className={classname} style={{'--name': `"${name}"`}} {...rest}>
        {children}
    </button> 
    :
    <a href={link} className={classname} {...rest}>
        {children}
    </a> 

  )
}

export default IconButton