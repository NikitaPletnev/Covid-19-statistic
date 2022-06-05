import React from "react";
import {ValuesTotalInterface} from "../../store/interfaces/valuesTotalInterface";
import {Box, styled, Typography} from "@mui/material";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {formatNumber} from "../../helpers/general";
import {size} from "../../helpers/size";

const StyledBox = styled(Box)({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    height: '20%'
})

const StyledTypography = styled(Typography)({
    fontWeight: 500,
    textAlign: "center"
})

const ItemBox = styled(Box)({
    background: '#FFF',
    marginRight: 25,
    borderRadius: 16,
    padding: '45px 0',
    '&:last-child': {
        marginRight: window.innerWidth > size.laptop ?  25 : 0
    }
})

const BarBox = styled(Box)({
    height: '20px',
    width: '70%',
    background: '#e9e5f2',
    margin: '20px auto 0',
    borderRadius: '20px'
})

const BarPercents = styled(Box)({
    borderRadius: '20px',
    textAlign: 'center',
    color: '#FFF'
})

const NumbersElements = ({deaths, confirmed, recovered}: ValuesTotalInterface) => {

    const renderBar = (color: string, percents: number) => {
        return <BarBox>
            <BarPercents style={{
                background: color,
                width: `${percents}%`
            }}>{`${percents}%`}</BarPercents>
        </BarBox>
    }

    return (
        <StyledBox>
            <ItemBox>
                <StyledTypography>TOTAL CASES</StyledTypography>
                <StyledTypography color='#813bec' variant="h5">{formatNumber(confirmed || 0)}</StyledTypography>
                {renderBar('#813bec', Math.round((confirmed || 0) / 7000000000 * 100))}
            </ItemBox>
            <ItemBox>
                <StyledTypography>RECOVERED</StyledTypography>
                <StyledTypography color='#f6bf07' variant="h5">{formatNumber(recovered || 0)}</StyledTypography>
                {renderBar('#f6bf07', Math.round((recovered || 0) / (confirmed || 1) * 100))}
            </ItemBox>
            <ItemBox>
                <StyledTypography>ACTIVE CASES</StyledTypography>
                <StyledTypography color='#77d01a' variant="h5">{formatNumber((confirmed || 0) - (deaths || 0) - (recovered || 0))}</StyledTypography>
                {renderBar('#77d01a', Math.round( ((confirmed || 0) - (deaths || 0) - (recovered || 0))/ (confirmed || 1) * 100))}
            </ItemBox>
            <ItemBox>
                <StyledTypography>DEATHS</StyledTypography>
                <StyledTypography color='#fc5700' variant="h5">{formatNumber(deaths || 0)}</StyledTypography>
                {renderBar('#fc5700', Math.round( (deaths || 0)/ (confirmed || 1) * 100))}
            </ItemBox>
        </StyledBox>
    )
}

export default NumbersElements
