import React from 'react';
import {Box, Button, styled} from "@mui/material";
import image from '../images/CovidHeaderIMG.png'
import '../styles/Header.css'
import {firstLetterToUpperCase} from "../helpers/general";
import {Search, NotificationsNoneOutlined} from "@mui/icons-material";

const HeaderBox = styled("header")({
    height: '85px',
    padding: 24,
    boxSizing: 'border-box',
    display: "flex"
})

const SelectorLink = styled('a')({
    color: '#726f83',
    position: "relative",
    fontWeight: "bold",
    cursor: "pointer",
    marginRight: 50,
    textDecoration: "none",
    ':first-of-type': {
        marginLeft: 50
    }
})

const SelectionBox = styled(Box)({
    display: "flex",
    alignItems: "center"
})


const Header = () => {

    const pages = ['dashboard', 'countries', 'contagion', 'reports', 'prevention']

    const getCurrentPage = (): string => {
        return window.location.pathname === '/' ? 'dashboard' : window.location.pathname.replace('/', '');
    }

    const renderSelector = () => {
        return (
            <SelectionBox>
                {pages.map((opt: any) => {
                    return (
                        <SelectorLink key={opt} href={opt !== 'dashboard' ? opt : '/'}
                                      className={getCurrentPage() === opt ? 'selectorActive' : ''}
                        >{firstLetterToUpperCase(opt)}</SelectorLink>
                    )
                })}
            </SelectionBox>
        )
    }


    return (
        <HeaderBox>
            <img alt='CovidHeaderIMG' src={image}/>
            {renderSelector()}
            <Button style={{
                marginLeft: 'auto',
                maxWidth: 34,
                minWidth: 34,
                marginRight: 20,
                borderRadius: '100%'
            }}>
                <Search style={{
                    background: '#f2f3fc',
                    borderRadius: '100%',
                    padding: 5,
                }} htmlColor='#a685e2'/>
            </Button>
            <Button style={{
                maxWidth: 34,
                minWidth: 34,
                borderRadius: '100%'
            }}>
                <NotificationsNoneOutlined style={{
                    background: '#f2f3fc',
                    borderRadius: '100%',
                    padding: 5
                }} htmlColor='#a685e2'/>
            </Button>

        </HeaderBox>
    )
}

export default Header
