import React from 'react';

const Card = ({ title, content }) => (
    <p className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        {content.map((item , index) => (
            <div key={index} className="mb-2 pb-2"> {/* Add a div here */}
                <a href={item.link} className="font-normal text-gray-700 hover:text-gray-400">{item.title}</a>
            </div>
        ))}
    </p>
);

const CardsContainer = ({ title, content }) => ( // Destructure the props correctly here
    <div className="flex flex-col">
        <Card title={title} content={content} />
    </div>
);

export default CardsContainer;
