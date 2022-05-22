import React from 'react';
import { useParams } from 'react-router-dom';

const ToolBuy = () => {
    const { toolId } = useParams();
    return (
        <div>
            <p>this is tool buy page</p>
        </div>
    );
};

export default ToolBuy;