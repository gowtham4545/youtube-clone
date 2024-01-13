import React, { useState } from 'react'
import './_categoriesBar.scss';

const keywords = [
    'All',
    'React JS',
    'Angular',
    'React Native',
    'APIs',
    'Redux',
    'Algorithm',
    'Guitar',
    'Kannada Songs',
    'Coding',
    'Cricket',
    'Football',
    'Real Madrid',
    'Abhi and Niyu',
    'Dhruv Rathee',
    'Finance With Sharan'
];

const CategoriesBar = () => {

    const [activeElement, setActiveElement] = useState('All');

    const handleClick = (value) => {
        setActiveElement(value);
    }

    return (
        <div className="categoriesBar">
            {
                keywords.map((value, index) => (
                    <span
                        className={activeElement === value ? 'active' : ''}
                        onClick={() => handleClick(value)}
                        key={index}
                    >
                        {value}
                    </span>
                ))
            }
        </div>
    )
}

export default CategoriesBar
