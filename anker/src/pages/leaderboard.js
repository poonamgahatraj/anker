import styles from './leaderboard.module.css'
import Header from '../components/common/header';
import LearningPortalOverview from '../components/learningportaloverview';
import Panel from '../components/panel';
import Submission from '../components/submission';
import { useState } from 'react';
// import Leadershiptable from '../components/leadershiptable';
// import Reusable_Table from '../components/common/reusabletable';
// import { Table } from "antd";

export default function Leaderboard (){
    // const [showDropdown, setShowDropdown] = useState(false);
    // const [showDropdown2, setShowDropdown2] = useState(false);
    const [activeComponent, setActiveComponent] = useState('overview');

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
<img src=".\images\bluearrow.png" style={{height:"15px"}}></img>
            <p>Dashboard / Leaderboard Overview</p>
            </div>
            <div style={{display:'flex',gap:'20px'}}>
<p onClick={() => setActiveComponent('overview')}>Leaderboard Overview</p>
<p onClick={() => setActiveComponent('panel')}>Leaderboard Panel</p>
<p onClick={() => setActiveComponent('submission')}>Submissions</p>
            </div>

          

<div>
          {renderComponent()}
        </div>
            </div>
        </>
    )
}