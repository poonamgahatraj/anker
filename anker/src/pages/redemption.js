import styles from './leaderboard.module.css'
import Header from '../components/common/header';
import RedemptionOverview from '../components/RedemptionOverview';
import Ordermanagement from '../components/Ordermanagement';
import Productmanagement from '../components/Productmanagement';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


export default function Redemption (){
 

    const [activeComponent, setActiveComponent] = useState('overview');
    const navigate = useNavigate();
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
<img src=".\images\Back icon (1).svg" style={{height:"15px"}}></img>
            <p style={{color:"#001689"}} onClick={() => navigate('/dashboard')}>Dashboard</p><span>/{activeComponent}</span>
            </div>
            <div style={{display:'flex',gap:'20px'}}>
<p onClick={() => setActiveComponent('overview')}style={{
                            cursor: 'pointer',
                            color: activeComponent === 'overview' ? '#001689' : 'black',
                            borderBottom: activeComponent === 'overview' ? '2px solid #001689' : 'none'
                        }}>Redemption Overview</p>
<p onClick={() => setActiveComponent('product')}style={{
                            cursor: 'pointer',
                            color: activeComponent === 'product' ? '#001689' : 'black',
                            borderBottom: activeComponent === 'product' ? '2px solid #001689' : 'none'
                        }}>Product management</p>
<p onClick={() => setActiveComponent('order')}style={{
                            cursor: 'pointer',
                            color: activeComponent === 'order' ? '#001689' : 'black',
                            borderBottom: activeComponent === 'order' ? '2px solid #001689' : 'none'
                        }}>Order management</p>
            </div>

           

<div>
          {renderComponent()}
        </div>
            </div>
        </>
    )
}