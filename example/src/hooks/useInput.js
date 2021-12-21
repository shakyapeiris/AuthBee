import { useRef, useState } from 'react';

const useInput = (validator) => {
    const [inputValue, setInputValue] = useState('');
    const [inputTouched, setInputTouched] = useState(false);
    const inputRef = useRef(null);
    const isInputValid = validator(inputValue);
    const hasError = !isInputValid && inputTouched;

    const valueChangeHandler = (event) => {
        setInputValue(event.target.value);
    };

    const inputBlurHandler = () => {
        setInputTouched(true);
    };

    const focusHandler = () => {
        setInputTouched(true);
        if (inputRef.current) inputRef.current.focus();
    };

    const reset = () => {
        setInputValue('');
        setInputTouched(false);
    };

    return {
        inputValue,
        isInputValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset,
        inputRef,
        focusHandler,
        setInputValue,
    };
};

export default useInput;
