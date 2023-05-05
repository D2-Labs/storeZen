import React           from 'react'
import {useState}      from 'react'
import SalesLayout from '@/Layouts/SalesLayout'
import Clickable       from '@/Components/Clickable'


const Profile = () => {

  return (
    <SalesLayout>
        

        <div>
            <div className="mx-auto my-5 transform scale-90 w-[90vw] sm:scale-100 lg:w-[900px] bg-white rounded p-3 shadow">

                <div className="top-bar flex items-center justify-between p-1 mb-3">

                    <h2 className='text-base sm:text-xl font-bold'>Notifications <span className='text-sm font-light'></span></h2>

                    
                </div>


                            

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




 

                
            </div>
        </div>
    </SalesLayout>
  )
}

export default Profile