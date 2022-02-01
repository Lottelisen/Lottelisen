import React, { useState } from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';


const ImageGallery = ({itemData, searchImage}) => {
    const [open, setOpen] = React.useState(false);
    const [selectedImage, setSelectedImage] = React.useState('');
    
    const handleOpen = (image) => {
        setOpen(true); 
        setSelectedImage(image);
    };
    
    const handleClose = () =>{
        setOpen(false); 
        setSelectedImage('');
    };

    return (
        <Box sx={{ width: '100%', height: '100vh', overflowY: 'scroll' }}>
            <ImageList variant="masonry" cols={4} gap={8}>
                {!!itemData.list.length && itemData.list.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}`}
                            srcSet={`${item.img}`}
                            alt={item.title}
                            loading="lazy"
                            onClick={() => handleOpen(item.img)}
                        />

                        {/* <ImageListItemBar
                            // position="below"
                            //title={item.title}
                            subtitle={item.title}
                            actionIcon={
                                <IconButton
                                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                    aria-label={`search similar`}
                                >
                                    <ImageSearchIcon />
                                </IconButton>
                            }
                        /> */}

                        <ImageListItemBar
                            sx={{
                                background:
                                    'linear-gradient(to top, rgba(0,0,0,0.7) 0%, ' +
                                    'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                            }}
                            subtitle={item.title}
                            position="bottom"
                            actionIcon={
                                <IconButton
                                    sx={{ color: 'white' }}
                                    aria-label={`search similar`}
                                    onClick={() => searchImage(item.img)}
                                >
                                    <ImageSearchIcon />
                                </IconButton>
                            }
                            actionPosition="left"
                        />

                    </ImageListItem>
                ))}
            </ImageList>

            <Modal
                open={open}
                onClose={handleClose}
            // aria-labelledby="modal-modal-title"
            // aria-describedby="modal-modal-description"
            >
               
                <Box
                    component="img"
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        maxHeight: '95%' ,
                        maxWidth:'90%' ,

                    }}
                    alt="test image"
                    src={selectedImage}
                />
            </Modal>

        </Box>

    );
};
export default ImageGallery;



