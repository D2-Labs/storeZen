import React from 'react';
import DashboardLayout from '@/Layouts/DashboardLayout'
import {keeperLinks} from '@/CentralInfo/NavLinks.js';

const KeeperLayout = ({children}) => {
    return(
        <DashboardLayout nav_icons={keeperLinks} profile = "/sales/profile" notification = "/sales/notifications">
            {children}
        </DashboardLayout>
    );
}

export default KeeperLayout;