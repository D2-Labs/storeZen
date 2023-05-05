import React from 'react';
import DashboardLayout from '@/Layouts/DashboardLayout'
import navlinks from '@/CentralInfo/salesNavLinks.js';

const SalesLayout = ({children}) => {
    return(
        <DashboardLayout nav_icons={navlinks}>
            {children}
        </DashboardLayout>
    );
}

export default SalesLayout;