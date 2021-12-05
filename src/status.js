import Card from 'react-bootstrap/Card';
import { Container, Row ,Col,InputGroup,FormControl} from 'react-bootstrap';

const dropship=()=>{
    return(
        <>
        <Card style={{ width: '100%' }} className="border border-2 ">
          <Card.Body >
        <Row style={{width:"auto",display:'flex',marginRight:'auto'}}>
            <Card.Title className="text-left m-1 h" style={{display:'flex'}}>Dropship 
           <span style={{marginLeft: 'auto',justifyContent:'flex-end'}}> <label className="switch " >
          <input type="checkbox"/>
          <span class="slider round"></span>
        </label></span>
        </Card.Title>
        
         </Row>
          </Card.Body>
        </Card>
        
        
        </>
    )
}
export default dropship;