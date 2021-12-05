import Card from 'react-bootstrap/Card';
import { Container, Row ,Col,InputGroup,FormControl} from 'react-bootstrap';

const Payment=()=>{
    return(
        <>
     <Card style={{ width: '100%' ,height:'20%'}} className="">
  <Card.Body >
      <Row style={{width:"inherit"}}>
    
    <Card.Title className="text-left  h" style={{display:'flex'}}>Payment Option 
    <span className="float-right" style={{marginLeft: 'auto'}}><span class="material-icons" >
navigate_next
</span></span></Card.Title>
</Row>
<Row style={{width:"inherit"}}>
    <Card.Subtitle className="text-left  text-secondary sub">Please Choose your payment method.</Card.Subtitle>
 </Row>
  </Card.Body>
</Card>


 
        
        </>
    )
}
export default Payment;