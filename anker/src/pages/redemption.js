import styles from './leaderboard.module.css'
import Header from '../components/common/header';
import Table2 from '../components/table2';
import { useState } from 'react';
import Leadershiptable from '../components/leadershiptable';

export default function Redemption (){
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
          <Header/>
          <hr ></hr>
          <div className={styles.Container}>
            <div style={{display:"flex",alignItems:"center",gap:"5px"}}>
<img src=".\images\bluearrow.png" style={{height:"15px"}}></img>
            <p>Dashboard / Leaderboard Overview</p>
            </div>
            <div style={{display:'flex',gap:'20px'}}>
<p>Leaderboard Overview</p>
<p>Leaderboard Panel</p>
<p>Submissions</p>
            </div>

            <div style={{display:"flex",justifyContent:'space-between',alignItems:"center"}}>
<div className={styles.info}>
  
    <div style={{display:"flex",alignItems:'center'}}>
        <img src=".\images\book.png" style={{height:"25px"}}></img>
        <p>Leaderboard overview</p>
    </div>
    <p style={{fontSize:'13px'}}>Summary of all Leaderboard Activity.</p>
   
   
</div>
<div style={{display:"flex",gap:"10px"}}>
<div className={styles.Rectangle} onClick={toggleDropdown}>
<div  className={styles.subrectangle}>
    <p>Sort by</p>
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
        <h1>7</h1>
        <p>Total Leaderboards</p>
    </div>
    <div  className={styles.Box1}>
    <h1>6</h1>
    <p>Active Leaderboards</p>
    </div>
    <div  className={styles.Box1}>
    <h1>1012</h1>
    <p>Total Submissions</p>
    </div>
    <div  className={styles.Box1}>
    <h1>51</h1>

    <p>Field Team Accounts</p> 
   
    </div>

</div>


<div style={{display:"flex",justifyContent:"space-between"}}>
<div style={{border:"1px solid #E8E8E8",padding:"15px",width:"70%",height:"460px",overflow:"scroll"}}>
    <p>Recent submissions</p>
    <div style={{marginTop:'3%'}}>
   <Table2/>
</div>
</div>

<div style={{width:"24%",padding:"15px",border:"1px solid #E8E8E8"}}>
<p>Top performing stores (Across all leaderboards)</p>
<div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
    <img src=".\images\Coin.png"></img>
    <p>35,400pt</p>
    <p>JB Hi-Fi Broadway</p>
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
<div>
    <Leadershiptable/>
</div>
            </div>
        </>
    )
}