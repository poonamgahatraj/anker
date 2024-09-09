import styles from './leaderboard.module.css'
import Header from '../components/common/header';
import LearningPortalOverview from '../components/learningportaloverview';
import Panel from '../components/panel';
import Submission from '../components/submission';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import Leadershiptable from '../components/leadershiptable';
// import Reusable_Table from '../components/common/reusabletable';
// import { Table } from "antd";

export default function Leaderboard (){
    // const [showDropdown, setShowDropdown] = useState(false);
    // const [showDropdown2, setShowDropdown2] = useState(false);
    const [activeComponent, setActiveComponent] = useState('overview');
    const navigate = useNavigate();

  const renderComponent = () => {
    switch (activeComponent) {
      case 'overview':
        return <LearningPortalOverview/>;
      case 'panel':
       return <Panel />;
       case 'submission':
        return <Submission />;
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
            <p style={{color:"#001689"}} onClick={() => navigate('/dashboard')}>Dashboard </p><span>/{activeComponent}</span>
            </div>
            <div style={{display:'flex',gap:'20px'}}>
<p onClick={() => setActiveComponent('overview')}style={{
                            cursor: 'pointer',
                            color: activeComponent === 'overview' ? '#001689' : 'black',
                            borderBottom: activeComponent === 'overview' ? '2px solid #001689' : 'none'
                        }}>Leaderboard Overview</p>
<p onClick={() => setActiveComponent('panel')}style={{
                            cursor: 'pointer',
                            color: activeComponent === 'panel' ? '#001689' : 'black',
                            borderBottom: activeComponent === 'panel' ? '2px solid #001689' : 'none'
                        }}>Leaderboard Panel</p>
<p onClick={() => setActiveComponent('submission')}style={{
                            cursor: 'pointer',
                            color:activeComponent === 'submission' ? '#001689' : 'black',
                            borderBottom:activeComponent === 'submission' ? '2px solid #001689' : 'none'
                        }}>Submissions</p>
            </div>

          

<div>
          {renderComponent()}
        </div>
            </div>
        </>
    )
}