import React from 'react';
import {useState} from 'react';
import { IoMdNotificationsOutline, TfiLayoutGrid2, AiOutlineShoppingCart, IoPricetagsOutline, IoPeopleOutline} from 'react-icons/all';
import IconButton from '../Components/IconButton';
import Clickable from '../Components/Clickable';

let navigation_icons = [
    {
        'name': 'Dashboard',
        'icon': TfiLayoutGrid2,
        'link': '',
    },

    {
        'name': 'Sales',
        'icon': AiOutlineShoppingCart,
        'link': '',
    },

    {
        'name': 'Statistics',
        'icon': IoPricetagsOutline,
        'link': '',
    },

    {
        'name': 'Users',
        'icon': IoPeopleOutline,
        'link': '',
    }
]
    


const DashboardLayout = ({children, nav_icons = navigation_icons}) => {
    const [profileDropdownState, setProfileDropdownState] = useState(true);

  return (
    <div className='h-screen overflow-hidden relative'>

        <nav className='flex justify-between items-center p-2 sm:px-4 h-[50px] sm:h-[60px] '>
            <div className="logo font-bold text-lg sm:text-2xl">Store<span className='blue'>Zen</span></div>
            <div className="nav-left flex items-center relative">

                <IconButton classname='text-lg sm:text-2xl bg-gray-200 mx-1'>
                    <IoMdNotificationsOutline />
                </IconButton>

                <IconButton classname='text-sm sm:text-normal text-white bg-blue mx-1' onClick={() => setProfileDropdownState(!profileDropdownState)}>
                    DS
                </IconButton>

                <div className={`profile-dropdown absolute top-[55px] right-0 bg-white p-2 px-3 rounded w-max shadow z-20 ${profileDropdownState && 'hidden'}`}>
                    <Clickable className="dropdown-item hover:bg-blue-50 px-4 py-1 rounded">Profile</Clickable> <br />
                    <Clickable className="dropdown-item hover:bg-blue-50 px-4 py-1 rounded">Log Out</Clickable>
                </div>

            </div>
        </nav>
        
        <div className="dashplate flex h-full ">

            <div className="navigations flex flex-col items-center pt-5 w-[50px] sm:w-[60px] h-full text-gray-600 relative ">
                
                {
                    nav_icons.map(icon => 
                         (
                            <IconButton classname='text-lg sm:text-2xl my-2' name={icon.name} key={icon.name}>
                                <icon.icon/>
                            </IconButton>
                        )
                    )
                }
                
            </div>

            <div className="focus-area h-screen pb-[150px] w-full bg-light-blue relative overflow-y-scroll" >
                {children}
            </div>
        </div>

        
    </div>
  )
}

export default DashboardLayout