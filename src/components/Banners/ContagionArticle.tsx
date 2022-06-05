import React from "react";
import {Box, styled, Typography} from "@mui/material";
import image1 from '../../images/Contagion_1.png'
import image2 from '../../images/Contagion_2.png'
import {size} from "../../helpers/size";

const StyledBoxContagionArticle = styled(Box)({
    background: '#FFF',
    marginTop:  window.innerWidth > size.laptop ? 0 : '25px',
    height:  window.innerWidth > size.laptop ? '40%' : '400px',
    borderRadius: 16,
    padding: 35,
    boxSizing: "border-box"
})

const StyledItemBox = styled(Box)({
    display: "flex",
    marginTop: 15,
    '& img': {
        width: '150px',
        height: 'fit-content',
        border: 'none',
        padding: 0,
        background: '#f3f4fd',
        borderRadius: 16,
        marginRight: 10,
    },
})

const StyledItemTypography = styled(Typography)({
    fontWeight: "bold",
    fontSize: '18px'
})

const StyledItemP = styled('p')({
    color: '#a1a1ad'
})

const ContagionArticle = () => {

    const items = [
        {
            title: 'Human Contact',
            img: image1,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
        },
        {
            title: 'Air Transmission',
            img: image2,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
        },
    ]

    const renderItems = () => {
        return items.map((opt, index) => {
            return <StyledItemBox key={`item${index}`}>
                <img alt={`Contagion Image ${index + 1}`} src={opt.img}/>
                <Box>
                    <StyledItemTypography>{opt.title}</StyledItemTypography>
                    <StyledItemP>
                        {opt.text}
                    </StyledItemP>
                </Box>
            </StyledItemBox>
        })

    }

    return (
        <StyledBoxContagionArticle>
            <Typography variant={'h5'}>CONTAGION</Typography>
            {renderItems()}
        </StyledBoxContagionArticle>
    )
}

export default ContagionArticle
