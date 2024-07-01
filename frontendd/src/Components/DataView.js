import React from 'react';

const DataView = ({ title, data }) => {
    return (
        <div>
            <h2>{title}</h2>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>
                        {Object.values(item).join(' - ')}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DataView;
