import React from 'react'
import { useState } from 'react'
import KeeperLayout from '@/Layouts/KeeperLayout'
import Clickable from '@/Components/Clickable'
import StatsPriceCard from "@/Components/StatsPriceCard";
import Pagination from "@/Components/Pagination";
import IconButton from "@/Components/IconButton";

import {
    VscListSelection,
    IoCloseOutline,
} from "react-icons/all";


const SalesPersons = () => {
    
    let dummy_sales_made = [];
    for (let i = 0; i < 10; i++) {
        dummy_sales_made.push(`item_${i}`);
    }

    const cards = [
        {
            digits: "10043984",
            type: "sales",
            title: "Total Sales",
        },
        {
            digits: "10043984",
            type: "profits",
            title: "Total Profits",
        },
        {
            digits: "10043984",
            type: "orders",
            title: "Total Order",
        },
    ];

    const [menuBtnState, setMenuBtnState] = useState(true);

  return (
    <KeeperLayout>

        <div className='p-5'>
            <div className='flex justify-between my-2'>
                <h2 className="text-2xl">Sales</h2>

                <IconButton
                    classname="text-lg sm:text-2xl bg-gray-200 mx-1"
                    onClick={() => setMenuBtnState(!menuBtnState)}
                >
                    {menuBtnState ? <VscListSelection /> : <IoCloseOutline />}
                </IconButton>
            </div>
            <div className=" bg-white gap-1 p-1 rounded h-max overflow-hidden relative">

                <div className="bg-white rounded  p-2">
                    <div className="top unique-salespersons-top flex justify-between items-center shadow py-3 px-2">
                        

                        <div className="flex items-center rounded shadow border overflow-hidden border-gray-300">
                            <input type="text" name="search" className="border-none" placeholder='Type your search here..'/>
                            <select className="border-0 border-l border-gray-300">
                                <option disabled>Search by</option>
                                <option value="sales">Item</option>
                                <option value="sales">Sales Code</option>
                                <option value="sales">Date</option>
                            </select>
                        </div>

                        <Clickable className="bg-blue py-1 text-white px-3 rounded shadow border-gray-300">
                            View Profile
                        </Clickable>
                    </div>

                    <div className="my-2 flex flex-col md:flex-row items-center justify-center w-full text-gray-600  border-slate-200 shadow-sm shadow-slate-400 rounded-md bg-white px-5 py-5">
                        {cards.map((card) => (
                            <StatsPriceCard {...card} />
                        ))}
                    </div>

                    <div className="content-area py-5">
                        <div className="sales-box shadow">
                            {
                                dummy_sales_made.map(item => (
                                    <div className="sales-item p-2 border-b">
                                
                                        <div className="bg-white rounded shadow">

                                            <div className="last-seen font-light text-sm bg-gray-100 p-1 text-gray-400 rounded flex justify-between items-center">
                                                <span>356 centuries ago</span>
                                                <span className="bg-blue-100 bg-opacity-30 text-gray-400 p-1 rounded px-2" >id:1234567890#</span>
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <div className="left">

                                                    <div className="name font-bold text-xl p-2">
                                                        <span>Ghc600</span>, <span>45</span><span className='text-xs'>items</span>
                                                    </div>

                                                </div>
                                                <div className="right p-2">
                                                    <Clickable className='bg-blue p-1 px-3 rounded text-white text-sm'>Edit Sale</Clickable>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                ))
                            }


                        </div>
                        <Pagination />
                    </div>
                </div>

                <div className={`p-1 shadow h-max rounded w-[280px] absolute top-0 bg-white ${menuBtnState? 'right-[-5000px]' : 'right-0'}`}>

                    <div className="flex items-center rounded shadow border overflow-hidden border-gray-300">
                        <input type="text" name="search" className="border-none w-full" placeholder='Type your search here..'/>
                    </div>

                    <div className="pb-5 overflow-x-hidden overflow-y-scroll scrollbar-thin scrollbar-track-transparent">
                        {
                            dummy_sales_made.map(item => (
                                <div className="flex rounded  p-2 bg-white border-b  my-1">
                                    <div className="left">
                                        <div className="avatar rounded-full h-[50px] w-[50px] bg-green-400"></div>
                                    </div>
                                    <div className="right px-2">
                                        <div className="name font-bold">Adeniyi David Shalom</div>
                                        <div className="last-seen font-light text-sm text-gray-600">last active: 3 hours ago</div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>


    </KeeperLayout>
  )
}

export default SalesPersons