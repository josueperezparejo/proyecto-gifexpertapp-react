import { useState } from 'react';
import { AddCategory, Footer, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['simpsons']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory])
    }

    return (
        <>
            <h1 className='text-center mt-4 fw-bold text-primary-emphasis'>Buscador Gifs</h1>

            <AddCategory onAddCategory={onAddCategory} />

            {categories.map((category) => (
                <GifGrid key={category} category={category} />
            ))}

            <Footer />
        </>
    )
}
