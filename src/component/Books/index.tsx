import React from 'react';
import { Inner, Category, Outter } from "./style"

interface IProps {
    image: string,
    title: string,
    author: string,
    category: string
}

const Books: React.FC<IProps> = ({image, title, author,category}) => {
    return (
        <Outter>
            <Inner>
                <img src={image} alt="book" />
                <h4>{title}</h4>
                <p>{author}</p>
                <Category>
                    <p>{category}</p>
                </Category>
            </Inner>
            
        </Outter>
        
    )
}

export default Books 
