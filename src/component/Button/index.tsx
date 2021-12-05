import React from 'react';
import { Btn } from "./style"

interface IProps {
    content: string;
}

const Button: React.FC<IProps> = ({content}) => {
    return (
        <Btn>
            <button>{content}</button>
        </Btn>
    )
}

export default Button
