import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {Button, Accordion,Form, Navbar,NavDropdown,ListGroup,Nav,Container,Card, Row,Col} from 'react-bootstrap'


export default function TradeList() {
    const [trades,setTrades] = useState([])

    useEffect(() => {

        const headers = {
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Credentials':true,
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          }
      
           axios.get('http://localhost:5000/API/fxjournal/gettrades',
          {headers})
          .then((response) => {
            console.log(response.data.data);
            setTrades(response.data.data)
            //navigate to dashboard
            
            //navigate('/otp',{state:{username: formData.username, password: formData.password} })
          }, (error) => {
            console.log(error);
           // return setError(error);
          });

    },[])


  return (
    <div>
<div style={{width: '100%' }} >
    <Row>
        {trades.length > 0 && trades.map((item,index) => {
                return (
                    <Col key={index} lg={3} md={3} sm={6} xs={12} >
        <Card className='m-1'>
      <Card.Body>
        <Card.Title>{item.pair} - {item.action} ({item.lotSize}) </Card.Title>
        <Card.Text>
          {item.expectedOutcome}
        </Card.Text>
        <Card.Text>
        {item.actualOutcome}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item> {item.entryPrice}</ListGroup.Item>
        <ListGroup.Item> {item.stopLoss}</ListGroup.Item>
        <ListGroup.Item> {item.finalOutcome}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#"> {item.profit}</Card.Link>
        <Card.Link href="#"> {item.entryDate}</Card.Link>
      </Card.Body>
    </Card>
        </Col>
                )
            })
        }
        
  
    </Row>

</div>

    </div>
  )
}
