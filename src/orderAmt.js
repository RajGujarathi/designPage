import Card from 'react-bootstrap/Card';
import { Container, Row ,Col,InputGroup,FormControl} from 'react-bootstrap';

const OrderAmt=()=>{
    return(
        <>
      <div className=" border border-2 bigfont" >
    <Row className="m-1"style={{width:"inherit"}}>
    <div className="p-1" className="serv ">
      
    <span style={{textAlign:'left'}} >Total items</span>
    <span></span>
    <span style={{textAlign:"right"}}>2 Iems</span>
    </div>
    <br/>
    </Row>
    <Row className="m-1" style={{width:"inherit"}}>
    <div className="p-1" className="serv">
      
    <span style={{textAlign:"left"}} >Total Weight</span>
    <span></span>
    <span style={{textAlign:"right"}}>2,2000 Grams</span>
    </div>
    <br/></Row>
    <Row className="m-1" style={{width:"inherit"}}>
    <div className="p-1" className="serv">
      
    <span style={{textAlign:"left"}} >Total Order</span>
    
    <span style={{textAlign:"right"}}>Rp.</span>
    
    <span style={{textAlign:"right"}}>360.000</span>
    </div>
    <br/></Row>
    <Row className="m-1" style={{width:"inherit"}}> 
    <div className="p-1" className="serv">
    <span style={{textAlign:"left"}} >Voucher</span>
    <span style={{textAlign:"right"}}>Rp.</span>
    <span style={{textAlign:"right",color:'rgb(0, 255, 115)'}}>0</span>
    <br/>
    </div>
    </Row>
    <Row className="m-1" style={{width:"inherit"}}>
    <div className="p-1" className="serv">
    <span style={{textAlign:"left"}} >Shipping Cost</span>
    <span style={{textAlign:"right"}}>Rp.</span>
    <span style={{textAlign:"right"}}>0</span>
    </div>
    <br/>
    </Row>
    <Row className="m-1" style={{width:"inherit"}}>
    <div className="p-1" className="serv">
    <span style={{textAlign:"left"}} >Grand Total</span>
    <span style={{textAlign:"right",color:'red'}}>Rp.</span>
    <span style={{textAlign:"right",color:'red'}}>360.000</span>
    </div>
    
    </Row>
    </div>

    <div className='ml-3 '>
      <Row style={{width:'fit-content'}}>
      <h1 className="bigfont border border-2" style={{textAlign:'left'}}>
        With Payment Lagree with terms & conditions
</h1>
      </Row>
      
    </div>

<div>
  <button id="butt">
    FINISH
  </button>
</div>


 
        
        </>
    )
}
export default OrderAmt;