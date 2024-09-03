import styles from '../pages/learning.module.css'
import { useState } from "react";
import { Table } from 'antd';


export default function RedemptionOverview(){
   
    const [showDropdown2, setShowDropdown2] = useState(false);

    const toggleDropdown2 = () => {
        setShowDropdown2(!showDropdown2);
    };

    const dataSource=[
        {usename:"Bibash khadka",email:"Bibash@testing.com.au",profileicon:"./images/profileicon.svg",date:"07 Sep, 2022",coin:"./images/coin2.png",points:"2000pt",status:"New Order",redemption:"View redemption"},
        {usename:"Conor Keogh",email:"conor@testing.com.au",profileicon:"./images/profileicon.svg",date:"07 Sep, 2022",coin:"./images/coin2.png",points:"500pt",status:"On Hold",redemption:"View redemption"},
        {usename:"Scott singh",email:"Scott@testing.com.au",profileicon:"./images/profileicon.svg",date:"07 Sep, 2022",coin:"./images/coin2.png",points:"1000pt",status:"New Order",redemption:"View redemption"},
        {usename:"Gabriel Said",email:"Gab@testing.com.au",profileicon:"./images/profileicon.svg",date:"07 Sep, 2022",coin:"./images/coin2.png",points:"200pt",status:"Completed",redemption:"View redemption"},
        {usename:"Avril Keogh",email:"Avril@testing.com.au",profileicon:"./images/profileicon.svg",date:"07 Sep, 2022",coin:"./images/coin2.png",points:"100pt",status:"Packaging",redemption:"View redemption"},
        {usename:"Bibash khadka",email:"Bibash@testing.com.au",profileicon:"./images/profileicon.svg",date:"07 Sep, 2022",coin:"./images/coin2.png",points:"2000pt",status:"New Order",redemption:"View redemption"},
        {usename:"Conor Keogh",email:"conor@testing.com.au",profileicon:"./images/profileicon.svg",date:"07 Sep, 2022",coin:"./images/coin2.png",points:"500pt",status:"On Hold",redemption:"View redemption"},
        {usename:"Scott singh",email:"Scott@testing.com.au",profileicon:"./images/profileicon.svg",date:"07 Sep, 2022",coin:"./images/coin2.png",points:"1000pt",status:"New Order",redemption:"View redemption"},
        {usename:"Gabriel Said",email:"Gab@testing.com.au",profileicon:"./images/profileicon.svg",date:"07 Sep, 2022",coin:"./images/coin2.png",points:"200pt",status:"Completed",redemption:"View redemption"},
        {usename:"Avril Keogh",email:"Avril@testing.com.au",profileicon:"./images/profileicon.svg",date:"07 Sep, 2022",coin:"./images/coin2.png",points:"100pt",status:"Packaging",redemption:"View redemption"},
        {usename:"Bibash khadka",email:"Bibash@testing.com.au",profileicon:"./images/profileicon.svg",date:"07 Sep, 2022",coin:"./images/coin2.png",points:"2000pt",status:"New Order",redemption:"View redemption"},
        {usename:"Conor Keogh",email:"conor@testing.com.au",profileicon:"./images/profileicon.svg",date:"07 Sep, 2022",coin:"./images/coin2.png",points:"500pt",status:"On Hold",redemption:"View redemption"},
        {usename:"Scott singh",email:"Scott@testing.com.au",profileicon:"./images/profileicon.svg",date:"07 Sep, 2022",coin:"./images/coin2.png",points:"1000pt",status:"New Order",redemption:"View redemption"},
        {usename:"Gabriel Said",email:"Gab@testing.com.au",profileicon:"./images/profileicon.svg",date:"07 Sep, 2022",coin:"./images/coin2.png",points:"200pt",status:"Completed",redemption:"View redemption"},
        {usename:"Avril Keogh",email:"Avril@testing.com.au",profileicon:"./images/profileicon.svg",date:"07 Sep, 2022",coin:"./images/coin2.png",points:"100pt",status:"Packaging",redemption:"View redemption"}
    ];
   
        const columns = [
            {
                title: 'Username',
                dataIndex: 'username',
                key: 'username',
                render: (text, record) => (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <img src={record.profileicon} alt="Profile" className={styles.profileIcon} style={{ height: '25px', width: '25px' }} />
                        <div style={{ textAlign: 'justify', fontSize: '14px' }}>
                            {record.username}<br />
                            {record.email}
                        </div>
                    </div>
                ),
            },
            {
                title: 'Redemption date',
                dataIndex: 'date',
                key: 'date',
            },
            {
                title: 'Points used',
                dataIndex: 'coin',
                key: 'coin',
              
            },
            {
                title: 'Status',
                dataIndex: 'status',
                key: 'status',
            },
            {
                title: 'Submission Points',
                dataIndex: 'coin',
                key: 'coin',
                render: (text, record) => (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <img src={text} alt="coin" className={styles.pointsIcon} style={{ height: '20px' }} />
                      <span>{record.points}</span>
                    </div>
                  ),
            },
          
            
         
            {
                title: '',
                dataIndex: 'redemption',
                key: 'redemption'
               
            },
          
            
        ];
       
    return(
        <>
             <div style={{display:"flex",justifyContent:'space-between',alignItems:"center"}}>
<div className={styles.info}>
  
    <div style={{display:"flex",alignItems:'center'}}>
        <img src=".\images\book.png" style={{height:"25px"}}></img>
        <p >Redemption overview</p>
    </div>
    <p style={{fontSize:'13px'}}>Summary of all Redemption Activity.</p>
   
   
</div>
<div style={{display:"flex",gap:"10px"}}>


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
        <h1>53</h1>
        <p style={{fontSize:"15px"}}>Total Orders Placed</p>
    </div>
    <div  className={styles.Box1}>
    <h1>19</h1>
    <p style={{fontSize:"15px"}}>Total Digital Vouchers Redeemed</p>
    </div>
    <div  className={styles.Box1}>
    <h1>22</h1>
    <p style={{fontSize:"15px"}}>Total Products Redeemed</p>
    </div>
    <div  className={styles.Box1}>
        <div style={{display:"flex",gap:'5px',justifyContent:"center",alignItems:"center"}}>
            <img src='.\images\Coin.png' style={{height:"25px"}}></img>
        <h1>45,000pt</h1>
        </div>
    

    <p style={{fontSize:"15px"}}>Total Points Redeemed</p> 
   
    </div>

    

</div>
<div style={{display:"flex"}}>
        <div style={{height:'500px',overflow:"scroll"}}>
            <p>Recent Order Activity</p>
            <Table dataSource={dataSource} columns={columns}/>
        </div>
        <div>
            <p>Total points available across all users</p>
            <div>
                <img src='.\images\Coin.png'></img>
                <p>400,000pt</p>
            </div>
            <p>Top Performing Users</p>
        </div>
    </div>
        </>
    )
}