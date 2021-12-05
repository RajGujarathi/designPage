import Card from 'react-bootstrap/Card';
import { Container, Row ,Col,InputGroup,FormControl} from 'react-bootstrap';
import product from './pic/abc.jpg'

const Order=()=>{
    return(
        <>
    <div className="border border-2 ">
<Card style={{ width: '100%' ,borderStyle:'hidden',height:  "20%"}} className="" >
  <h1 style={{}} className="pl-3 pt-2 h">Order Details</h1>
  <Row className='no-gutters ' style={{width:"inherit"}}>
  <Col md={3} lg={3} sm={3} xs={3} style={{border:'1px solid gray',height:'50%',overflow:'hidden',borderStyle: 'hidden'}} >
  <Card.Img variant="top" src={product} style={{verticalAlign: 'center',paddingTop:'auto',height:'6rem',width:'5rem'}} className="ml-3"/>
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
  <Row style={{width:"inherit"}}>
  <InputGroup className="mb-1" >
    <FormControl 
      placeholder="Optional message here"
      aria-label="Username"
      aria-describedby="basic-addon1"
      style={{borderTop:'hidden',borderLeft:'hidden',borderRight:'none',borderBottom:'1px solid slategrey'}}
    />
  </InputGroup>

  </Row>
</Card>

<Card style={{ width: '100%',borderStyle:'hidden'}} className="">
  <Row className='no-gutters' style={{width:"inherit"}}>
  <Col md={3} lg={3} sm={3} xs={3} style={{border:'1px solid gray',height:'50%',overflow:'hidden',borderStyle: 'hidden'}}>
  <Card.Img variant="top" src={product} style={{verticalAlign: 'center',paddingTop:'auto',height:'6rem',width:'5rem'}} className="ml-3"/>
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
  <Row style={{width:"inherit"}}>
  <InputGroup className="mb-1" >
    <FormControl 
      placeholder="Optional message here"
      aria-label="Username"
      aria-describedby="basic-addon1"
      style={{borderTop:'hidden',borderLeft:'hidden',borderRight:'none',borderBottom:'1px solid slategrey'}}
    />
  </InputGroup>

  </Row>
</Card>
</div>


 
        
        </>
    )
}
export default Order;