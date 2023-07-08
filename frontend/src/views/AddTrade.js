import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {Button, Accordion,Form, Navbar,NavDropdown,ListGroup,Nav,Container,Card, Row,Col} from 'react-bootstrap'
import NavComponent from '../components/nav';


export default function AddTrade() {

    const navigate = useNavigate();

    const initialFormData = Object.freeze({
      pair: "",
      action: "",
      tradetype: "",
      lotsize: "",
      entryprice: '',
      stoploss: '',
      takeprofit: '',
      expectedOutcome: "",
	//   actualOutcome: "",
	//   profit : "",
	//   finalOutcome : "",
	//   entryDate : new Date()
    });
  
    const [formData, setFormData] = useState(initialFormData);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [loading, setLoading] = useState(false);

    function handleChange(e) {
        //console.log('working')
          setFormData({...formData,[e.target.name]: e.target.value.trim()})
          // alert('working')
          console.log(formData)
          
      }

      const HandleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        if (formData.pair == "" || formData.pair == null ) {
          window.scrollTo(0,0)
        return setError('Select Valid pair!');
        }

        if (formData.action == "" || formData.action == null ) {
            window.scrollTo(0,0)
          return setError('Select action!');
          }

          if (formData.lotsize == "" || formData.lotsize == null ) {
            window.scrollTo(0,0)
          return setError('Input lot size!');
          }
    
          if (formData.expectedOutcome == "" || formData.expectedOutcome == null ) {
            window.scrollTo(0,0)
          return setError('Input analysis!');
          }
        
        
    
        const headers = {
          //'X-CSRF-TOKEN': csrfToken,
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Credentials':true,
          'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        }
    
        axios.post('http://localhost:5000/API/fxjournal/addtrade', {
            pair: formData.pair,
            action: formData.action,
            tradeType: formData.tradetype,
            lotSize: formData.lotsize,
            entryPrice: formData.entryprice,
            stopLoss: formData.stoploss,
            takeprofit: formData.takeprofit,
            expectedOutcome: formData.expectedOutcome,
             actualOutcome: "",
             profit : "",
             finalOutcome : "",
             entryDate : new Date()
        },{headers})
        .then((response) => {
          console.log(response);
          if(response.data.message == 'success'){
            setFormData(initialFormData)
            setSuccess('Trade created')
            //show animation
          }
          
          //navigate('/otp',{state:{username: formData.username, password: formData.password} })
        }, (error) => {
          console.log(error);
          return setError('Invalid login credentials');
        });
    
    
      };


  return (
    <>
    <NavComponent/>
    <div className='mx-auto d-block mt-3' style={{width: '50%'}}>
 {/* <Form.Group className="mb-3">
        <Form.Label>Pair</Form.Label>
        <Form.Control placeholder="select pair" />
      </Form.Group> */}
      <h3 style={{color: 'red'}}>{error}</h3>
      <Form.Group className="mb-3">
        <Form.Label>Pair</Form.Label>
        <Form.Select name="pair" onChange={handleChange} >
          <option value=''>select pair</option>
          <option  value='XAU/USD'>XAU/USD</option>
          <option   value='EUR/USD'>EUR/USD</option>
          <option  value='GBP/USD'>GBP/USD</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Action</Form.Label>
        <Form.Select onChange={handleChange} name='action' >
          <option value='BUY'>BUY</option>
          <option value='SELL'>SELL</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Trade type</Form.Label>
        <Form.Select onChange={handleChange} name='tradetype'>
          <option value='Technical Analysis'>Technical Analysis</option>
          <option value='News'>News</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Lot size</Form.Label>
        <Form.Control onChange={handleChange} name='lotsize' placeholder="enter lot size" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Entry price</Form.Label>
        <Form.Control name="entryprice" onChange={handleChange}  placeholder="Enter entry price" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Stop loss</Form.Label>
        <Form.Control onChange={handleChange} name='stoploss' placeholder="Enter stop loss" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Take profit</Form.Label>
        <Form.Control onChange={handleChange} name='takeprofit' placeholder="enter take profit" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Analysis/expected outcome</Form.Label>
        <Form.Control onChange={handleChange} name='expectedOutcome' as="textarea" placeholder="analysis" />
      </Form.Group>
      <Form.Group className="mb-3">
     </Form.Group>

     <Button type='submit' onClick={HandleSubmit}  variant="primary">Submit</Button>

    </div>
    </>
  )
}
