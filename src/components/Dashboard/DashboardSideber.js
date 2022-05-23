import React from 'react';
import { NavLink } from 'react-router-dom';

const DashboardSideber = ({ children }) => {
    return (
        <div class="drawer drawer-mobile bg-gray-400">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div className='drawer-content flex flex-col items-center justify-center'>
                {children}
            </div>

            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}

                    <li><NavLink to='/dashboard/myprofile'>My Profile</NavLink></li>
                    <li><NavLink to='/dashboard/myorders'>My Orders</NavLink></li>
                    <li><NavLink to='/dashboard/myreviews'>Add Reviews</NavLink></li>

                </ul>

            </div>
        </div>
    );
};

export default DashboardSideber;