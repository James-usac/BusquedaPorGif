import React from 'react'
import { GifGrid } from './Components/GifGrid';
import { MenuFind } from './Components/MenuFind';

export const GifExpertApp = () => {

    const [categories, setCategories] = React.useState(['One Punch']);

    return (
        <div>
            <MenuFind setCategories={ setCategories }></MenuFind>
            <div className="center_body">
            {
                categories.map((category) => (
                        <GifGrid category={category} key={category}></GifGrid>               
                ))
            }
            </div>
        </div>
    )
}
