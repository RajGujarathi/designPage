import logo from './logo.svg';
import './App.css';
import Card from 'react-bootstrap/Card';

import Top from './top'
import Head  from './head'
import Dropship from './status'
import Shipping from './Shippinop'
import Payment  from './payment';
import Order from './OrderDetails';
import Voucher from './Voucher';
import OrderAmt from './orderAmt';
function App() {
  return (
    <div >
     <Top/>
     <Head/>
     <Dropship></Dropship>
     <Shipping></Shipping>
     <Payment/>
     <Order/>
     <Voucher></Voucher>
     <OrderAmt/>
    </div>
  );
}

export default App;
