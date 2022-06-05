import React from 'react';
import {Box, Typography} from "@mui/material";
import '../../styles/Loader.css'

const Loader = () => {
    return <Box className='loaderContainer'>
        <Typography className='loaderText'>LOADING</Typography>
    </Box>
}

export default Loader;
