import React, {useEffect, useState} from 'react';
import {
    Box,
    styled,
    Tab,
    Tabs,
    TextField
} from "@mui/material";
import {DailyInfoInterface} from "../../store/interfaces/dailyInfoInterface";
import {DataGrid} from "@mui/x-data-grid";
import {firstLetterToUpperCase} from "../../helpers/general";
import {Search} from "@mui/icons-material";
import '../../styles/DashboardTable.css'
import {size} from "../../helpers/size";

interface DashboardTableInterface {
    dayFirst: DailyInfoInterface[];
    daySecond: DailyInfoInterface[];
}

const StyledTableBox = styled(Box)({
    margin: window.innerWidth > size.laptop ? '25px 25px 0 0 ' : '25px 0 0 0 ',
    borderRadius: 16,
    background: '#FFF',
    height:  window.innerWidth > size.laptop ? 'calc(50% - 50px)' : '450px',
})

const StyledHeaderTableBox = styled(Box)({
    background: '#e5ddf5',
    height: 65,
    display: "flex",
    justifyContent: "space-between",
    borderRadius: '16px 16px 0 0',
    padding: '16px 40px',
    boxSizing: 'border-box'
})

const StyledTab = styled(Tab)({
    height: '30px',
    minHeight: '30px',
    '&.Mui-selected': {
        background: '#8430ff',
        color: '#FFF',
        borderRadius: 16
    }
})

const StyledSearchBox = styled(Box)({
    background: '#FFF',
    borderRadius: 16,
    padding: '0 15px'
})

const DashboardTable = ({dayFirst, daySecond}: DashboardTableInterface) => {
    const [date, setDate] = useState<number>(0);
    const [rows, setRows] = useState<any>([]);

    const handleSearch = (value: string): void => {
        if (!!value) {
            setRows([...getRows().filter((opt) => {
                return opt.countryRegion.toLowerCase().includes(value.toLowerCase())
            })])
        } else {
            setRows([...getRows()])
        }
    }

    const getColumns = () => {
        return Object.keys(dayFirst[0]).map((opt) => {
            return {
                field: opt,
                headerName: firstLetterToUpperCase(opt),
                width: opt.length * 10 < 120 ? 120 : opt.length * 10
            }
        })
    }

    const getRows = () => {
        return (date === 0 ? dayFirst : daySecond).map((opt: DailyInfoInterface, index: number) => {
            return {...opt, id: index}
        })
    }

    useEffect(() => {
        setRows([...getRows()])
    }, [date])

    const renderHeader = () => {
        return (
            <StyledHeaderTableBox>
                <Tabs
                    value={date}
                    textColor="secondary"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example"
                >
                    <StyledTab onClick={() => {
                        setDate(0)
                    }} value={0} label="May 15 2020"/>
                    <StyledTab onClick={() => {
                        setDate(1)
                    }} value={1} label="May 16 2020"/>
                </Tabs>
                <StyledSearchBox>
                    <TextField
                        InputProps={{disableUnderline: true}}
                        placeholder='Search By Country'
                        onChange={(e) => {
                            handleSearch(e.target.value)
                        }} variant={"standard"}/>
                    <Search style={{
                        marginTop: 5,
                        cursor: 'pointer'
                    }} htmlColor='#a685e2'/>
                </StyledSearchBox>
            </StyledHeaderTableBox>
        )
    }

    const renderTable = () => {
        if (!(date === 0 ? dayFirst : daySecond).length) {
            return null
        }
        return <DataGrid
            style={{
                height: 'calc(100% - 65px)',
                borderRadius: '0 0 16px 16px',
            }}
            rows={rows}
            hideFooterPagination={true}
            hideFooter={true}
            columns={[...getColumns()]}
        />
    }

    return (
        <StyledTableBox>
            {renderHeader()}
            {renderTable()}
        </StyledTableBox>
    )
}

export default DashboardTable
