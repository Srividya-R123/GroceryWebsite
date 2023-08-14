import React from 'react';
import './CategorySidebar.css';

const CategorySidebar = () => {
    const data = [
        {
            id: 1,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEypEQzGXn3NQhvUQoB77ZfHONx6dYaKcB9g&usqp=CAU",
            description: "Vegetables",
        },
        {
            id: 2,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH_GByZJe3Xvyvg4sxMt_8bLV8PskeDQMQnQ&usqp=CAU",
            description: "Fruits",
        },
        {
            id: 3,
            image: "data:image/jpeg;base64,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",
            description: "Greens",
        },
    ];

    return (
        
        <div className='catsidebar'>
            {data.map((item) => (
                <div className='category' key={item.id}>
                    <img src={item.image} alt="noimg"/>
                    <h3>{item.description}</h3>
                </div>
            ))}
        </div>
    );
}

export default CategorySidebar;
