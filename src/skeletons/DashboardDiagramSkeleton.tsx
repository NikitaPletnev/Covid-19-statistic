import React from 'react';
import {Skeleton} from "@mui/material";
import {size} from "../helpers/size";

const DashboardDiagramSkeleton = () => {
    return <Skeleton
        style={{
            margin: window.innerWidth > size.laptop ? '25px 25px 0 0 ' : '25px 0 0 0 ',
            borderRadius: 16
        }}
        variant="rectangular"
        height={ window.innerWidth > size.laptop ? '30%' : '300px'}
    />
}

export default DashboardDiagramSkeleton
