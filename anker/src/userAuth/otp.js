import styles from '../otp.module.css';
import Button from '../components/signinbutton';
import ImageContainer from '../components/common/imagecontainer';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Otp (){
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const navigate = useNavigate();

    const handleChange = (value, index) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (newOtp.every(num => num !== '')) {
            if (newOtp.join('') === '000000') {
                // setMessage('OTP is correct');
                setIsError(false);
                setIsButtonDisabled(false);
            } else {
                setMessage("The code didn't match");
                setIsError(true);
                setIsButtonDisabled(true); 
            }
        } else {
            setMessage('');
            setIsError(false);
            setIsButtonDisabled(true); 
        }
    };

    const handleSignUpClick = () => {
        if (!isButtonDisabled) {
            navigate('/dashboard');  // Navigate to the dashboard
        }
    };


    return(
        <>
        <div className={styles.Container}>
<div className={styles.form}>
    <img src='.\images\logo.png' style={{height:"45px"}}></img>
    <div style={{marginTop:"10%"}}>
        <div style={{display:"flex",justifyContent:"start",alignItems:"center",gap:"5px"}}>
            <img src='.\images\leftarrow.jpg' style={{height:"5px"}}></img>
        <p style={{fontSize:"12px"}}> Back to Sign In</p>
        </div>
   
    <p style={{fontWeight:"400"}}>OTP Verification</p> 
    <p style={{fontSize:"13px"}}>Enter the code sent to jcousins@ankerinnovation.com</p>
   
   <div style={{display:"flex",justifyContent:"space-between",marginTop:"7%"}}>
   {otp.map((num, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    className={`${styles.box} ${isError ? styles.boxError : ''}`}
                                    maxLength="1"
                                    value={num}
                                    onChange={(e) => handleChange(e.target.value, index)}
                                />
                            ))}
   

   </div>

   {message && <p style={{ color: message === 'OTP is correct' ? 'green' : 'red' ,fontSize:"12px"}}>{message}</p>}
       <Button disabled={isButtonDisabled} onClick={handleSignUpClick}>Sign up</Button>

    <p style={{fontSize:"12px",textAlign:"center"}}>Didn’t get a code?  <a href='signup' style={{color:"#4D74B1",textDecoration:"none"}}> Click to resend</a></p>
    </div>
   
</div>

<ImageContainer
title="Welcome to the"
subtitle="Anker Academy"
description="Sign Up to access courses, learn, earn points, redeem rewards, and much more."
/>



        </div>
        </>
    )
}