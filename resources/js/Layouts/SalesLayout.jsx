import React from 'react';
import DashboardLayout from '@/Layouts/DashboardLayout'
import {salesLinks} from '@/CentralInfo/NavLinks.js';

const SalesLayout = ({children}) => {
    return(
        <DashboardLayout nav_icons={salesLinks}>
            {children}
        </DashboardLayout>
    );
}

export default SalesLayout;