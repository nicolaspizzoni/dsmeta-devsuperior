import styled from 'styled-components'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export const Container = styled.div`
    background-color: #283142;
    border-radius: 10px;
    padding: 30px 10px;
    h2 {
        color: #676FFF;
        font-size: 24px;
        margin-bottom: 20px;
    }
    @media (min-width: 576px) {
        padding: 35px;
    }
    
`

export const TextInputContainer =  styled.div`
    margin-bottom: 16px;
    max-width: 300px;
`

export const SalesTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    thead {
        height: 55px;
        font-size: 16px;
        color: #E9E9E9;
        font-weight: bold;
        th:nth-of-type(2) {
            display: none;
        }
        @media (min-width: 576px){
            th:nth-of-type(2) {
                display: table-cell;
            }
        }
    }

    tbody {
        font-size: 14px;
        font-weight: 400;
        color: #CFCFCF;
        text-align: center;
        tr {
            height: 74px;
            border-top: 1px solid #5F6E82;
            td {
                div {
                    display: flex;
                    justify-content: center;
                }
            }
            td:nth-of-type(2) {
                display: none;
            }
            @media (min-width: 576px){
                td:nth-of-type(2) {
                    display: table-cell;
                }
                height: 55px;
            }
        }

        tr:nth-child(odd){
            background-color: #242C3B;
        }

        tr:hover > td {
            background-color: #384459;
        }
        @media (min-width: 576px){
            font-size: 18px;
        }
    }
`

export const ShowHead = styled.th`
    display: none;
    @media (min-width: 992px){
        display: table-cell;
    }
`

export const ShowColumn = styled.td`
    display: none;
    @media (min-width: 992px){
        display: table-cell;
    }
`

export const Date = styled(DatePicker)`
    border: 1px solid #384459;
    height: 46px;
    background-color: #1B2531;
    border-radius: 5px;
    width: 100%;
    color: #9AAABE;
    padding: 0px 20px;
    font-size: 18px;
`