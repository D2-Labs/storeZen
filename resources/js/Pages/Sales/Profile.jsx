import React           from 'react'
import {useState}      from 'react'
import DashboardLayout from '@/Layouts/DashboardLayout'
import Clickable       from '@/Components/Clickable'
import navlinks from '@/CentralInfo/salesNavLinks.js';


const Profile = () => {

    const [optionValue, setOptionValue] = useState('goods');

  return (
    <DashboardLayout nav_icons={navlinks}>
        <div className="info-box mb-5 sm:mb-10 p-6 text-center relative">
            <div className="relative z-10">
                <div className="profile-image h-[140px] w-[140px] sm:h-[240px] sm:w-[240px] rounded-full shadow bg-blue flex items-center justify-center text-4xl sm:text-8xl font-bold text-white mx-auto my-0">
                    DS
                </div>

                <div className="name font-bold text-xl sm:text-3xl py-1">Adeniyi David Shalom</div>

                <div className="info text-xs">
                    <span className='px-1'>
                        <span className="font-bold">365</span><span> work days,</span>
                    </span>
                    <span className='px-1'>
                        <span className="font-bold">123365</span><span> items sold.</span>
                    </span>
                    <span className='px-1'>
                        <span className="font-bold">Ghc52365</span><span> sales.</span>
                    </span>
                </div>
            </div>
            <div className="bg-black h-1/2 w-full absolute top-0 left-0 overflow-hidden z-0">
                <div className="overlay h-full w-full bg-black bg-opacity-20 absolute top-0 left-0 z-10"></div>
                <img src="/images/abstract.webp" alt="profile background" className='h-full w-full object-cover absolute top-0 left-0 z-0' />
            </div>
        </div>

        <div>
            <div className="mx-auto my-0 transform scale-90 w-[90vw] sm:scale-100 lg:w-[900px] bg-white rounded p-3 shadow">

                <div className="top-bar flex items-center justify-between p-1 mb-3">

                    <h2 className='text-base sm:text-xl font-bold'>65606 <span className='text-sm font-light'>Ghc</span></h2>

                    <select className='rounded text-xs sm:text-base' name="opitions" onChange={(event) => setOptionValue(event.target.value)}>
                        <option value="tasks">Task Assigned</option>
                        <option value="goods">Goods Assigned</option>
                    </select>
                </div>

                {
                    optionValue == 'goods'?
                        (
                            <div className="items-box">

                                <div className="item flex items-center justify-between border-t p-1 py-2">
            
                                    <div className="flex">
                                        <div className="image mr-2 h-[60px] w-[60px] rounded relative overflow-hidden">
                                            <img src="/images/bag.jpg" alt="product image" className='h-full w-full object-contain' />
                                        </div>
            
                                        <div className="info">
                                            <div className="name font-black text-sm sm:text-base">Omaya 3564 bay 200</div>
                                            <div className="quantity text-xs sm:text-base">Quantity: <span>2345</span></div>
                                        </div>
                                    </div>
            
                                </div>
            
                                <div className="item flex items-center justify-between border-t p-1 py-2">
            
                                    <div className="flex">
                                        <div className="image mr-2 h-[60px] w-[60px] rounded relative overflow-hidden">
                                            <img src="/images/bag.jpg" alt="product image" className='h-full w-full object-contain' />
                                        </div>
            
                                        <div className="info">
                                            <div className="name font-black text-sm sm:text-base">Omaya 3564 bay 200</div>
                                            <div className="quantity text-xs sm:text-base">Quantity: <span className='text-red-500'>Out of Stock</span></div>
                                        </div>
                                    </div>
            
                                    <Clickable className="quantity text-xs sm:text-base bg-red-400 text-white w-max px-5 font-bold py-2 rounded">Request</Clickable>
                                </div>
            
                                <div className="item flex items-center justify-between border-t p-1 py-2">
            
                                    <div className="flex">
                                        <div className="image mr-2 h-[60px] w-[60px] rounded relative overflow-hidden">
                                            <img src="/images/bag.jpg" alt="product image" className='h-full w-full object-contain' />
                                        </div>
            
                                        <div className="info">
                                            <div className="name font-black text-sm sm:text-base">Omaya 3564 bay 200</div>
                                            <div className="quantity text-xs sm:text-base">Quantity: <span>2345</span></div>
                                        </div>
                                    </div>
            
                                </div>
            
                            </div>
                        ) : 

                    optionValue == 'tasks'?
                        (
                            <div className="items-box">

                                <div className="item flex items-center justify-between border-t p-1 py-2">
            
                                    <div className="flex">
                                        <div className="image mr-2 h-[40px] w-[40px] text-white font-bold rounded-full shadow flex justify-center items-center bg-blue">
                                            DS
                                        </div>
            
                                        <div className="info w-[90%]">
                                            <div className="name font-black text-sm sm:text-base">Adeniyi David Shalom</div>
                                            <div className="quantity text-xs sm:text-base py-1 text-gray-900">
                                                Take the ticket from the counter and pass 500Ghc in Cash from the law to the court.
                                                Take the ticket from the counter and pass 500Ghc in Cash from the law to the court.
                                            </div>
                                        </div>
                                    </div>
            
            
            
                                </div>
            
            
                            </div>
                        ) : ''
                    
                }



 

                
            </div>
        </div>
    </DashboardLayout>
  )
}

export default Profile