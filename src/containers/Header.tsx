import React from 'react';
import {Box, styled} from "@mui/material";
import image from '../images/CovidHeaderIMG.png'

const HeaderBox = styled(Box)({
    height: '85px',
    padding: 24,
    boxSizing: 'border-box'
})

const Header = () => {
    return (
        <HeaderBox>
            <img alt='CovidHeaderIMG' src={image}/>
        </HeaderBox>
    )
}

export default Header
