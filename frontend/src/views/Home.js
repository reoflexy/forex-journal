import React from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {Button, Accordion,Form, Navbar,NavDropdown,Nav,Container,Card, Row,Col} from 'react-bootstrap'
import NavComponent from '../components/nav'
import TradeList from '../components/TradeList'

export default function Home(){


    return (
        <>
        <NavComponent/>
        <TradeList/>
        
        </>
    )
}