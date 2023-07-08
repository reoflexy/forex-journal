import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {Button, Accordion,Form, Navbar,NavDropdown,ListGroup,Nav,Container,Card, Row,Col} from 'react-bootstrap'
import NavComponent from '../components/nav';


export default function Upcoming() {

    const navigate = useNavigate();

    const initialFormData = Object.freeze({
        tradename: "",
        tradeType: "",
        note : "",
       // tradeDate : "12/22/2022"
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
        if (formData.tradename == "" || formData.tradename == null ) {
          window.scrollTo(0,0)
        return setError('Enter Name!');
        }

    
          if (formData.note == "" || formData.note == null ) {
            window.scrollTo(0,0)
          return setError('Input analysis!');
          }
        
        
    
        const headers = {
          //'X-CSRF-TOKEN': csrfToken,
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Credentials':true,
          'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        }
    
        axios.post('http://localhost:5000/API/fxjournal/addupcoming', {
            name: formData.tradename,
            tradeType: formData.tradetype,
            note : formData.note,
            tradeDate : new Date()
        },{headers})
        .then((response) => {
          console.log(response);
          if(response.data.message == 'success'){
            setFormData(initialFormData)
            setSuccess('Upcoming Trade created')
            //show animation
          }
          
          //navigate('/otp',{state:{username: formData.username, password: formData.password} })
        }, (error) => {
          console.log(error);
          return setError('Invalid credentials');
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
        <Form.Label>Trade Name</Form.Label>
        <Form.Control onChange={handleChange} name='tradename' placeholder="enter lot size" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Trade type</Form.Label>
        <Form.Select onChange={handleChange} name='tradetype'>
          <option value='Technical Analysis'>Technical Analysis</option>
          <option value='News'>News</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Analysis/Note</Form.Label>
        <Form.Control onChange={handleChange} name='note' as="textarea" placeholder="analysis" />
      </Form.Group>
      <Form.Group className="mb-3">
     </Form.Group>

     <Button type='submit' onClick={HandleSubmit}  variant="primary">Submit</Button>

    </div>

    </>
  )
}
