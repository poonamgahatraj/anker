import styles from './leaderboard.module.css'
import Header from '../components/common/header'
import { Table } from "antd";

export default function Configuration (){
    const dataSource=[
        {storeid:"#00001",Retailername:"Anker",Storename:"Blacktown Mega Centre",address:"Supa Centre, 2A Todman Ave",country:"Australia",state:"NSW",postcode:"2222"},
        {storeid:"#00002",Retailername:"Soundcore",Storename:"Moore Park",address:"Supa Centre, 2A Todman Ave",country:"Australia",state:"NSW",postcode:"2222"},
        {storeid:"#00003",Retailername:"Soundcore",Storename:"Hurstville",address:"Supa Centre, 2A Todman Ave",country:"Australia",state:"NSW",postcode:"2222"},
    ]

    const columns=[
        { title: 'Store ID', dataIndex: 'storeid', key: 'storeid'  },
        { title: 'Retailer name', dataIndex: 'Retailername', key: 'Retailername'  },
        { title: 'Store name', dataIndex: 'Storename', key: 'Storename'  },
        { title: 'Address', dataIndex: 'address', key: 'address'  },
        { title: 'Country', dataIndex: 'country', key: 'country'  },
        { title: 'State', dataIndex: 'state', key: 'state'  },
        { title: 'Postcode', dataIndex: 'postcode', key: 'postcode'  },
]
    return(
        
         <>
          <Header/>
          <hr ></hr>
          <div className={styles.Container}>
            <div style={{display:"flex",alignItems:"center",gap:"5px"}}>
<img src=".\images\bluearrow.png" style={{height:"15px"}}></img>
            <p>Dashboard / Configuration / Storelist</p>
            </div>
            <div style={{display:'flex',gap:'20px'}}>
<p>Storelist</p>
<p>Userlist</p>
<p>Rules</p>
            </div>

            <div style={{display:"flex",justifyContent:'space-between',alignItems:"center"}}>
<div className={styles.info} style={{width:"100%"}}>
  
    <div style={{display:'flex',justifyContent:"space-between",alignItems:"center"}}>
       <div>
       <p style={{margin:"0",marginBottom:"10px"}}>Storelist</p>
       <p style={{fontSize:'13px',margin:"0"}}>Detailed retailer storelist.</p>
       </div>
       <div style={{display:"flex", gap:"15px"}}>
<img src='.\images\Submit btn1.png' style={{height:"35px"}}></img>
<img src='.\images\Submit btn2.png' style={{height:"35px"}}></img>
<img src='.\images\Submit btn3.png' style={{height:"35px"}}></img>
       </div>
      
    </div>
   
   
   
</div>

</div>
<hr></hr>
<div style={{display:'flex',gap:"10px",alignItems:"center"}}>
    <img src='.\images\search.png' style={{height:'15px'}}></img>
    <p>Search here...</p>
</div>
<Table dataSource={dataSource} columns={columns} pagination={false} />
<div style={{display:"flex",justifyContent:'space-between'}}>
    <p>Showing 1-1 of 3 Storelist</p>
    <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
    <p>The page you’re on</p>
    <button>10</button>
    <button><img src='.\images\leftarrow.jpg' style={{height:"13px"}}></img></button>
    <button><img src='.\images\rightarrow.png' style={{height:"13px"}}></img></button>
    </div>
   

</div>

<hr></hr>
            </div>
        </>
    )
}