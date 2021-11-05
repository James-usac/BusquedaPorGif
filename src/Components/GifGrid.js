
import React, { useEffect } from 'react'

export const GifGrid = ({ category }) => {

    const api_key = "CXlwDg9c0PUX5bdLjOUkBPfbZsmWSmAj";

    const [images, setImages] = React.useState([]);

    useEffect(() => {
        getGifs(category);
    }, [category]);

    const getGifs = async (category) => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=${api_key}`;
        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        console.log(gifs);
        setImages(gifs);
        return gifs;
    }

    return (
        <div>
            <h1>{category}</h1>
            {
                images.map(img => (
                    <div key={img.id}>
                        <img src={img.url} alt={img.title} />
                        <br/>
                        <label>{img.title}</label>
                    </div>
                ))
            }
        </div>
    )
}
