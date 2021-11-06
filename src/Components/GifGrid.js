
import { ImageList, ImageListItem, Modal } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react'

export const GifGrid = ({ category }) => {

    const api_key = "CXlwDg9c0PUX5bdLjOUkBPfbZsmWSmAj";

    const [images, setImages] = React.useState([]);

    const [open, setOpen] = React.useState(false);

    const [selectedImg, setSelectedImg] = React.useState(null);

    const [selecttitle, setSelecttitle] = React.useState('');

    const handleOpen = (img, title) => {
        setSelectedImg(img);
        setSelecttitle(title);
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        backgroundColor: 'white',
        pt: 2,
        px: 4,
        pb: 3,
    };

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
            <ImageList sx={{ maxWidth: 500 }} cols={3} rowHeight={164}>
                {
                    images.map(img => (
                        <ImageListItem className="zoomImage" key={img.id}>
                            <img 
                                className="zoomImage" 
                                onClick={() => handleOpen(img.url, img.title)}
                                src={img.url} alt={img.title} />
                        </ImageListItem>
                    ))
                }
            </ImageList>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...style, width: 400 }}>
                    <h2 id="parent-modal-title">{selecttitle}</h2>
                    <img 
                        src={selectedImg} 
                        alt="gif"
                        width="400"
                        height="200" 
                    />
                </Box>
            </Modal>
        </div>
    )
}
