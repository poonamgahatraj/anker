import { useState } from "react";
import Header from "../components/common/header";
import styles from './learning.module.css'
import LearningPortalOverview from "../components/learningportaloverview";
import Courses from "../components/courses";
import EmailTemplateBuilder from "../components/emailtemplatebuilder";


export default function Learningportal(){
    const [selectedTab, setSelectedTab] = useState('Learning Portal Overview');
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
<img src=".\images\bluearrow.png" style={{height:"15px"}}></img>
            <p> Dashboard / Learning Portal</p>
            </div>
            <div style={{display:'flex',gap:'20px'}}>
<p onClick={() => setSelectedTab('Learning Portal Overview')}
                        style={{
                            cursor: 'pointer',
                            color: selectedTab === 'Learning Portal Overview' ? 'blue' : 'black',
                            borderBottom: selectedTab === 'Learning Portal Overview' ? '2px solid blue' : 'none'
                        }}>Learning Portal Overview</p>
<p onClick={() => setSelectedTab('Courses')}
                        style={{
                            cursor: 'pointer',
                            color: selectedTab === 'Courses' ? 'blue' : 'black',
                            borderBottom: selectedTab === 'Courses' ? '2px solid blue' : 'none'
                        }}>Courses</p>
<p onClick={() => setSelectedTab('Email Template Builder')}
                        style={{
                            cursor: 'pointer',
                            color: selectedTab === 'Email Template Builder' ? 'blue' : 'black',
                            borderBottom: selectedTab === 'Email Template Builder' ? '2px solid blue' : 'none'
                        }}>Email Template Builder</p>
            </div>

            <div>
                    {renderContent()}
                </div>

         </div>
        </>
    )
}