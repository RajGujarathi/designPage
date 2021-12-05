import Card from 'react-bootstrap/Card';
import { Container, Row ,Col,InputGroup,FormControl} from 'react-bootstrap';

const head=()=>{
    return(
        <div >
          <Card style={{ width: '100%' }} className=" border border-2" >
  <Card.Body >
      <Row style={{width:"inherit"}}>
    
    <Card.Title className="text-left  h" style={{display:'flex'}}>Delivery Address
    <span className="float-right " style={{marginLeft: 'auto'}}><span class="material-icons" >
navigate_next
</span></span></Card.Title>

  

</Row>
<Row style={{width:"inherit"}}>
    <Card.Subtitle className="text-left text-secondary sub">Please Choose destination address</Card.Subtitle>
 </Row>
  </Card.Body>
</Card>
</div>    
)
}

export default head;