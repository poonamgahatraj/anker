import styles from './leaderboard.module.css'
import Header from '../components/common/header'
import Storelist from '../components/storelist';
import User from '../components/user';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';  


export default function Configuration (){
    const [activeComponent, setActiveComponent] = useState('storelist');
    const navigate = useNavigate();
    
    const renderComponent = () => {
        switch (activeComponent) {
          case 'storelist':
            return <Storelist />;
          case 'user':
           return <User />;
          
          
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
<img src=".\images\leftarrow.jpg" style={{height:"15px"}}></img>
            <p style={{color:"#001689"}}onClick={() => navigate('/dashboard')}  >Dashboard /</p><span>Configuration / </span> <span>{activeComponent}</span>
            </div>
            <div style={{display:'flex',gap:'20px'}}>
<p onClick={() => setActiveComponent('storelist')}style={{
                            cursor: 'pointer',
                            color: activeComponent === 'storelist' ? '#001689' : 'black',
                            borderBottom: activeComponent === 'storelist' ? '2px solid #001689' : 'none'
                        }}>Storelist</p>
<p onClick={() => setActiveComponent('user')}style={{
                            cursor: 'pointer',
                            color: activeComponent === 'user' ? '#001689' : 'black',
                            borderBottom: activeComponent === 'user' ? '2px solid #001689' : 'none'
                        }}>Userlist</p>
<p>Rules</p>
            </div>
            <div>
          {renderComponent()}
        </div>
          
            </div>
          
        </>
    )
}