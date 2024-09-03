import { Table } from "antd"
import styles from '../pages/learning.module.css'

export default function Panel (){
    const dataSource=[
       {title:'Anker Multi-Device Fast Charging Lineup',date:"05 Sep, 2022, 1:00pm",enddate:"12 Sep, 2022, 12:00pm",img:"./images/Coin.png",points:"2000pt",submission:"350",createdfor:"Anker",analytics:"./images/analytics.svg"},
       {title:'Anker Nano 3',date:"13 Dec, 2022, 1:00pm",enddate:"20 Dec, 2022, 12:00pm",img:"./images/Coin.png",points:"5000pt",submission:"50",createdfor:"soundcare",analytics:"./images/analytics.svg"},
       {title:'eufy Security Camera 3',date:"05 Sep, 2022, 1:00pm",enddate:"07 Sep, 2022, 12:00pm",img:"./images/Coin.png",points:"2000pt",submission:"350",createdfor:"eufy",analytics:"./images/analytics.svg"},
       {title:'Soundcore Space A40',date:"05 Nov, 2022, 1:00pm",enddate:"07 Nov, 2022, 12:00pm",img:"./images/Coin.png",points:"3000pt",submission:"50",createdfor:"Anker",analytics:"./images/analytics.svg"},
    ]

    const columns=[
        {title:"Course title",key:"title",dataIndex:"title", },
        {title:"Start date",key:"enddate",dataIndex:"enddate"},
        {title:"End date",key:"date",dataIndex:"date"},
        {title:"Max point submission",key:"points",dataIndex:"points",
            render: (text, record) => (
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <img 
                    src={record.img} 
                    alt="Points" 
                    style={{ width: '20px', height: '20px' }} 
                  />
                  <span>{record.points}</span>
                </div>
              )},
            {title:"Total submission",key:"submission",dataIndex:"submission"},
        {title:"Created for",key:"createdfor",dataIndex:"createdfor"},
        {title:"Analytics",key:"analytics",dataIndex:"analytics",
            render:()=>(
                <img 
                src=".\images\analytics.svg" 
                alt="Analytics" 
                style={{ width: '15px', height: '15px' }} 
              />
            )
        }
    ]
    return(
        <>
        <div style={{display:"flex",justifyContent:'space-between',alignItems:"center"}}>
<div className={styles.info} style={{width:"100%"}}>
  
    <div style={{display:"flex",alignItems:'center',justifyContent:"space-between"}}>
      <div>
      <p >Leaderboard Panel</p>
      <p style={{fontSize:'13px'}}>Manage Leaderboard Activity</p>
      </div>
      <div>
        <img src=".\images\leaderboard.svg"></img>
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
        <Table dataSource={dataSource} columns={columns}  pagination={false} />
    </div>

    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <p>Showing 1-1 of 4 Leaderboard</p>
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