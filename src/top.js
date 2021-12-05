//import React from 'react';
//import ReactDOM from 'react-dom';
//import { Button } from '@material-ui/core'

//import "~bootstrap/scss/bootstrap";
import Button from 'react-bootstrap/Button'
//import Box from '@mui/material/Box';
import { Container, Row ,Col,InputGroup,FormControl} from 'react-bootstrap';
import product from './pic/abc.jpg'
import Card from 'react-bootstrap/Card';

import "./top.css"
import back from "./back.svg"

const Top=()=>{
   
return (
   <div className="" style={{backgroundColor:'red',marginRight:'0'}}>
    <Container fluid className="top" style={{padding:'2% 1% 1% 1%'}}>
  <Row style={{width:"inherit"}}>
  <Col  sm={1} xs={1} style={{marginRight: 'auto'}}>      
      <div ><button className="but" sm={1} xs={1} >
      <span class="material-icons" style={{color:"white",verticalAlign: 'baseline'}}>
keyboard_backspace
</span>
      {/* <img src={back} alt="hii" className={'img'}/> */}
    </button>  </div>    
            </Col>
    <Col sm={10} xs={10}>    <h1 className="data" style={{fontSize:'1.3rem'}}>ORDER INFORMATION</h1>
    </Col>
    </Row>

{/* First card */}
  {/* 
  <Card style={{ width: '100%' ,height:'20%'}} className="m-2">
  <Card.Body >
      <Row>
    
    <Card.Title className="text-left m-1" style={{display:'flex'}}>Delivery Address
    <span className="float-right" style={{marginLeft: 'auto'}}><span class="material-icons" >
navigate_next
</span></span></Card.Title>

  

</Row>
<Row>
    <Card.Subtitle className="text-left m-1 text-secondary">Please Choose destination address</Card.Subtitle>
 </Row>
  </Card.Body>
</Card> */}

{/* DropupShip status */}

{/* 
<Card style={{ width: '100%' ,height:'20%'}} className="m-2">
  <Card.Body >
<Row>
    <Card.Title className="text-left m-1" style={{display:'flex'}}>Dropship 
   <span style={{marginLeft: 'auto'}}> <label className="switch " >
  <input type="checkbox"/>
  <span class="slider round"></span>
</label></span>
</Card.Title>

 </Row>
  </Card.Body>
</Card>
 */}


{/* Shipping Options */}

{/* <Card style={{ width: '100%' ,height:'20%'}} className="m-2">
  <Card.Body >
      <Row>
    
    <Card.Title className="text-left m-1" style={{display:'flex'}}>Shipping Option 
    <span className="float-right" style={{marginLeft: 'auto'}}><span class="material-icons" >
navigate_next
</span></span></Card.Title>
</Row>
<Row>
    <Card.Subtitle className="text-left m-1 text-secondary">Please Choose your shipping method.</Card.Subtitle>
 </Row>
  </Card.Body>
</Card>

 */}
{/* Payment OPtions */}

{/* <Card style={{ width: '100%' ,height:'20%'}} className="m-2">
  <Card.Body >
      <Row>
    
    <Card.Title className="text-left m-1" style={{display:'flex'}}>Payment Option 
    <span className="float-right" style={{marginLeft: 'auto'}}><span class="material-icons" >
navigate_next
</span></span></Card.Title>
</Row>
<Row>
    <Card.Subtitle className="text-left m-1 text-secondary">Please Choose your payment method.</Card.Subtitle>
 </Row>
  </Card.Body>
</Card> */}

{/* <div className="border border-2">
<Card style={{ width: '100%' ,borderStyle:'hidden'}} className="m-2">
  <h1 style={{fontSize:'1.5rem',textAlign:'left'}} className="p-4">Order Details</h1>
  <Row className='no-gutters'>
  <Col md={3} lg={3} sm={3} xs={3} style={{border:'1px solid gray',height:'50%',overflow:'hidden',borderStyle: 'hidden'}}>
  <Card.Img variant="top" src={product} style={{verticalAlign: 'center',paddingTop:'auto',height:'6rem',width:'5rem'}}/>
  </Col>
  <Col md={8} lg={8} sm={8} xs={8 }>
  <Card.Body>
    <Card.Title style={{width:'100%',textAlign:'left'}} className="bigfont">ORIGNAL XYZONE BRAND TR1255</Card.Title>
    <Card.Text style={{backgroundColor:'rgb(210 , 196, 195)',textAlign:'left',width:'fit-content'}} className="bigfont">VERIENT :RED 40
    </Card.Text>
    <Card.Text style={{textAlign:'left',color:'slategrey'}} className="large">1 PCS (1.100gr) @ <span style={{color:'red',fontWeight:'600'}}>Rp 100.000</span>
    </Card.Text>  
  </Card.Body>
  </Col>
  </Row>
  <Row>
  <InputGroup className="mb-3"  className="p-4" >
    <FormControl 
      placeholder="Optional message here"
      aria-label="Username"
      aria-describedby="basic-addon1"
      style={{borderTop:'hidden',borderLeft:'hidden',borderRight:'none',borderBottom:'1px solid slategrey'}}
    />
  </InputGroup>

  </Row>
</Card>

<Card style={{ width: '100%',borderStyle:'hidden'}} className="m-2">
  <Row className='no-gutters'>
  <Col md={3} lg={3} sm={3} xs={3} style={{border:'1px solid gray',height:'50%',overflow:'hidden',borderStyle: 'hidden'}}>
  <Card.Img variant="top" src={product} style={{verticalAlign: 'center',paddingTop:'auto',height:'6rem',width:'5rem'}}/>
  </Col>
  <Col md={8} lg={8} sm={8} xs={8 }>
  <Card.Body>
    <Card.Title style={{width:'100%',textAlign:'left'}} className="bigfont">ORIGNAL XYZONE BRAND TR1255</Card.Title>
    <Card.Text style={{backgroundColor:'rgb(210 , 196, 195)',textAlign:'left',width:'fit-content'}} className="bigfont">VERIENT :RED 40
    </Card.Text>
    <Card.Text style={{textAlign:'left',color:'slategrey'}} className="large">1 PCS (1.100gr) @ <span style={{color:'red',fontWeight:'600'}}>Rp 100.000</span>
    </Card.Text>  
  </Card.Body>
  </Col>
  </Row>
  <Row>
  <InputGroup className="mb-3"  className="p-4" >
    <FormControl 
      placeholder="Optional message here"
      aria-label="Username"
      aria-describedby="basic-addon1"
      style={{borderTop:'hidden',borderLeft:'hidden',borderRight:'none',borderBottom:'2px solid slategrey'}}
    />
  </InputGroup>

  </Row>
</Card>
</div> */}

{/* <InputGroup className="mb-3"  className="p-4" >
    <FormControl 
      placeholder="Voucher Code"
      aria-label="Username"
      aria-describedby="basic-addon1"
      style={{borderTop:'hidden',borderLeft:'hidden',borderRight:'none',borderBottom:'1px solid black'}}
    />
    
  <button style={{borderStyle:'hidden',color:'slategery',borderBottom:'1px solid slategrey'}}>Apply</button>
  </InputGroup> */}
  
  {/* <div className="m-3 border border-2 bigfont" >
    <Row className="m-1">
    <div className="p-1" className="serv ">
      
    <span style={{textAlign:'left'}} >Total items</span>
    <span></span>
    <span style={{textAlign:"right"}}>2 Iems</span>
    </div>
    <br/>
    </Row>
    <Row className="m-1">
    <div className="p-1" className="serv">
      
    <span style={{textAlign:"left"}} >Total Weight</span>
    <span></span>
    <span style={{textAlign:"right"}}>2,2000 Grams</span>
    </div>
    <br/></Row>
    <Row className="m-1">
    <div className="p-1" className="serv">
      
    <span style={{textAlign:"left"}} >Total Order</span>
    
    <span style={{textAlign:"right"}}>Rp.</span>
    
    <span style={{textAlign:"right"}}>360.000</span>
    </div>
    <br/></Row>
    <Row className="m-1"> 
    <div className="p-1" className="serv">
    <span style={{textAlign:"left"}} >Voucher</span>
    <span style={{textAlign:"right"}}>Rp.</span>
    <span style={{textAlign:"right",color:'rgb(0, 255, 115)'}}>0</span>
    <br/>
    </div>
    </Row>
    <Row className="m-1">
    <div className="p-1" className="serv">
    <span style={{textAlign:"left"}} >Shipping Cost</span>
    <span style={{textAlign:"right"}}>Rp.</span>
    <span style={{textAlign:"right"}}>0</span>
    </div>
    <br/>
    </Row>
    <Row className="m-1">
    <div className="p-1" className="serv">
    <span style={{textAlign:"left"}} >Grand Total</span>
    <span style={{textAlign:"right",color:'red'}}>Rp.</span>
    <span style={{textAlign:"right",color:'red'}}>360.000</span>
    </div>
    
    </Row>
    </div>

    <div className='ml-3 '>
      <Row>
      <h1 className="bigfont border border-2" style={{textAlign:'left'}}>
        With Payment Lagree with terms & conditions
</h1>
      </Row>
      
    </div>

<div>
  <button id="butt">
    FINISH
  </button>
</div> */}

  {/* </div> */}




  </Container>
  </div>

)


}

export default Top;