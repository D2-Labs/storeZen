import React from 'react'
import { useState } from 'react'

import {IoChevronDownOutline} from 'react-icons/all'

import Clickable from '@/Components/Clickable'


const ItemBoughtCard = ({name = 'Omaya 3330 smooth and', price = '200'}) => {
    const [dropdownState, setDropdownState] = useState(false);

  return (
    <div className="item-bought bg-light-blue w-full my-1">
        <div className="top flex items-center shadow bg-white p-1 pointer" onClick={() => setDropdownState(!dropdownState)}>
            <div className="item-image h-[60px] w-[60px]">
                <img src="/images/bag.jpg" alt="product image" className='h-full w-full object-contain'/>
            </div>
            <div className="item-name flex items-center">
                <span className='font-bold px-1'>{name}</span>
                <IoChevronDownOutline/>
            </div>

        </div>

        <div className={`w-full transition-all  overflow-hidden shadow bg-gray-100 ${dropdownState? 'h-max p-2' : 'h-0 p-0'}`}>

            <div className="flex items-center justify-between w-full">
                <div className='w-1/2'>
                    <span>Price({price})</span> <br />
                    <input type="tel" name='sell-price' className='w-[90%] h-[30px] border-none rounded shadow'/>
                </div>

                <div className='w-1/2 flex flex-col items-end'>
                    <span className='w-[90%]'>Quantity</span> <br />
                    <input type="number" name='sell-price' className='w-[90%] h-[30px] border-none rounded shadow'/>
                </div>
            </div>

            <div className="flex justify-between items-center mt-3">
                <div>
                    <small className='text-xs py-[1px]'>Sub-Total</small> <br />
                    <span>Ghc 340</span>
                </div>
                
                <Clickable className='bg-red-400 text-white rounded px-2 py-[5px]'>Remove Item</Clickable>
            </div>


        </div>

    </div>
  )
}

export default ItemBoughtCard