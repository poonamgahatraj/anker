import styles from '../otp.module.css';
import Button from '../components/signinbutton';
import ImageContainer from '../components/common/imagecontainer';

export default function Codesuccess (){
   


    return(
        <>
        <div className={styles.Container}>
<div className={styles.form}>
    <img src='.\images\logo.png' style={{height:"45px"}}></img>
    <div style={{marginTop:"20%"}}>
        <img src='.\images\tick.svg' style={{height:"45px"}}></img>
    <p>Code sent successfully</p>
    <p style={{fontSize:'14px'}}>We have successfully sent you a code. Click continue to enter again.</p> 
    
   
 

   <Button>Continue</Button>
        
   

   
    </div>
   
</div>


<ImageContainer
title="Welcome to the"
subtitle="Anker Academy"
description="Enter OTP to access courses, learn, earn points, redeem rewards, and much more."
/>
        </div>
        </>
    )
}