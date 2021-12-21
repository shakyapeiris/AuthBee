import React from 'react';
import classes from './Input.module.css'

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
        <div className={classes.InputContainer}>
            {label && <label htmlFor={id}>{label}</label>}
            <input
                id={id}
                placeholder={placeholder}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
            />
            {error && <span className="error">{errorMessage}</span>}
        </div>
    );
};

export default Input;
