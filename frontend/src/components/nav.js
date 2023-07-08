import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {Button, Accordion,Form, Navbar,NavDropdown,Nav,Container,Card, Row,Col} from 'react-bootstrap'

export default function NavComponent() {


    return (
        <>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">FXJournal</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/addtrade">New </Nav.Link>
            <Nav.Link href="/upcoming">Upcoming </Nav.Link>
            <Nav.Link href="/history">History</Nav.Link>
            <Nav.Link href="/plan">Plan</Nav.Link>
            <Nav.Link href="/equity">Equity</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </>
    )
}
