
import { Table } from "antd"
import styles from '../pages/learning.module.css'
import { render } from "@testing-library/react"
export default function Courses (){
    const dataSource=[
        {img:"./images/Gift card image1.png",title:'B600 Video Bar',date:"05 Sep, 2022",modules:"06",createdfor:"Anker",enrollments:"0",status:"Published",analytics:"./images/analytics.svg"},
        {img:"./images/Gift card image2.png",title:'Anker Power house 767',date:"05 Sep, 2022",modules:"06",createdfor:"Anker",enrollments:"0",status:"Draft",analytics:"./images/analytics.svg"}
    ]

    const columns=[
        {title:"Course title",key:"title",dataIndex:"title",
            render: (text, record) => (
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <img src={record.img} alt="Profile" className={styles.profileIcon} style={{ height: '25px', width: '25px' }} />
                   
                        {record.title}
                    
                    
                </div>
            ),
        },
        {title:"Creation date",key:"date",dataIndex:"date"},
        {title:"Modules",key:"modules",dataIndex:"modules"},
        {title:"Created for",key:"createdfor",dataIndex:"createdfor"},
        {title:"Enrollments",key:"enrollments",dataIndex:"enrollments"},
        {title:"Status",key:"status",dataIndex:"status"},
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
      <p >Courses</p>
      <p style={{fontSize:'13px'}}>Manage, create or unpublish a course.</p>
      </div>
      <div>
        <img src=".\images\createcourse.svg"></img>
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
        <p>Showing 1-1 of 2 Courses</p>
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