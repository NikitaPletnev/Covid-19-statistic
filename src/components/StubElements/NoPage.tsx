import React from 'react';
import {Box, styled, Typography} from "@mui/material";

const StyledNoPageBox = styled(Box)({
    position: 'absolute',
    height: 'calc(100%  - 85px)',
    width: '100%',
    display: 'flex',
    alignItems: "center",
    justifyContent: 'center'
})

const NoPage = () => {
    return <StyledNoPageBox>
        <Typography variant={'h1'}>Page Not Found</Typography>
    </StyledNoPageBox>
}

export default NoPage
