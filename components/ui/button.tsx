import React from 'react';

type ButtonProps = {
    variant?: 'default' | 'outline' | 'ghost';
    children: React.ReactNode;
    onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ variant = 'default', children, onClick }) => {
    const className = `button ${variant}`;
    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;