import React from 'react';

interface IProps {
    content: string;
}

const Button: React.FC<IProps> = ({content}) => {
    return (
        <div>
            <button>{content}</button>
        </div>
    )
}

export default Button
