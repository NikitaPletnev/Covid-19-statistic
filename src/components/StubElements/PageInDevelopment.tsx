import React from 'react';
import gif from '../../images/PageInDevelopment.gif'
import {Box, styled, Typography} from "@mui/material";

const StyledPageInDevelopmentBox = styled(Box)({
    width: '100%',
    height: 'calc(100% - 85px)',
    position: 'absolute',
    background: "#837e86",
    textAlign: "center",
    '& img': {
        border: 'none',
        padding: 0,
        height: '50%'
    },
})

const PageInDevelopment = () => {
    return <StyledPageInDevelopmentBox>
        <img alt={'Page In Development GIF'} src={gif}/>
        <Typography variant={'h2'} color="#FFF">Page Is In Development</Typography>
    </StyledPageInDevelopmentBox>
}

export default PageInDevelopment;
