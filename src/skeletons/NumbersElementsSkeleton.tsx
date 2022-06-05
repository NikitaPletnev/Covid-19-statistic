import React from 'react';
import {Box, Skeleton, styled} from "@mui/material";
import {size} from "../helpers/size";

const StyledBox = styled(Box)({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    height: '20%'
})

const StyledSkeleton = styled(Skeleton)({
    marginRight:  window.innerWidth > size.laptop ?  25 : 0,
    borderRadius: 16
})

const NumbersElementsSkeleton = () => {
    return (
        <StyledBox>
            <StyledSkeleton
                variant="rectangular"
                height={'100%'}
            />
            <StyledSkeleton
                variant="rectangular"
                height={'100%'}
            />
            <StyledSkeleton
                variant="rectangular"
                height={'100%'}
            />
            <StyledSkeleton
                variant="rectangular"
                height={'100%'}
            />
        </StyledBox>
    )
}

export default NumbersElementsSkeleton;
