import styles from '../pages/learning.module.css'
import { Table } from 'antd';

export default function Ordermanagement(){
    const dataSource=[
        {usename:"Bibash khadka",email:"Bibash@testing.com.au",profileicon:"./images/profileicon.svg",id:"#15612323",date:"07 Sep, 2022",coin:"./images/coin2.png",points:"2000pt",status:"New Order",redemption:"View redemption"},
        {usename:"Conor Keogh",email:"conor@testing.com.au",profileicon:"./images/profileicon.svg",id:"#15612323",date:"07 Sep, 2022",coin:"./images/coin2.png",points:"500pt",status:"On Hold",redemption:"View redemption"},
        {usename:"Scott singh",email:"Scott@testing.com.au",profileicon:"./images/profileicon.svg",id:"#15612323",date:"07 Sep, 2022",coin:"./images/coin2.png",points:"1000pt",status:"New Order",redemption:"View redemption"},
        {usename:"Gabriel Said",email:"Gab@testing.com.au",profileicon:"./images/profileicon.svg",id:"#15612323",date:"07 Sep, 2022",coin:"./images/coin2.png",points:"200pt",status:"Completed",redemption:"View redemption"},
        
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
                title: 'Redemption ID',
                dataIndex: 'id',
                key: 'id',
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

    return(
   <>
   <div style={{display:"flex",justifyContent:'space-between',alignItems:"center"}}>
<div className={styles.info}>
  
    <div style={{display:"flex",alignItems:'center'}}>
        
        <p >Order management</p>
    </div>
    <p style={{fontSize:'13px'}}>Manage Order, Update, Add or view the live data of Products</p>
   
   
</div>
<div style={{display:"flex"}}>
<img src=".\images\Submit btn (7).svg"></img>


</div>
</div>
<hr></hr>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:'center'}}>
    <div style={{display:"flex",gap:"10px",alignItems:"center"}}>
        <img src=".\images\search.png" style={{height:"15px"}}></img>
        <p>Search here …</p>
    </div>
    <div style={{display:"flex",gap:"10px",alignItems:"center"}}>
        <img src=".\images\Filter icon (1).svg"></img>
        <p>Filters</p>
    </div>
    </div>
    <div>
    <Table dataSource={dataSource} columns={columns} pagination={false}/>
    </div>
    
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <p>Showing 1-1 of 2 Order</p>
        <div style={{display:"flex",gap:"10px",alignItems:"center"}}>
            <p>The page you’re on</p>
            <img src=".\images\pagination number.svg"></img>
            <img src=".\images\Left icon (1).svg" style={{height:"30px"}}></img>
            <img src=".\images\right icon.svg" style={{height:"30px"}}></img>
        </div>


    </div>
   </>
    )
}