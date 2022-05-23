import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/tool')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [tools])

    return (
        <div>
            <h1 className='text-center text-4xl text-primary font-bold'>Our Tools</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    tools.map(tool => <Tool key={tool.id}
                        tool={tool}
                    ></Tool>)
                }
            </div>

        </div>
    );
};

export default Tools;