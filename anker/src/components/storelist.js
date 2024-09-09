import { Table } from "antd";
import styles from '../pages/leaderboard.module.css'

export default function Storelist (){
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
<div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <p>Showing 1-1 of 3 Products</p>
        <div style={{display:"flex",gap:"10px",alignItems:"center"}}>
            <p>The page you’re on</p>
            <img src='.\images\pagination number.svg'></img>
           <img src=".\images\Left icon (1).svg" style={{height:"30px"}}></img>
           <img src=".\images\right icon.svg" style={{height:"30px"}}></img>
        </div>


    </div>

<hr></hr>
        </>
    )
}