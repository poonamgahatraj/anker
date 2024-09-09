import { Table } from 'antd';
import styles from '../pages/leaderboard.module.css'

export default function User(){
    const dataSource=[
        {usename:"Bibash khadka",email:"Bibash@testing.com.au",profileicon:"./images/profileicon.svg",accounttype:"User",date:"07 Sep, 2022",login:"12 Sep, 2022, 8:15pm",course:"10",completed:"08",coin:"./images/coin2.png",points:"2000pt",status:"New Order",redemption:"01",more:"./images/more action.svg"},
        {usename:"Conor Keogh",email:"conor@testing.com.au",profileicon:"./images/profileicon.svg",accounttype:"Admin",date:"07 Sep, 2022",login:"12 Sep, 2022, 8:15pm",course:"05",completed:"04",coin:"./images/coin2.png",points:"2000pt",status:"On Hold",redemption:"01",more:"./images/more action.svg"},
        {usename:"Scott singh",email:"Scott@testing.com.au",profileicon:"./images/profileicon.svg",accounttype:"Admin",date:"07 Sep, 2022",login:"12 Sep, 2022, 8:15pm",course:"03",completed:"03",coin:"./images/coin2.png",points:"2000pt",status:"New Order",redemption:"01",more:"./images/more action.svg"},
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
                title: 'Account type',
                dataIndex: 'accounttype',
                key: 'accounttype',
            },
            {
                title: 'Account created',
                dataIndex: 'date',
                key: 'date',
            },
            {
                title: 'Last logged in',
                dataIndex: 'login',
                key: 'login',
            },
            {
                title: 'Courses started',
                dataIndex: 'course',
                key: 'course',
            },
            {
                title: 'Courses completed',
                dataIndex: 'completed',
                key: 'completed',
            },
            {
                title: 'Points ',
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
                title: 'Total Redemption',
                dataIndex: 'redemption',
                key: 'redemption',
            },
          
          
            
         
            {
                title: '',
                dataIndex: 'more',
                key: 'more',
                render: (text) => (

                      <img src={text} alt="more"  style={{ height: '20px',width:"10px" }} />
                   
                  ),
               
            },
          
            
        ];

    return(
        <>
         <div style={{display:"flex",justifyContent:'space-between',alignItems:"center"}}>
<div className={styles.info} style={{width:"100%"}}>
  
    <div style={{display:'flex',justifyContent:"space-between",alignItems:"center"}}>
       <div>
       <p style={{margin:"0",marginBottom:"10px"}}>Userlist</p>
       <p style={{fontSize:'13px',margin:"0"}}>Manage user list in a better way.</p>
       </div>
       <div style={{display:"flex", gap:"15px"}}>
<img src='.\images\Submit btn (8).svg' style={{height:"35px"}}></img>

       </div>
      
    </div>

    <hr></hr>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:'center'}}>
    <div style={{display:"flex",gap:"10px",alignItems:"center"}}>
        <img src=".\images\search.png" style={{height:"15px"}}></img>
        <p style={{color:"#636363"}}>Search here …</p>
    </div>
    <div style={{display:"flex",gap:"10px",alignItems:"center"}}>
        <img src=".\images\Filter icon (1).svg"></img>
        <p>Filters</p>
    </div>
    </div>

    <Table dataSource={dataSource} columns={columns} pagination={false}/>
   
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <p>Showing 1-1 of 3 Userlist</p>
        <div style={{display:"flex",gap:"10px",alignItems:"center"}}>
            <p>The page you’re on</p>
            <img src=".\images\pagination number.svg"></img>
            <img src=".\images\Left icon (1).svg" style={{height:"30px"}}></img>
            <img src=".\images\right icon.svg" style={{height:"30px"}}></img>
        </div>


    </div>
   
</div>

</div>
        </>
    )
}