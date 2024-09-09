import styles from '../login.module.css'
import Button from '../components/signinbutton';
import ImageContainer from '../components/common/imagecontainer';
import { useNavigate } from 'react-router-dom';
export default function Login (){
    const navigate = useNavigate();

    const handleSignUpClick = (e) => {
        e.preventDefault();
        navigate('/signup');
      };
    return(
        <>
        <div className={styles.Container}>
<div className={styles.form}>
    <img src='.\images\logo.png' style={{height:"45px"}}></img>
    <div style={{marginTop:"20%"}}>
    <p>Welcome back!</p>
    <p style={{fontSize:"14px"}}> Access your online courses and track your progress.</p> 
    <form>
        <label style={{fontSize:"12px"}}>Email</label><br></br>
        <input type='text' placeholder='Enter your email here' style={{width:"100%",boxSizing:"border-box",padding:"15px",marginTop:"2%",borderRadius:'5px',border:'1px solid #EDEDED ',outline: "none"}}></input><br></br>
       <Button>Sign in</Button>
    </form>

    <p style={{fontSize:"12px",textAlign:"center"}}>Don’t have an account yet?<a href='signup'style={{color:"#4D74B1",textDecoration:"none"}} onClick={handleSignUpClick}> Sign up</a></p>
    </div>
   
</div>

<ImageContainer

title="Welcome to the"
subtitle="Anker Academy"
description="Sign In to access courses, learn, earn points, redeem rewards, and much more."
/>


        </div>
        </>
    )
}