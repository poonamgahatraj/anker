import Bargraph1 from "../components/bargraph1";
import Bargraph2 from "../components/bargraph2";

import styles from '../pages/learning.module.css'
import { useState } from "react";

export default function LearningPortalOverview(){
    const [showDropdown, setShowDropdown] = useState(false);
    const [showDropdown2, setShowDropdown2] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };
    const toggleDropdown2 = () => {
        setShowDropdown2(!showDropdown2);
    };
    return(
        <>
          <div style={{display:"flex",justifyContent:'space-between',alignItems:"center"}}>
<div className={styles.info}>
  
    <div style={{display:"flex",alignItems:'center'}}>
        <img src=".\images\book.png" style={{height:"25px"}}></img>
        <p >Learning Portal Overview</p>
    </div>
    <p style={{fontSize:'13px',marginTop:"0"}}>Summary of Learning Portal Activity.</p>
   
   
</div>
<div style={{display:"flex",gap:"10px"}}>
<div className={styles.Rectangle} onClick={toggleDropdown}>
<div  className={styles.subrectangle}>
    <p style={{color:"#4D74B1"}}>Sort by</p>
    <p>All Retailers</p>
</div>
<img src=".\images\dropdown.png" style={{height:"10px"}}></img>

{showDropdown && (
                                <div className={styles.dropdown}>
                                    <p> All Retailer </p>
                                    <p>JB HI-FI</p>
                                    <p>Noel Leeming</p>
                                    <p>Harvey Norwon</p>
                                    <p>Officeworks</p>
                                </div>
                            )}
</div>

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
        <h1>9</h1>
        <p>Available Courses</p>
    </div>
    <div  className={styles.Box1}>
    <h1>6</h1>
    <p>Draft Courses</p>
    </div>
    <div  className={styles.Box1}>
    <h1>5</h1>
    <p>Unpublished Courses</p>
    </div>
    <div  className={styles.Box1}>
    <h1>51m 23s</h1>

    <p>Average Time Per Course</p> 
   
    </div>

</div>

<div style={{display:"flex",justifyContent:'space-between',marginTop:"3%"}}>
    <div>
    <Bargraph1/>
    </div>
    <div>
    <Bargraph2/> 
     </div>
    
   
</div>

<div style={{display:"flex",justifyContent:"space-between",marginTop:'3%'}}>
<div style={{border:"1px solid #E8E8E8",padding:"15px",width:"70%"}}>
    <p>Recent Activities</p>
    <hr></hr>
    <div style={{padding:"0 2%"}}>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
     <div style={{display:'flex',gap:"15px",alignItems:'center'}}>
<img src=".\images\Off Tab.png" style={{height:"12px"}}></img>
<p>A new course has been added</p>

     </div>
     <p>05 Sep, 2022</p>
    </div>

    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
     <div style={{display:'flex',gap:"15px",alignItems:"center"}}>
<img src=".\images\Gift card image.png" style={{height:"20px"}}></img>
<p>B600 Video Bar</p>

     </div>

     <div style={{display:"flex",alignItems:"center",gap:'15px'}}>
        <img src=".\images\Modulle.png" style={{height:"14px"}}></img>
        <div style={{display:"flex",alignItems:"center",gap:"12px"}}>
            <img src=".\images\timer.png" style={{height:"12px"}}></img>
            <p>12 hours 13 min</p>
        </div>
     </div>
    
    </div>

    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
     <div style={{display:'flex',gap:"15px",alignItems:'center'}}>
<img src=".\images\Off Tab.png" style={{height:"12px"}}></img>
<p>A new email template has been created</p>

     </div>
     <p>05 Sep, 2022</p>
    </div>
   

    <div style={{display:'flex',gap:"15px",alignItems:"center"}}>
<img src=".\images\Gift card image.png" style={{height:"20px"}}></img>
<p>Email title example 1</p>

     </div>
</div>
</div>

<div style={{width:"24%",padding:"15px",border:"1px solid #E8E8E8"}}>
<p>Course Rating</p>
<div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
    <img src=".\images\happy emoji.png"></img>
    <p style={{color:"#4D74B1"}}>4.0/5</p>
    <p>Based on 10 reviews</p>
</div>

<div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
    <img src=".\images\love emoji.png" style={{height:"35px"}}></img>
    <div>
        <p style={{margin:"-10px",textAlign:"center"}}>3/5</p>
        <img src=".\images\progess line.png"></img>
    </div>
    <p>7 review</p>
</div>

<div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
    <img src=".\images\happy emoji.png" style={{height:"35px"}}></img>
    <div>
        <p style={{margin:"-10px",textAlign:"center"}}>2/5</p>
        <img src=".\images\progess line1.png"></img>
    </div>
    <p>7 review</p>
</div>

<div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
    <img src=".\images\Sad emoji.png" style={{height:"35px"}}></img>
    <div>
        <p style={{margin:"-10px",textAlign:"center"}}>1/5</p>
        <img src=".\images\progess line2.png"></img>
    </div>
    <p>7 review</p>
</div>

<div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
    <img src=".\images\Angry emoji Mask.png" style={{height:"35px"}}></img>
    <div>
        <p style={{margin:"-10px",textAlign:"center"}}>1/5</p>
        <img src=".\images\progess line3.png"></img>
    </div>
    <p>7 review</p>
</div>

</div>

</div>
        </>
    )
}