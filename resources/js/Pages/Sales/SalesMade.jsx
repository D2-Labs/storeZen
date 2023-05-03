import React from 'react'
import {useState} from 'react'
import DashboardLayout from '@/Layouts/DashboardLayout'
import DateTimeSearch from '@/Components/DateTimeSearch'

import SalesMadeCard from '@/Components/SalesMadeCard'
import ModalBox from '@/Components/ModalBox'
import IconButton from '@/Components/IconButton'
import Clickable from '@/Components/Clickable'
import ItemBoughtCard from '@/Components/ItemBoughtCard'



import {IoChevronBackOutline, IoChevronForwardOutline} from 'react-icons/all'

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

        <ModalBox state={modalState} closeCallback={() => setModalState(false)} classname='p-4 bg-light-blue w-[90vw] sm:w-[500px] h-[490px]'>

            <div className="h-[400px] overflow-y-scroll w-full">
                {dummy_sales_made.map(item => <ItemBoughtCard />)}
            </div>

            <Clickable className='p-2 bg-blue w-full text-white rounded my-4'>Done</Clickable>
            
        </ModalBox>


        
    </DashboardLayout>
  )
}

export default SalesMade
