import Header from "./common/header"
import styles from './dashboard.module.css'
import { Table } from "antd";
// import 'antd/dist/reset.css';
import Bargraph from "./bar"
import LineGraph from "./linegraph"
import { useState } from "react"
import { useNavigate } from 'react-router-dom'; 

export default function Dashboard (){
    const [showDropdown, setShowDropdown] = useState(false);
    const [showDropdown2, setShowDropdown2] = useState(false);
    const navigate = useNavigate();

    
    const dataSource = [
        {key: '1',username: 'Bibash Khadka', email: 'Bibash@testing.com.au', profileIcon: './images/profileicon.svg',AccountType: 'User',accountCreated: '07 Sep, 2022',retailer: 'JB Hi-Fi',storeName:'Moore Park',coursesStarted:'8',points:'./images/Add points.png',totalRedemption:'01'},
        {key: '1',username: 'Scott Singh', email: 'Bibash@testing.com.au', profileIcon: './images/profileicon.svg',AccountType: 'Admin',accountCreated: '07 Sep, 2022',retailer: 'Noel Leeming',storeName:'Blacktown Mega Centre',coursesStarted:'4',points:'./images/Add points.png',totalRedemption:'01'},
        {key: '1',username: 'Conor Keogh', email: 'Bibash@testing.com.au', profileIcon: './images/profileicon.svg',AccountType: 'Admin',accountCreated: '07 Sep, 2022',retailer: 'Harvey Norman',storeName:'Hurstville',coursesStarted:'3',points:'./images/Add points.png',totalRedemption:'01'},
        {key: '1',username: 'Bibash Khadka', email: 'Bibash@testing.com.au', profileIcon: './images/profileicon.svg',AccountType: 'User',accountCreated: '07 Sep, 2022',retailer: 'JB Hi-Fi',storeName:'Moore Park',coursesStarted:'8',points:'./images/Add points.png',totalRedemption:'01'},
        {key: '1',username: 'Conor Keogh', email: 'Bibash@testing.com.au', profileIcon: './images/profileicon.svg',AccountType: 'User',accountCreated: '07 Sep, 2022',retailer: 'Harvey Norman',storeName:'Moore Park',coursesStarted:'3',points:'./images/Add points.png',totalRedemption:'01'},
      
    ];

    const columns = [
        {
            title: 'Username',
            dataIndex: 'username',
            key: 'username',
            render: (text, record) => (
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <img src={record.profileIcon} alt="Profile" className={styles.profileIcon} style={{ height: '25px', width: '25px' }} />
                    <div style={{ textAlign: 'justify', fontSize: '14px' }}>
                        {record.username}<br />
                        {record.email}
                    </div>
                </div>
            ),
        },
        {
            title: 'Account type',
            dataIndex: 'AccountType',
            key: 'AccountType',
        },
        {
            title: 'Account created',
            dataIndex: 'accountCreated',
            key: 'accountCreated',
          
        },
        {
            title: 'Retailer',
            dataIndex: 'retailer',
            key: 'retailer',
        },
        {
            title: 'Store name',
            dataIndex: 'storeName',
            key: 'storeName',
        },
        {
            title: 'Courses started',
            dataIndex: 'coursesStarted',
            key: 'coursesStarted',
        },
        {
            title: 'Points',
            dataIndex: 'points',
            key: 'points',
            render: (text) => (
                <img src={text} alt="Points" className={styles.pointsIcon} style={{ height: '30px' }} />
            ),
        },
        {
            title: 'Total redemption',
            dataIndex: 'totalRedemption',
            key: 'totalRedemption',
        },
        
    ];
  
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };
    const toggleDropdown2 = () => {
        setShowDropdown2(!showDropdown2);
    };
    const goToLearningPortal = () => {
        navigate('/learningportal'); // Adjust the route as needed
    };
    const goToLeaderboard = () => {
        navigate('/leaderboard'); // Adjust the route as needed
    };
    const goToRedemption = () => {
        navigate('/redemption'); // Adjust the route as needed
    };
    const goToConfiguration = () => {
        navigate('/configuration'); // Adjust the route as needed
    };

    return(
        <>
        <Header/>
        <hr ></hr>
        <div className={styles.Container}>

<div style={{display:"flex",justifyContent:'space-between',alignItems:"center"}}>
<div className={styles.info}>
    <p style={{fontSize:'13px'}}>Dashboard</p>
    <div style={{display:"flex",alignItems:'center'}}>
        <img src=".\images\hand.jpg" style={{height:"25px"}}></img>
        <p>Welcome Back, User123!</p>
    </div>
   
    <p style={{fontSize:'13px'}}>Manage the data of all the application in a easy way.</p>
</div>
<div style={{display:"flex",gap:"10px"}}>
<div className={styles.Rectangle} onClick={toggleDropdown}>
<div  className={styles.subrectangle}>
    <p>Sort by</p>
    <p>All Retailers</p>
</div>
<img src=".\images\dropdown.png" style={{height:"10px"}}></img>

{showDropdown && (
                                <div className={styles.dropdown}>
                                    <p> All Retailer </p>
                                    <p>JB HI-FI</p>
                                    <p>Noel Leeming</p>
                                    <p>Harvey Norwon</p>
                                    <p>Officeworks</p>
                                </div>
                            )}
</div>

<div  className={styles.Rectangle} onClick={toggleDropdown2} >
<div className={styles.subrectangle}>
    <p>Nov 6 - Dec 6, 2022</p>
    <p>Last month</p>
</div>
<img src=".\images\dropdown.png" style={{height:"10px"}}></img>

{showDropdown2 && (
                                <div className={styles.dropdown1}>
                                    <p>Last week</p>
                                    <p>Last month</p>
                                    <p>Last quarter</p>
                                    <p>Last year</p>
                                    <p style={{fontWeight:'400'}}>All time</p>
                                </div>
                            )}
</div>
</div>
</div>

<div style={{display:"flex",gap:"20px",marginTop:'2%'}}>
    <div className={styles.Box} onClick={goToLearningPortal}>
        <img src=".\images\book.png"></img>
        <p>Visit Learning Portal</p>
    </div>
    <div  className={styles.Box} onClick={goToLeaderboard}>
    <img src=".\images\trophy.png"></img>
    <p>Visit Leaderboard</p>
    </div>
    <div  className={styles.Box} onClick={goToRedemption}>
    <img src=".\images\box.png"></img>
    <p>Visit Redemption</p>
    </div>
    <div  className={styles.Box} onClick={goToConfiguration}>
    <img src=".\images\settings.png"></img>
    <p>Visit Configuration</p>
    </div>

</div>

<div style={{display:"flex",gap:"20px",marginTop:'20px'}}>
    <div className={styles.Box1}>
        <h1>3424</h1>
        <p>Total Users</p>
    </div>
    <div  className={styles.Box1}>
    <h1>55</h1>
    <p>New Users</p>
    </div>
    <div  className={styles.Box1}>
    <h1>0h32m</h1>
    <p>Average User Session Duration</p>
    </div>
    <div  className={styles.Box1}>
    <h1>6</h1>

    <p>Retailers Onboarded</p> 
    <p style={{fontSize:"12px"}}>( Based On Retailers Selected On Accounts )</p> 
    </div>

</div>
<div style={{display:"flex",justifyContent:'space-between',marginTop:"3%"}}>
    <div>
    <LineGraph/>
    </div>
    <div>
    <Bargraph/> 
     </div>
    
   
</div>
<div style={{marginTop:'3%'}}>
<Table dataSource={dataSource} columns={columns} />
</div>



        </div>
        </>
    )
}