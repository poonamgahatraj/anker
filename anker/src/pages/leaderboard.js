import styles from './leaderboard.module.css'
import Header from '../components/common/header';

import { useState } from 'react';
import Leadershiptable from '../components/leadershiptable';
import Reusable_Table from '../components/common/reusabletable';

export default function Leaderboard (){
    const [showDropdown, setShowDropdown] = useState(false);
    const [showDropdown2, setShowDropdown2] = useState(false);
    const headers=['Username','Leaderboard','Submission point','Store name']
    const data = [
        ["Bibash Khadka","Bibash@testing.com.au","./images/profileicon.svg", "Anker multi-Device fast chanrging lineup", "./images/points.svg", "Store 1"],
        ["Scott Singh","Bibash@testing.com.au","./images/profileicon.svg", "Eufy security camera 3","./images/points.svg", "Store 2"],
        ["Conor Keogh","Bibash@testing.com.au","./images/profileicon.svg", "Soundcore space A40", "./images/points.svg", "Store 3"],
        ["Bibash khadka","Bibash@testing.com.au","./images/profileicon.svg", "Eufy security camera 3", "./images/points.svg", "Store 4"],
        ["Bibash Khadka","Bibash@testing.com.au","./images/profileicon.svg", "Anker multi-Device fast chanrging lineup", "./images/points.svg", "Store 1"],
        ["Scott Singh","Bibash@testing.com.au","./images/profileicon.svg", "Eufy security camera 3","./images/points.svg", "Store 2"],
        ["Conor Keogh","Bibash@testing.com.au","./images/profileicon.svg", "Soundcore space A40", "./images/points.svg", "Store 3"],
        ["Bibash khadka","Bibash@testing.com.au","./images/profileicon.svg", "Eufy security camera 3", "./images/points.svg", "Store 4"],
        ["Bibash Khadka","Bibash@testing.com.au","./images/profileicon.svg", "Anker multi-Device fast chanrging lineup", "./images/points.svg", "Store 1"],
        ["Scott Singh","Bibash@testing.com.au","./images/profileicon.svg", "Eufy security camera 3","./images/points.svg", "Store 2"],
        ["Conor Keogh","Bibash@testing.com.au","./images/profileicon.svg", "Soundcore space A40", "./images/points.svg", "Store 3"],
        ["Bibash khadka","Bibash@testing.com.au","./images/profileicon.svg", "Eufy security camera 3", "./images/points.svg", "Store 4"],
       
        // Add more lists for additional rows
      ];


    const renderCell = (cell, rowIndex, cellIndex) => {
        if (cellIndex === 0) { // Username column
            return (
                <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                    <img src={data[rowIndex][2]} alt="Profile" className={styles.profileIcon} />
                    <div style={{ textAlign: "justify", fontSize: '14px' }}>
                        {data[rowIndex][0]}<br />
                        {data[rowIndex][1]}
                    </div>
                </div>
            );
        } else if (cellIndex === 1) { // Show the data from row[3] for cellIndex 1
            return data[rowIndex][3]}
            else if (cellIndex === 2) { // Submission point column
            return <img src={data[rowIndex][4]} alt="Points" className={styles.pointsIcon} />;
        }
        else if (cellIndex === 3) { // Show the data from row[3] for cellIndex 1
            return data[rowIndex][5]}
        // else {
        //     return cell;
        // }
    };

 const newheaders=[]

 const   newData=[
        ['JB Hi-Fi','Broadway','./images/profileicon.svg','./images/Coin.png','35,400pt'],
        ['Harvey Norman','Alexandria','./images/profileicon.svg','./images/Coin.png','31,250pt'],
        ['The Good Guys','Fyshwick','./images/profileicon.svg','./images/Coin.png','26,600pt'],
    
    ]

    
    const newrenderCell = (cell, rowIndex, cellIndex) => {
        if (cellIndex === 0) { // Username column
            return (
                <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                    <img src={data[rowIndex][2]} alt="Profile" className={styles.profileIcon} />
                    <div style={{ textAlign: "justify", fontSize: '14px' }}>
                        {newData[rowIndex][0]}<br />
                        {newData[rowIndex][1]}
                    </div>
                </div>
            );
        } else if (cellIndex === 1) { // Show the data from row[3] for cellIndex 1
            return (
                <div style={{ display: "flex", alignItems: "center"}}>
                    <img src={newData[rowIndex][3]} alt="Profile" style={{height:"30px"}} className={styles.profileIcon} />
                  
                        {newData[rowIndex][4]}
                     
                    </div>
                
            );
        }
           
       
        // else {
        //     return cell;
        // }
    }

  const  newheaders1=['Leaderboard title','Start date','Total submission','Created for','Status','Analytics']
  const newdata1=[
    ["Anker Multi-Device Fast Charging Lineup","05 Sep, 2022, 1:00pm","350",'ANKER','Upcoming','./images/analytics.svg'],
    ["Anker Nano 3","05 Sep, 2022, 1:00pm","50",'ANKER','Live','./images/analytics.svg'],
    ["eufy Security Camera 3","05 Sep, 2022, 1:00pm","350",'ANKER','Finished','./images/analytics.svg'],
    ["Soundcore Space A40","05 Sep, 2022, 1:00pm","50",'ANKER','Finished','./images/analytics.svg'],
    ["eufy Security Camera 3","05 Sep, 2022, 1:00pm","350",'ANKER','Finished','./images/analytics.svg'],
  ]

  
  const newrenderCells = (cell, rowIndex, cellIndex) => {
    if (cellIndex === 5) { // Username column
        return (
          
                <img src={newdata1[rowIndex][5]} alt="Profile" className={styles.profileIcon} />
                
                  
                  
               
        )
    }  
    else {
             return cell;
         }
 
}
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
 <Reusable_Table data={data} headers={headers} renderCell={renderCell}/>
</div>
</div>

<div style={{width:"29%",padding:"10px",border:"1px solid #E8E8E8",height:"347px"}}>
<p>Top performing stores (Across all leaderboards)</p>
<div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
    <img src=".\images\Coin.png" style={{height:"50px"}}></img>
    <p>35,400pt</p>
    <p style={{margin:"0"}}>JB Hi-Fi Broadway</p>
</div>

<Reusable_Table data={newData} headers={newheaders} renderCell={newrenderCell}/>
</div>
</div>
<div style={{border:"1px solid #E8E8E8",marginTop:"3%"}}>
    <p>Recent leaderboard activity</p>
   <Reusable_Table headers={newheaders1} data={newdata1} renderCell={newrenderCells}/>
</div>
            </div>
        </>
    )
}