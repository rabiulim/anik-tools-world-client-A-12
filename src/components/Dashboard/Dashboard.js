import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSideber from './DashboardSideber';


const Dashboard = () => {
    return (
        <DashboardSideber>
            <h1 className='text-4xl text-primary font-bold mb-12'>Wellcome  to Your Dashboard</h1>
            <Outlet></Outlet>
        </DashboardSideber>
    );
};

export default Dashboard;