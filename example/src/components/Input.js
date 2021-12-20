import React from 'react';

const Input = ({
    label,
    id,
    placeholder,
    onChange,
    value,
    onBlur,
    error,
    errorMessage,
}) => {
    return (
        <div>
            {label && <label htmlFor={id}>{label}</label>}
            <input
                id={id}
                placeholder={placeholder}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
            />
            {error && <span>{errorMessage}</span>}
        </div>
    );
};

export default Input;
