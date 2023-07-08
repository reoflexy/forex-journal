import React from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {Button, Accordion,Form, Navbar,NavDropdown,Nav,Container,Card, Row,Col} from 'react-bootstrap'
import NavComponent from '../components/nav'
import HistoryList from '../components/HistoryList'

export default function History(){


    return (
        <>
        <NavComponent/>
        <HistoryList/>
        
        </>
    )
}