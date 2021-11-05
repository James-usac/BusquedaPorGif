import React from 'react'
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = React.useState(['One Punch']);

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }></AddCategory>
            <hr />
            {
                categories.map((category) => (
                        <GifGrid category={category} key={category}></GifGrid>               
                ))
            }
        </div>
    )
}
