import React from 'react';
import {Box, Skeleton, styled} from "@mui/material";

const StyledBox = styled(Box)({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    height: 180
})

const StyledSkeleton = styled(Skeleton)({
    marginRight: 25,
    borderRadius: 16
})

const NumbersElementsSkeleton = () => {
    return (
        <StyledBox>
            <StyledSkeleton
                variant="rectangular"
                height={180}
            />
            <StyledSkeleton
                variant="rectangular"
                height={180}
            />
            <StyledSkeleton
                variant="rectangular"
                height={180}
            />
            <StyledSkeleton
                variant="rectangular"
                height={180}
            />
        </StyledBox>
    )
}

export default NumbersElementsSkeleton;
