import React from 'react';

const BusinessSummury = () => {
    /**
     * The business summary will show some summary of your business. There could be 3/4 summary on this summary section. For example, we served 100+ customers, 120M+ Annual revenue, 33K+ Reviews, 50+ tools, etc. Make sure you use some relevant icons here. You can use Hero Icons, React Icons, Font Awesome, Bootstrap Icons, Daisy UI or any icons that you like. To see an example, you will find an image in the images folder of this repository.
     */
    return (
        <div>
            <div>
                <h1 className='text-center text-xl'>Business Summary</h1>
            </div>
            <div className='flex items-center'>
                <div class="stats stats-vertical lg:stats-horizontal shadow">

                    <div class="stat">
                        <div class="stat-title">Downloads</div>
                        <div class="stat-value">31K</div>
                        <div class="stat-desc">Jan 1st - Feb 1st</div>
                    </div>

                    <div class="stat">
                        <div class="stat-title">New Users</div>
                        <div class="stat-value">4,200</div>
                        <div class="stat-desc">↗︎ 400 (22%)</div>
                    </div>

                    <div class="stat">
                        <div class="stat-title">New Registers</div>
                        <div class="stat-value">1,200</div>
                        <div class="stat-desc">↘︎ 90 (14%)</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BusinessSummury;