import { render } from '@testing-library/react'
import styles from '../pages/learning.module.css'
import { Table } from 'antd'

export default function Productmanagement(){
    const dataSource=[
        {id:"#15612323",name:"Anker multi device fast charging lineup",product:"product",stock:"7",coin:"./images/coin2.png",point:"2000pt",redemption:"01",status:"live",more:"./images/more action.svg"},
        {id:"#15612323",name:"Wollies Giftcard $100 Value",product:"voucher",stock:"10",coin:"./images/coin2.png",point:"2000pt",redemption:"-",status:"unfifnished",more:"./images/more action.svg"},
        {id:"#15612323",name:"Soundcore Space A40",product:"product",stock:"15",coin:"./images/coin2.png",point:"2000pt",redemption:"06",status:"live",more:"./images/more action.svg"},
       
    ]
    const columns=[
        {title:"Product ID",key:"id",dataIndex:"id"},
        {title:"Product name",key:"name",dataIndex:"name"},
        {title:'Product type',key:"product",dataIndex:"product"},
        {title:'Stock',key:"stock",dataIndex:"stock"},
        {title:"cost",key:"coin",dataIndex:"coin",
            render: (text, record) => (
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <img src={text} alt="" className={styles.pointsIcon} style={{ height: '20px' }} />
                  <span>{record.point}</span>
                </div>
              ),
        },
        {title:"Total Redemption",key:"redemption",dataIndex:"redemption"},
        {title:"status",key:"status",dataIndex:"status"},
        {title:"",key:"more",dataIndex:"more",
            render: (text) => (
                <img src={text} alt="more"  style={{ height: '5px',width:"15px" }} />
            ),
        }

    ]
    return(
        <>
            <div style={{display:"flex",justifyContent:'space-between',alignItems:"center"}}>
<div className={styles.info}>
  
    <div style={{display:"flex",alignItems:'center'}}>
        
        <p >Product management</p>
    </div>
    <p style={{fontSize:'13px'}}>Manage Redemption Products</p>
   
   
</div>
<div style={{display:"flex",gap:"10px"}}>
<img src=".\images\export.svg"></img>
<img src=".\images\add product.svg"></img>


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
        <p>Top Products Redeemed</p>
        <Table dataSource={dataSource} columns={columns} pagination={false}/>
    </div>
    
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <p>Showing 1-1 of 3 Products</p>
        <div style={{display:"flex",gap:"10px",alignItems:"center"}}>
            <p>The page you’re on</p>
            <img src='.\images\pagination number.svg'></img>
           <img src=".\images\Left icon (1).svg" style={{height:"30px"}}></img>
           <img src=".\images\right icon.svg" style={{height:"30px"}}></img>
        </div>


    </div>
        </>
    )
}