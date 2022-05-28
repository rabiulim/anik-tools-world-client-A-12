import React from 'react';
const Portfolio = () => {
    return (
        <div className='m-6'>
            <div class="hero  min-h-screen" style={{ "backgroundImage": "url(https://static.vecteezy.com/system/resources/previews/001/987/871/original/abstract-black-stripes-diagonal-background-free-vector.jpg)" }}>
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="hero-content text-center text-accent-content">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-5xl font-bold">My Portfolio Here!!</h1>
                        <h1 className='text-xl font-bold'>Name: Rabiul Islam Anik</h1>
                        <h1 className='text-xl font-bold'>Email: rabiulim@gmail.com</h1>
                        <h1 className='text-xl font-bold'>education: I have complete SSC in 2019 with 4.56 GPA.Latest I have passed HSC from Science with GPA 4.5;</h1>
                        <h1 className='text-2xl font-bold pt-4'>List of My Skill:</h1>
                        <div>
                            <ul className='text-2xl font-bold pt-12'>
                                <li>html5</li>
                                <li>CSS3</li>
                                <li>Bootstrap5</li>
                                <li>Tailwind</li>
                                <li>JS</li>
                                <li>ES6</li>
                                <li>Mongodb</li>
                                <li>Node.js</li>
                                <li>Express.js</li>
                                <li>React.js</li>
                            </ul>
                        </div>
                        <h1 className='text-secondary font-bold text-4xl mt-12'>My Previous Projects:</h1>
                        <p className='text-xl pt-5'>
                            <h1>Anik Phone Info link:</h1>
                            https://anik-phone-info.netlify.app/</p>
                        <p className='text-xl pt-5'>
                            <h1>Anik IPhone House link:</h1>
                            https://anik-iphone-house.netlify.app/</p>
                        <p className='text-xl pt-5'>
                            <h1>Rabiul Mixer World link:</h1>
                            https://rabiul-mixer-world.web.app/</p>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Portfolio;