import styles from '../pages/learning.module.css'

export default function EmailTemplateBuilder(){
    return(
        <>
        <div style={{display:"flex",justifyContent:'space-between',alignItems:"center"}}>
<div className={styles.info} style={{width:"100%"}}>
  
    <div style={{display:"flex",alignItems:'center',justifyContent:"space-between"}}>
      <div>
      <p >Email Template Builder</p>
      <p style={{fontSize:'13px'}}>Create and customize the pre - build email templates</p>
      </div>
      <div>
        <img src=".\images\Submit btn1.png"></img>
      </div>
      
    </div>
  
<div style={{display:"flex",gap:'20px'}}>
<img src=".\images\Redeem rewards.png"></img>
<img src=".\images\My favourite.png"></img>
</div>

<div style={{textAlign:"center"}}>
    <p>Let’s start designing!</p>
    <p>Get started by creating an awesome email or browse and edit existing email templates. Enjoy it!</p>
    <button style={{border:"none",backgroundColor:"#F3F3F3",padding:"10px"}}>Start Designing</button>

</div>

    </div>
    </div>
        </>
    )
}