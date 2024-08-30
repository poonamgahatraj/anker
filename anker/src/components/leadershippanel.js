import styles from '../pages/learning.module.css'
import { Table } from 'antd'

export default function LeadershipPanel(){

    const dataSource=[
        {title:"Anker Multi-Device Fast Charging Lineup",startdate:"05 Sep, 2022, 1:00pm",enddate:"12 Sep, 2022, 12:00pm",maxpoint:"2000pt",totalsubmission:"350",createdfor:"Anker",analytics:"./images/analytics.svg"},
        {title:"Anker Nano 3",startdate:"13 Dec, 2022, 1:00pm",enddate:"20 Dec, 2022, 12:00pm",maxpoint:"2000pt",totalsubmission:"50",createdfor:"soundcare",analytics:"./images/analytics.svg"},
        {title:"eufy Security Camera 3",startdate:"05 Sep, 2022, 1:00pm",enddate:"07 Sep, 2022, 12:00pm",maxpoint:"2000pt",totalsubmission:"350",createdfor:"eufy",analytics:"./images/analytics.svg"},
        {title:"Soundcore Space A40",startdate:"05 Nov, 2022, 1:00pm",enddate:"07 Nov, 2022, 12:00pm",maxpoint:"2000pt",totalsubmission:"50",createdfor:"anker",analytics:"./images/analytics.svg"}
    ]

    const columns=[
        {title:"Leaderboard title",key:"title",dataIndex:"title"},
        {title:"Start date",key:"startdate",dataIndex:"startdate"},
        {title:"End date",key:"enddate",dataIndex:"enddate"},
        {title:"Max point submission",key:"maxpoint",dataIndex:"maxpoint"},
        {title:"Total submission",key:"totalsubmission",dataIndex:"totalsubmission"},
        {title:"Created for",key:"createdfor",dataIndex:"createdfor"},
        {title:"Analytics",key:"analytics",dataIndex:"analytics"}
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
        <img src=".\images\Submit btn1.png"></img>
      </div>
      
    </div>

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
        <Table dataSource={dataSource} columns={columns}/>
    </div>

    </div>
    </div>
        </>
    )
}