import React from 'react';
import {Box, styled, Typography} from "@mui/material";
import CoronavirusSymptomsImg from '../../images/CoronavirusSymptoms.png'
import {size} from "../../helpers/size";

const StyledCoronavirusSymptomsBox = styled(Box)({
    height: 'calc(60% - 25px)',
    background: '#8531ff',
    borderRadius: 16,
    marginTop: 25,
    padding: 25,
    boxSizing: "border-box"
})

const StyledImg = styled('img')({
    width: window.innerWidth > size.laptop ? '70%' : '60%',
    marginTop: '18px',
    marginLeft: window.innerWidth > size.laptop ? '50px' : '80px',
    padding: 0,
    border: 'none',
})

const StyledCoronavirusSymptomsTypography = styled(Typography)({
    color: '#FFF',
    fontWeight: "bold",
})

const StyledCoronavirusSymptomsP = styled('p')({
    color: '#FFF',
})

const CoronavirusSymptoms = () => {
    return (
        <StyledCoronavirusSymptomsBox>
            <StyledImg alt={'Coronavirus Symptoms Image'} src={CoronavirusSymptomsImg}/>
            <StyledCoronavirusSymptomsTypography variant={'h4'}>Coronavirus
                Symptoms</StyledCoronavirusSymptomsTypography>
            <StyledCoronavirusSymptomsP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.</StyledCoronavirusSymptomsP>
        </StyledCoronavirusSymptomsBox>
    )

}

export default CoronavirusSymptoms;
