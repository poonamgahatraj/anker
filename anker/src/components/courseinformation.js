import React from 'react'
import styles from './courseinformation.module.css'
export default function Courseinformation () {
  return (
    <div>
        <p>Step 1 of 3</p>
        <p>Let’s help you create a course</p>
        <hr></hr>
        <form>
            <label>Course Title</label><br></br>
            <input type='text' placeholder='Enter the course title here' className={styles.input}></input><br></br>
            <label>Course Description</label><br></br>
            <input type='text' placeholder='Enter course description here' className={styles.input}></input><br></br>
            <label>Course Cover Image</label><br></br>
            <div style={{textAlign:"center",border:"0.5px dotted",margin:'15px 0'}}>
                <img src='.\images\upload icon.svg'></img>
                <p>Drag and drop a image here, or Browse</p>
                <p>Recommended format: 1920 x 1080 pixels (PNG or JPG)</p>
            </div>
            <p>What will students learn in your course?</p>
            <label>Enter the learning objectives or outcomes that learners can expect to achieve after completing your course.</label><br></br>
            <input type='text' placeholder='Example : Identify and manage project risks' className={styles.input}></input><br></br>
            <p style={{color:"#4D74B1"}}>+ Add More</p>
            <p>What does the course provide to learners ( Select multiple if applicable )</p>
            <div style={{display:'flex',gap:"15px"}}>
                <input type='checkbox' ></input><p>Expert mentorship</p>
                <input type='checkbox' ></input><p>Expert mentorship</p>
                <input type='checkbox'></input><p>Expert mentorship</p>
            </div>
            <label>Brand Created for</label><br></br>
            <input type='text' placeholder='eufy' className={styles.input}></input><br></br>
            <label>eufy Sub-Brand</label><br></br>
            <input type='text' placeholder='Select sub-brand' className={styles.input}></input><br></br>
            <label>Retailer</label><br></br>
            <input type='text' placeholder='Select the retailer' className={styles.input}></input><br></br>
            <div style={{display:"flex",justifyContent:"flex-end",gap:"10px"}}>
<img src='.\images\Submit btn (9).svg'></img>
<img src='.\images\Submit btn (10).svg'></img>
            </div>

        </form>
    </div>
  )
}

