import React from 'react';
import { IoMdNotificationsOutline, TfiLayoutGrid2, AiOutlineShoppingCart, IoPricetagsOutline, IoPeopleOutline} from 'react-icons/all';
import IconButton from '../Components/IconButton';

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
    


const DashboardLayout = ({children}) => {
  return (
    <div className='h-screen overflow-hidden'>
        <nav className='flex justify-between items-center p-2 sm:px-4 h-[50px] sm:h-[60px] relative z-20'>
            <div className="logo font-bold text-lg sm:text-2xl">Store<span className='blue'>Zen</span></div>
            <div className="nav-left flex items-center">

                <IconButton classname='text-lg sm:text-2xl bg-gray-200 mx-1'>
                    <IoMdNotificationsOutline />
                </IconButton>

                <IconButton classname='text-sm sm:text-normal text-white bg-blue mx-1'>
                    DS
                </IconButton>
 
            </div>
        </nav>
        
        <div className="dashplate flex h-full">

            <div className="navigations flex flex-col items-center pt-5 w-[50px] sm:w-[60px] h-full text-gray-600 relative z-10">
                
                {
                    navigation_icons.map(icon => 
                         (
                            <IconButton classname='text-lg sm:text-2xl my-2' name={icon.name}>
                                <icon.icon/>
                            </IconButton>
                        )
                    )
                }
                
            </div>

            <div className="focus-area h-screen pb-60px w-full bg-gray-100 relative z-0" >
                {children}
            </div>
        </div>

        
    </div>
  )
}

export default DashboardLayout