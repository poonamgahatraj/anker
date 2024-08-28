import styles from '../signup.module.css'
import ImageContainer from '../components/common/imagecontainer';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Signup (){
    const [showRetailerDropdown, setShowRetailerDropdown] = useState(false);
    const [showStoreDropdown, setShowStoreDropdown] = useState(false);
    const [selectedRetailer, setSelectedRetailer] = useState('');
    const [selectedStore, setSelectedStore] = useState('');
    const navigate = useNavigate();  
    const retailers = ['JB HI-FI', 'Noel Leeming', 'Harvey Norman', 'Officeworks'];
    const store= ['Blacktown Mega Centre', 'Moore Park', 'Hurstville'];

    const handleRetailerClick = (retailer) => {
        setSelectedRetailer(retailer);
        setShowRetailerDropdown(false); 
    };
    const handleStoreClick = (store) => {
        setSelectedStore(store);
        setShowStoreDropdown(false); 
    };


    const handleSubmit = (e) => {
        e.preventDefault();  // Prevent default form submission behavior
        navigate('/otp');  // Navigate to /otp route
    };

    return(
        <>
        <div className={styles.Container}>
<div className={styles.form}>
    <img src='.\images\logo.png' style={{height:"45px"}}></img>
    <div style={{marginTop:"5%"}}>
    <p>Create Your Account</p>
    <p style={{fontSize:"14px"}}>Sign up to access courses, learn, earn points, redeem rewards, and much more.</p> 
    <form>
        <label className={styles.label}>Full name</label><br></br>
        <input type='text' placeholder='Enter your full name here'  className={styles.input}></input><br></br>
        <label className={styles.label}>Email</label><br></br>
        <input type='text' placeholder='Enter your email here'className={styles.input}></input><br></br>
        <label className={styles.label}>Retailer</label><br></br>
        <input type='text' placeholder='Select the retailer' value={selectedRetailer}  onChange={(e) => setSelectedRetailer(e.target.value)} onClick={() => setShowRetailerDropdown(!showRetailerDropdown)} className={styles.input}></input><br></br>
        {showRetailerDropdown && (
                                <div className={styles.dropdown}>
                                    {retailers.map((retailer, index) => (
                                        <p
                                            key={index}
                                            onClick={() => handleRetailerClick(retailer)}
                                            style={{  cursor: 'pointer' }}
                                        >
                                            {retailer}
                                        </p>
                                    ))}
                                </div>
                            )}
        <label className={styles.label}>Store name</label><br></br>
        <input type='text' placeholder='Select the store' value={selectedStore} onChange={(e) => setSelectedStore(e.target.value)} onClick={() => setShowStoreDropdown(!showStoreDropdown)}  className={styles.input} ></input><br></br>
        {showStoreDropdown && (
                                <div className={styles.dropdown}>
                                    {store.map((store, index) => (
                                        <p
                                            key={index}
                                            onClick={() => handleStoreClick(store)}
                                            style={{  cursor: 'pointer' }}
                                        >
                                            {store}
                                        </p>
                                    ))}
                                </div>
                            )}
        <button className={styles.signup}>Sign Up</button>
    </form>

    <p style={{fontSize:"12px",textAlign:"center"}}>Already have an account? <a href='signup'style={{color:"#4D74B1",textDecoration:"none"}} onClick={handleSubmit}> Sign in</a></p>
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