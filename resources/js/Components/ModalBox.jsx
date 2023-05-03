import React from 'react'
import {useEffect, useState} from 'react'
import IconButton from '@/Components/IconButton'
import {IoCloseOutline} from 'react-icons/all'


const ModalBox = ({ state = false, closeCallback,  classname, children, ...rest }) => {
    
  return (
    <div className={`fixed h-screen w-screen bg-black bg-opacity-20 top-0 left-0 z-50 justify-center items-center ${state? 'flex' : 'hidden'}`}>
        <div className={`bg-white min-w-[300px] min-h-[20vh] rounded relative ${classname}`} {...rest}>
            <IconButton classname={`bg-red-400 text-2xl text-white absolute top-[-5px] right-[-5px] z-10`} onClick = {closeCallback}>
                <IoCloseOutline />
            </IconButton>

            {children}
        </div>
    </div>
  )
}

export default ModalBox