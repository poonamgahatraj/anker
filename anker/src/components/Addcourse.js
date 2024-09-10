import styles from './addcourse.module.css'

export default function Addcourse (){
    return(
        <>
       <div className={styles.Container}>
        <div className={styles.header}>
            <div style={{display:"flex",gap:"15px"}}>
                <img src='.\images\Back icon (2).svg'></img>
                <p>Add Course</p>
            </div>
            <div style={{display:"flex",gap:"15px"}}>
                <img src='.\images\Visibility ON.svg'></img>
                <p>Preview</p>
                <img src='.\images\close (1).svg'></img>
            </div>
        </div>
        <div className={styles.content}>
        <div style={{width:'25%',padding:"2%",backgroundColor:'#F8FAFC'}}>
<div style={{display:"flex",justifyContent:"start",alignItems:"center",gap:"10px"}}>
    <div style={{height:"20px",width:'20px',borderRadius:"50%",border:'1px solid #001689',display:"flex",justifyContent:"center",alignItems:'center',color:'#001689'}}>01</div>
    <p>Course Information</p>
</div>
<div style={{display:"flex",justifyContent:"start",alignItems:"center",gap:"10px"}}>
    <div style={{height:"20px",width:'20px',borderRadius:"50%",border:'1px solid #001689',display:"flex",justifyContent:"center",alignItems:'center',color:'#001689'}}>02</div>
    <p>Add Sections </p>
</div>
<div style={{display:"flex",justifyContent:"start",alignItems:"center",gap:"10px"}}>
    <div style={{height:"20px",width:'20px',borderRadius:"50%",border:'1px solid #001689',display:"flex",justifyContent:"center",alignItems:'center',color:'#001689'}}>03</div>
    <p>Review & publish course </p>
</div>
        </div>
        </div>
       </div>
      
        </>
    )
}