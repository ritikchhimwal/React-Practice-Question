// Build a search bar that filters a list of items based on user input using props
import React, { useState } from 'react';

const FilterList = ({ items }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredItems = items.filter(item =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <input type="text" placeholder="Search.." onChange={(e) => setSearchTerm(e.target.value)} />
            <ul>
                {filteredItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default FilterList;
