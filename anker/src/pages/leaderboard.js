import styles from './leaderboard.module.css'
import Header from '../components/common/header';

import { useState } from 'react';
// import Leadershiptable from '../components/leadershiptable';
// import Reusable_Table from '../components/common/reusabletable';
import { Table } from "antd";

export default function Leaderboard (){
    const [showDropdown, setShowDropdown] = useState(false);
    const [showDropdown2, setShowDropdown2] = useState(false);
    const headers=['Username','Leaderboard','Submission point','Store name']
    const dataSource = [
        {key:"1",userName:'Bibash Khadka',email:"Bibash@testing.com.au",profileIcon:"./images/profileicon.svg",leaderboard: "Anker multi-Device fast chanrging lineup",points: "./images/points.svg",store: "Store 1"},
        {key:'2',userName:'Scott Singh',email:"Bibash@testing.com.au",profileIcon:"./images/profileicon.svg",leaderboard :"Eufy security camera 3",points:"./images/points.svg", store:"Store 2"},
        {key:"3",userName:'Conor Keogh',email:"Bibash@testing.com.au",profileIcon:"./images/profileicon.svg",leaderboard: "Soundcore space A40",points: "./images/points.svg",store: "Store 3"},
        {key:"4",userName:'Bibash khadka',email:"Bibash@testing.com.au",profileIcon:"./images/profileicon.svg",leaderboard: "Eufy security camera 3",points: "./images/points.svg", store:"Store 4"},
        {key:"5",userName:'Bibash Khadka',email:"Bibash@testing.com.au",profileIcon:"./images/profileicon.svg",leaderboard: "Anker multi-Device fast chanrging lineup",points: "./images/points.svg",store: "Store 1"},
        {key:'6',userName:'Scott Singh',email:"Bibash@testing.com.au",profileIcon:"./images/profileicon.svg",leaderboard :"Eufy security camera 3",points:"./images/points.svg", store:"Store 2"},
        {key:"7",userName:'Conor Keogh',email:"Bibash@testing.com.au",profileIcon:"./images/profileicon.svg",leaderboard: "Soundcore space A40",points: "./images/points.svg",store: "Store 3"},
        {key:"8",userName:'Bibash khadka',email:"Bibash@testing.com.au",profileIcon:"./images/profileicon.svg",leaderboard: "Eufy security camera 3",points: "./images/points.svg", store:"Store 4"},
        {key:"9",userName:'Bibash Khadka',email:"Bibash@testing.com.au",profileIcon:"./images/profileicon.svg",leaderboard: "Anker multi-Device fast chanrging lineup",points: "./images/points.svg",store: "Store 1"},
        {key:'10',userName:'Scott Singh',email:"Bibash@testing.com.au",profileIcon:"./images/profileicon.svg",leaderboard :"Eufy security camera 3",points:"./images/points.svg", store:"Store 2"},
        {key:"11",userName:'Conor Keogh',email:"Bibash@testing.com.au",profileIcon:"./images/profileicon.svg",leaderboard: "Soundcore space A40",points: "./images/points.svg",store: "Store 3"},
        {key:"12",userName:'Bibash khadka',email:"Bibash@testing.com.au",profileIcon:"./images/profileicon.svg",leaderboard: "Eufy security camera 3",points: "./images/points.svg", store:"Store 4"},
       
        // Add more lists for additional rows
      ];

    const columns = [
        {
            title: 'Username', dataIndex: 'userName', key: 'userName',
            render: (text, record) => (
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <img src={record.profileIcon} alt="Profile" className={styles.profileIcon} style={{ height: '25px', width: '25px' }} />
                    <div style={{ textAlign: 'justify', fontSize: '14px' }}>
                        {record.userName}<br />
                        {record.email}
                    </div>
                </div>
            ),
        },
        {title: 'Leaderboard',dataIndex: 'leaderboard', key: 'leaderboard', },
        {
            title: 'Submission Points',dataIndex: 'points',key: 'points',
            render: (text) => (
                <img src={text} alt="Points" className={styles.pointsIcon} style={{ height: '20px' }} />
            ),
        },
        { title: 'Store Name',dataIndex: 'store', key: 'store', },
    ];

    const newDataSource=[
        {key:"1",title:'Anker Multi-Device Fast Charging Lineup',startdate:"05 Sep, 2022, 1:00pm",submission:"350",createdfor: "Anker ",points: "./images/points.svg",status: "Upcoming",analytics:"./images/analytics.svg"},
        {key:"2",title:'Anker Nano 3',startdate:"05 Sep, 2022, 1:00pm",submission:"50",createdfor: "soundcare ",points: "./images/points.svg",status: "Live",analytics:"./images/analytics.svg"},
        {key:"3",title:'eufy Security Camera 3',startdate:"05 Sep, 2022, 1:00pm",submission:"350",createdfor: "eufy ",points: "./images/points.svg",status: "Finished",analytics:"./images/analytics.svg"},
        {key:"4",title:'Soundcore Space A40',startdate:"05 Sep, 2022, 1:00pm",submission:"50",createdfor: "Anker ",points: "./images/points.svg",status: "Finished",analytics:"./images/analytics.svg"},
        {key:"5",title:'Anker Multi-Device Fast Charging Lineup',startdate:"05 Sep, 2022, 1:00pm",submission:"350",createdfor: "Anker ",points: "./images/points.svg",status: "Upcoming",analytics:"./images/analytics.svg"},
        {key:"6",title:'Anker Nano 3',startdate:"05 Sep, 2022, 1:00pm",submission:"50",createdfor: "soundcare ",points: "./images/points.svg",status: "Live",analytics:"./images/analytics.svg"},
        {key:"7",title:'eufy Security Camera 3',startdate:"05 Sep, 2022, 1:00pm",submission:"350",createdfor: "eufy ",points: "./images/points.svg",status: "Finished",analytics:"./images/analytics.svg"},
        {key:"8",title:'Soundcore Space A40',startdate:"05 Sep, 2022, 1:00pm",submission:"50",createdfor: "Anker ",points: "./images/points.svg",status: "Finished",analytics:"./images/analytics.svg"},
        {key:"9",title:'Anker Multi-Device Fast Charging Lineup',startdate:"05 Sep, 2022, 1:00pm",submission:"350",createdfor: "Anker ",points: "./images/points.svg",status: "Upcoming",analytics:"./images/analytics.svg"},
        {key:"10",title:'Anker Nano 3',startdate:"05 Sep, 2022, 1:00pm",submission:"50",createdfor: "soundcare ",points: "./images/points.svg",status: "Live",analytics:"./images/analytics.svg"},
        {key:"11",title:'eufy Security Camera 3',startdate:"05 Sep, 2022, 1:00pm",submission:"350",createdfor: "eufy ",points: "./images/points.svg",status: "Finished",analytics:"./images/analytics.svg"},
        {key:"12",title:'Soundcore Space A40',startdate:"05 Sep, 2022, 1:00pm",submission:"50",createdfor: "Anker ",points: "./images/points.svg",status: "Finished",analytics:"./images/analytics.svg"},
    ]

    const newColumns=[
        {title:"Leaderboard title",dataIndex:"title",key:"title"},
        {title:"Start date",dataIndex:"startdate",key:"startdate"},
        {title:"Total submission",dataIndex:"submission",key:"submission"},
        {title:"Created for",dataIndex:"createdfor",key:"createdfor"},
        {title:"Status",dataIndex:"status",key:"status"},
        {title:"Analytics",dataIndex:"analytics",key:"analytics",
            render: (text) => (
                <img src={text} alt="Analytics" className={styles.analyticsIcon} style={{ height: '20px' }} />
            )
        }
    ]

    const dataSource1=[
        {key:"1",sno:"1",profileIcon:"./images/profileicon.svg",username:"JB Hi-Fi",location:"Broadway",coin:"./images/Coin.png",points:"35,400pt"},
        {key:"2",sno:"2",profileIcon:"./images/profileicon.svg",username:"Harvey Norman",location:"Alexandria",coin:"./images/Coin.png",points:"31,250pt"},
        {key:"3",sno:"3",profileIcon:"./images/profileicon.svg",username:"The Good Guys",location:"Fyshwick",coin:"./images/Coin.png",points:"26,600pt"}
    
    ]
    const columns1 = [
        {
            title: '',
            dataIndex: 'sno',
            key: 'sno',
            align: 'center',
        },
        {
            title: '',
            key: 'userInfo',
            render: (text, record) => (
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <img src={record.profileIcon} alt="Profile" style={{ height: '30px', width: '30px' }} />
                    <div>
                        <div>{record.username}</div>
                        <div>{record.location}</div>
                    </div>
                </div>
            ),
        },
        {
            title: '',
            key: 'points',
            render: (text, record) => (
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <img src={record.coin} alt="Coin" style={{ height: '20px', width: '20px' }} />
                    <div>{record.points}</div>
                </div>
            ),
        },
    ];
    

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };
    const toggleDropdown2 = () => {
        setShowDropdown2(!showDropdown2);
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
<p>Leaderboard Overview</p>
<p>Leaderboard Panel</p>
<p>Submissions</p>
            </div>

            <div style={{display:"flex",justifyContent:'space-between',alignItems:"center"}}>
<div className={styles.info}>
  
    <div style={{display:"flex",alignItems:'center'}}>
        <img src=".\images\book.png" style={{height:"25px"}}></img>
        <p>Leaderboard overview</p>
    </div>
    <p style={{fontSize:'13px'}}>Summary of all Leaderboard Activity.</p>
   
   
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


<div style={{display:"flex",gap:"20px",marginTop:'20px'}}>
    <div className={styles.Box1}>
        <h1>7</h1>
        <p>Total Leaderboards</p>
    </div>
    <div  className={styles.Box1}>
    <h1>6</h1>
    <p>Active Leaderboards</p>
    </div>
    <div  className={styles.Box1}>
    <h1>1012</h1>
    <p>Total Submissions</p>
    </div>
    <div  className={styles.Box1}>
    <h1>51</h1>

    <p>Field Team Accounts</p> 
   
    </div>

</div>


<div style={{display:"flex",justifyContent:"space-between"}}>
<div style={{border:"1px solid #E8E8E8",padding:"15px",width:"70%",height:"337px",overflow:"scroll"}}>
    <p>Recent submissions</p>
    <div style={{marginTop:'3%'}}>
    <Table dataSource={dataSource} columns={columns} />
</div>
</div>

<div style={{width:"29%",padding:"10px",border:"1px solid #E8E8E8",height:"347px"}}>
<p>Top performing stores (Across all leaderboards)</p>
<div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
    <img src=".\images\Coin.png" style={{height:"50px"}}></img>
    <p>35,400pt</p>
    <p style={{margin:"0"}}>JB Hi-Fi Broadway</p>
</div>

<Table dataSource={dataSource1} columns={columns1} />
</div>
</div>
<div style={{border:"1px solid #E8E8E8",marginTop:"3%"}}>
    <p>Recent leaderboard activity</p>
    <Table dataSource={newDataSource} columns={newColumns} />
</div>
            </div>
        </>
    )
}