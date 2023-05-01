import React from 'react'
import {useEffect, useState} from 'react'
import IconButton from '@/Components/IconButton'
import {IoCloseOutline} from 'react-icons/all'


const ModalBox = ({ state = false, closeCallback,  classname, children, ...rest }) => {
    
  return (
    <div className={`fixed h-screen w-screen bg-black bg-opacity-20 top-0 left-0 z-90 justify-center items-center ${state? 'flex' : 'hidden'}`}>
        <div className={`bg-white w-[500px] min-h-[20vh] rounded relative ${classname}`} {...rest}>
            <IconButton classname={`bg-red-400 text-2xl text-white absolute top-[-15px] right-[-15px]`} onClick = {closeCallback}>
                <IoCloseOutline />
            </IconButton>

            {children}
        </div>
    </div>
  )
}

export default ModalBox