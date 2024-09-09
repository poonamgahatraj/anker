import styles from './header.module.css'

export default function Header (){
    return(
        <>
        <div className={styles.Container}>
            <div className={styles.Content}>
<img src=".\images\logo.png" style={{height:"40px"}}></img>
<div style={{display:"flex",alignItems:"center",gap:"10px"}}>
<p style={{fontSize:"14px" ,color :"#001689"}}>Dashboard</p>
<button style={{backgroundColor:"#001689",color:"white",fontSize:"10px"}}>Admin</button>
</div>

            </div>
            <div className={styles.Content}>
<img src=".\images\Globe icon.svg"></img>
<div style={{position:"relative"}}>
    <img src='.\images\notification.png' ></img>
    <img src=".\images\Notify.svg" style={{position:"absolute",top:"-10px",left:"8px"}}></img>
</div>

<div className={styles.verticalLine}></div>
<img src=".\images\User profile (1).svg"></img>
            </div>
        </div>

        
        </>
    )
}