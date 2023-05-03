import React from 'react'
import Clickable from '@/Components/Clickable'

const SalesMadeCard = ({price = '2670', item_name = 'Multiple items bought', items_count = '650', date = '12th May 2023, 2:25pm'}) => {
  return (
    <div className="sales_card p-2 bg-white shadow rounded min-w-[240px]" >
        <div className="date text-sm bg-gray-100 rounded p-1">{date}</div>

        <div className="name-quantity-box flex flex-col justify-center p-2 ">
            <span className="quantity font-bold text-2xl "> Ghc {price}</span>
            <span className='text-xs'>{item_name}</span>

        </div>

        <div className="flex justify-between items-center">
            <span className="quantity p-1 font-bold rounded blue"> {items_count} item(s)</span>
            <Clickable className="bg-blue px-4 py-[2.5px] text-white font-medium rounded">Edit</Clickable>

        </div>
    </div>
  )
}

export default SalesMadeCard