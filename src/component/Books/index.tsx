import React from 'react';

interface IProps {
    image: string,
    title: string,
    author: string,
    category: string
}

const Books: React.FC<IProps> = ({image, title, author,category}) => {
    return (
        <div>
            <div>
                <img src={image} alt="book" />
                <h4>{title}</h4>
                <p>{author}</p>
                <div>
                    <p>{category}</p>
                </div>
            </div>
            
        </div>
    )
}

export default Books 
