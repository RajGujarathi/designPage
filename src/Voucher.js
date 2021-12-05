import Card from 'react-bootstrap/Card';
import { Container, Row ,Col,InputGroup,FormControl} from 'react-bootstrap';

const Voucher=()=>{
    return(
        <div className="m-1"  style={{width:'auto'}}>
     <InputGroup className="p-1"  className="" >
    <FormControl 
      placeholder="Voucher Code"
      aria-label="Username"
      aria-describedby="basic-addon1"
      style={{borderTop:'hidden',borderLeft:'hidden',borderRight:'none',borderBottom:'1px solid slategrey'}}
    />
    
  <button style={{borderStyle:'hidden',color:'slategery',borderBottom:'1px solid slategrey'}}>Apply</button>
  </InputGroup>


 
        
        </div>
    )
}
export default Voucher;