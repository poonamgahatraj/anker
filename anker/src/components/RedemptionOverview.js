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
                            {record.usename}<br />
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
                render: (text, record) => (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <img src={text} alt="coin" className={styles.pointsIcon} style={{ height: '20px' }} />
                      <span>{record.points}</span>
                    </div>
                  ),
              
            },
            {
                title: 'Status',
                dataIndex: 'status',
                key: 'status',
            },
          
          
            
         
            {
                title: '',
                dataIndex: 'redemption',
                key: 'redemption'
               
            },
          
            
        ];

        const dataSource1=[
            {sno:"1.",usename:"Bibash khadka",email:"Bibash@testing.com.au",profileicon:"./images/profileicon.svg",coin:"",points:""},
            {sno:"2.",usename:"Conor Keogh",email:"conor@testing.com.au",profileicon:"./images/profileicon.svg",coin:"./images/coin2.png",points:"500pt"},
            {sno:"3.",usename:"Scott singh",email:"Scott@testing.com.au",profileicon:"./images/profileicon.svg",coin:"./images/coin2.png",points:"1000pt"},
           
        ]

        const columns1=[
            {
                title:"",
                dataIndex:"sno",
                key:'sno'
            },
            {
                title: '',
                dataIndex: 'usename',
                key: 'usename',
                render: (text, record) => (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <img src={record.profileicon} alt="Profile" className={styles.profileIcon} style={{ height: '25px', width: '25px' }} />
                        <div style={{ textAlign: 'justify', fontSize: '14px' }}>
                            {record.usename}<br />
                            {record.email}
                        </div>
                    </div>
                ),
            },
           
            {
                title: '',
                dataIndex: 'coin',
                key: 'coin',
                render: (text, record) => (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <img src={text} alt="" className={styles.pointsIcon} style={{ height: '20px' }} />
                      <span>{record.points}</span>
                    </div>
                  ),
              
            },
        ]

        const dataSource2=[
            {name:"Anker multi device fast charging lineup",redemption:"57",lastredemption:"07 Sep, 2022",product:"product",coin:"./images/coin2.png",point:"2000pt",status:"live"},
            {name:"Coles giftcard $50 value",redemption:"45",lastredemption:"07 Sep, 2022",product:"voucher",coin:"./images/coin2.png",point:"500pt",status:"live"},
            {name:"Nintendo Switch",redemption:"32",lastredemption:"07 Sep, 2022",product:"shadow product",coin:"./images/coin2.png",point:"2000pt",status:"unfifnished"},
            {name:"Wollies Giftcard $100 Value",redemption:"11",lastredemption:"07 Sep, 2022",product:"vouchers",coin:"./images/coin2.png",point:"2000pt",status:"live"},
        ]
        const columns2=[
            {title:"Product name",key:"name",dataIndex:"name"},
            {title:"Redemptions made",key:"redemption",dataIndex:"redemption"},
            {title:"Last Redemption on",key:"lastredemption",dataIndex:"lastredemption"},
            {title:'Product type',key:"product",dataIndex:"product"},
            {title:"cost",key:"coin",dataIndex:"coin",
                render: (text, record) => (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <img src={text} alt="" className={styles.pointsIcon} style={{ height: '20px' }} />
                      <span>{record.point}</span>
                    </div>
                  ),
            },
            {title:"status",key:"status",dataIndex:"status"}

        ]
       
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
            <img src='.\images\coin2.png' style={{height:"25px"}}></img>
        <h1 style={{color:"#222222"}}>45,000pt</h1>
        </div>
    

    <p style={{fontSize:"15px"}}>Total Points Redeemed</p> 
   
    </div>

    

</div>
<div style={{display:"flex",justifyContent:'space-between',marginTop:"2%"}}>

       <div style={{height:'400px',width:"65%"}}>

      
        <p>Recent Order Activity</p>
        <div style={{height:'400px',overflow:"scroll",border:"1px solid #E8E8E8"}}>
            <Table dataSource={dataSource} columns={columns} pagination={false}/>
        </div>
        </div>
        <div style={{width:'33%',height:'450px',overflow:"scroll",border:'1px solid #E8E8E8'}}>
            <p>Total points available across all users</p>
            <div style={{textAlign:"center"}}>
                <img src='.\images\Coin.png'></img>
                <p>400,000pt</p>
            </div>
            <p>Top Performing Users</p>
            <div>
                <Table dataSource={dataSource1} columns={columns1} pagination={false}/>
            </div>
        </div>
    </div>

    <div style={{marginTop:"2%"}}>
        <p>Top Products Redeemed</p>
        <Table dataSource={dataSource2} columns={columns2} pagination={false}/>
    </div>
        </>
    )
}