import React from 'react';

const SharedTitle = ({heading,subHeading}) => {
    return (
        <div>
             <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-orange-600">{heading}</h1>
                <p className="text-orange-500 mt-2">{subHeading}</p>
            </div>
        </div>
    );
};

export default SharedTitle;