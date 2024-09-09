import { useState } from "react";
import Header from "../components/common/header";
import styles from './learning.module.css'
import LearningPortalOverview from "../components/learningportaloverview";
import Courses from "../components/courses";
import EmailTemplateBuilder from "../components/emailtemplatebuilder";
import { useNavigate } from "react-router-dom";


export default function Learningportal(){
    const [selectedTab, setSelectedTab] = useState('Learning Portal Overview');
    const navigate = useNavigate();
    const renderContent = () => {
        switch (selectedTab) {
            case 'Learning Portal Overview':
                return <LearningPortalOverview />;
             case 'Courses':
                 return <Courses />;
            case 'Email Template Builder':
                 return <EmailTemplateBuilder />;
            default:
                return <LearningPortalOverview />;
        }
    };
    return(
        <>
         <Header/>
         <hr ></hr>
         <div className={styles.Container}>
            <div style={{display:"flex",alignItems:"center",gap:"5px"}}>
<img src=".\images\Back icon (1).svg" style={{height:"15px"}}></img>
            <p style={{color:"#001689"}} onClick={() => navigate('/dashboard')}> Dashboard </p><span><p>/ {selectedTab}</p></span>
            </div>
            <div style={{display:'flex',gap:'20px'}}>
<p onClick={() => setSelectedTab('Learning Portal Overview')}
                        style={{
                            cursor: 'pointer',
                            color: selectedTab === 'Learning Portal Overview' ? '#001689' : 'black',
                            borderBottom: selectedTab === 'Learning Portal Overview' ? '2px solid #001689' : 'none'
                        }}>Learning Portal Overview</p>
<p onClick={() => setSelectedTab('Courses')}
                        style={{
                            cursor: 'pointer',
                            color: selectedTab === 'Courses' ? '#001689' : 'black',
                            borderBottom: selectedTab === 'Courses' ? '2px solid #001689' : 'none'
                        }}>Courses</p>
<p onClick={() => setSelectedTab('Email Template Builder')}
                        style={{
                            cursor: 'pointer',
                            color: selectedTab === 'Email Template Builder' ? '#001689' : 'black',
                            borderBottom: selectedTab === 'Email Template Builder' ? '2px solid #001689' : 'none'
                        }}>Email Template Builder</p>
            </div>

            <div>
                    {renderContent()}
                </div>

         </div>
        </>
    )
}