import React from 'react'
import {useState} from 'react'
import DashboardLayout from '@/Layouts/DashboardLayout'
import DateTimeSearch from '@/Components/DateTimeSearch'

import SalesMadeCard from '@/Components/SalesMadeCard'
import ModalBox from '@/Components/ModalBox'
import IconButton from '@/Components/IconButton'


import {IoChevronBackOutline, IoChevronForwardOutline, IoAddOutline, IoRemoveOutline} from 'react-icons/all'

let dummy_sales_made = [];
for(let i=0; i < 10; i++) {
    dummy_sales_made.push(`item_${i}`);
}

const SalesMade = () => {

  const [modalState, setModalState] = useState(true);

  return (
    <DashboardLayout>
        <div className="search-box sm:flex items-center p-5">
            <input type="checkbox" name="date_search" className='mx-2'/>
            <DateTimeSearch />
        </div>

        <div className="salesmade custom-grid-box p-2" style={{'--size': '300px'}}>

            {
                dummy_sales_made.map( card => <SalesMadeCard />)
            }

        </div>

        <div className="pagination-box flex justify-center mt-12" onClick={() => setModalState(true)}>

            <button className="pagination-left rounded w-[30px] h-[30px] flex items-center justify-center bg-white shadow mx-2">
                <IoChevronBackOutline />
            </button>

            <button className="pagination-item rounded w-[30px] h-[30px] flex items-center justify-center bg-white shadow mx-2">
                1
            </button>

            <button className="pagination-item rounded w-[30px] h-[30px] flex items-center justify-center bg-white shadow mx-2">
                2
            </button>

            <button className="pagination-item rounded w-[30px] h-[30px] flex items-center justify-center bg-white shadow mx-2">
                3
            </button>

            <button className="pagination-right rounded w-[30px] h-[30px] flex items-center justify-center bg-white shadow mx-2">
                <IoChevronForwardOutline />
            </button>

        </div>

        <ModalBox state={modalState} closeCallback={() => setModalState(false)} classname='p-2'>
            <div className="item-bought-card flex items-center bg-light-blue p-1 rounded">
                <div className="item-image h-[100px] w-[100px] transform scale-90 bg-white rounded overflow-hidden ">
                    <img src = '/images/bag.jpg' className='h-full w-full object-contain'/>
                </div>
                <div className="item-info">
                    <div className="item-name">Omaya 256 smooth</div>
                    <div className="item-price">Ghc 200</div>
                    <div className="item-quantity">12</div>
                </div>
                <div className="modify-quantity flex items-center">
                    <IconButton classname='bg-light-green text-2xl transform scale-75'>
                        <IoAddOutline />
                    </IconButton>

                    <input type="tel" name="item_count" className='w-[70px] h-[30px] rounded shadow border-none' />

                    <IconButton classname='bg-red-200 text-2xl transform scale-75'>
                        <IoRemoveOutline />
                    </IconButton>
                </div>
            </div>
        </ModalBox>


        
    </DashboardLayout>
  )
}

export default SalesMade
