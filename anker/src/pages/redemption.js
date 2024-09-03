import styles from './leaderboard.module.css'
import Header from '../components/common/header';
import RedemptionOverview from '../components/RedemptionOverview';
import Ordermanagement from '../components/Ordermanagement';
import Productmanagement from '../components/Productmanagement';

import { useState } from 'react';


export default function Redemption (){
 

    const [activeComponent, setActiveComponent] = useState('overview');

    const renderComponent = () => {
      switch (activeComponent) {
        case 'overview':
          return <RedemptionOverview />;
        case 'product':
         return <Productmanagement />;
         case 'order':
          return <Ordermanagement />;
        default:
          return null;
      }
    };

    return(
        <>
          <Header/>
          <hr ></hr>
          <div className={styles.Container}>
            <div style={{display:"flex",alignItems:"center",gap:"5px"}}>
<img src="./images/bluearrow.png" style={{height:"15px"}}></img>
            <p>Dashboard / Redemption Overview</p>
            </div>
            <div style={{display:'flex',gap:'20px'}}>
<p onClick={() => setActiveComponent('overview')}>Redemption Overview</p>
<p onClick={() => setActiveComponent('product')}>Product management</p>
<p onClick={() => setActiveComponent('order')}>Order management</p>
            </div>

           

<div>
          {renderComponent()}
        </div>
            </div>
        </>
    )
}