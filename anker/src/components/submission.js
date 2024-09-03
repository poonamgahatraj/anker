import { Table } from "antd"
import styles from '../pages/learning.module.css'

export default function Submission (){
    
    const dataSource = [
        {key: '1',username: 'Bibash Khadka', email: 'Bibash@testing.com.au', profileIcon: './images/profileicon.svg',Leaderboard: 'Anker Multi-Device Fast Charging Lineup',id: ' #15612323',date:"07 Sep, 2022",points:'./images/Add points.png',store:"store 1",edit:"./images/edit (1).svg",delete:'./images/delete.svg'},
        {key: '2',username: 'Scott Singh', email: 'Bibash@testing.com.au', profileIcon: './images/profileicon.svg',Leaderboard: ' eufy Security Camera 3',id: ' #15612323',date:"07 Sep, 2022",points:'./images/Add points.png',store:"store 1",edit:"./images/edit (1).svg",delete:'./images/delete.svg'},
        {key: '3',username: 'Conor Keogh', email: 'Bibash@testing.com.au', profileIcon: './images/profileicon.svg',Leaderboard: 'Soundcore Space A40',id: ' #15612323',date:"07 Sep, 2022",points:'./images/Add points.png',store:"store 1",edit:"./images/edit (1).svg",delete:'./images/delete.svg'},
       
      
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
            title: 'Leaderboard',
            dataIndex: 'Leaderboard',
            key: 'Leaderboard',
        },
        {
            title: 'Submission ID',
            dataIndex: 'id',
            key: 'id',
          
        },
        {
            title: 'Submission Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Submission Points',
            dataIndex: 'points',
            key: 'points',
            render: (text) => (
                <img src={text} alt="Points" className={styles.pointsIcon} style={{ height: '30px' }} />
            ),
        },
      
        
        {
            title: 'Store Name',
            dataIndex: 'store',
            key: 'store',
        },
        {
            title: '',
            dataIndex: 'edit',
            key: 'edit',
            render: (text) => (
                <img src={text} alt="edit"  style={{ height: '15px' }} />
            ),
        },
        {
            title: '',
            dataIndex: 'delete',
            key: 'delete',
            render: (text) => (
                <img src={text} alt="delete"  style={{ height: '15px' }} />
            ),
        },
        
    ];
    return(
        <>
         <div style={{display:"flex",justifyContent:'space-between',alignItems:"center"}}>
<div className={styles.info} style={{width:"100%"}}>
  
    <div style={{display:"flex",alignItems:'center',justifyContent:"space-between"}}>
      <div>
      <p >Submissions</p>
      <p style={{fontSize:'13px'}}>Manage Leaderboard Submissions</p>
      </div>
      <div style={{display:'flex',gap:"10px"}}>
        <img src=".\images\bulksubmission.svg"></img>
        <img src=".\images\submission.svg"></img>
      </div>
      
    </div>
    <hr></hr>
    <div style={{display:"flex",justifyContent:"flex-end",alignItems:'center'}}>
  
    <div style={{display:"flex",gap:"10px",alignItems:"center"}}>
       <div style={{height:"15px",width:"15px",borderRadius:"50%",backgroundColor:'#001689',color:"white"}}>1</div>
        <p>Filters</p>
    </div>
    </div>

    <div>
        <Table dataSource={dataSource} columns={columns}  pagination={false} />
    </div>

    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <p>Showing 1-1 of 3 Submission</p>
        <div style={{display:"flex",gap:"10px",alignItems:"center"}}>
            <p>The page you’re on</p>
            <button>10</button>
            <button><img src=".\images\leftarrow.jpg" style={{height:"10px"}}></img></button>
            <button><img src=".\images\rightarrow.png" style={{height:"10px"}}></img></button>
        </div>


    </div>
    
   
   
   
</div>
</div>
        </>
    )
}