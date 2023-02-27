import { useState } from 'react';

export const AddCategory = ({ onAddCategory }) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim() <= 1) return;
        onAddCategory(inputValue);
        setInputValue('');
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="🔎 Buscador..."
                    value={inputValue}
                    onChange={onInputChange}
                    className="form-control my-4" />
            </form>
        </>
    )
}
