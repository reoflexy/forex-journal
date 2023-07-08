import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {Button, Accordion,Form, Navbar,NavDropdown,ListGroup,Nav,Container,Card, Row,Col} from 'react-bootstrap'


export default function PlanItem() {
    const [trades,setTrades] = useState([])

    useEffect(() => {

        const headers = {
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Credentials':true,
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          }
      
           axios.get('http://localhost:5000/API/fxjournal/gettradeplan',
          {headers})
          .then((response) => {
            console.log(response.data.data);
            setTrades(response.data.data);

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
                
                  {
                    if(item.profit == "" ) {
                      return(
                        <>
                        </>
                      )
                    
                    }
                    else{
                      return(
                        <Col className='mx-auto' key={index} lg={6} md={6} sm={6} xs={12} >
        <Card className='m-1'>
      <Card.Body>
        <Card.Title>Trded Pair - {item.pair}/USD  </Card.Title>
        <Card.Text>
         News trades - {item.news}
        </Card.Text>
        <Card.Text>
       Technical analysis - {item.TA}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item> stop loss - {item.stopLoss}</ListGroup.Item>
        <ListGroup.Item> Max daily trades - {item.maxTradesPerDay}</ListGroup.Item>
        <ListGroup.Item>Percentage per trade(News/Technical analysis) - {item.ppt}</ListGroup.Item>
        <ListGroup.Item>Profit Aim - 10%</ListGroup.Item>
      
      </ListGroup>
      <Card.Body>
      </Card.Body>
    </Card>
                     </Col>
                      )

                    }

                  }

                    
})
           
        }
        
  
    </Row>

</div>

    </div>
  )
}
