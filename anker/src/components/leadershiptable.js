import styles from './table.module.css'
export default function Leadershiptable (){
    const tableData = [
        ["Anker Multi-Device Fast Charging Lineup","05 Sep, 2022, 1:00pm","350", "ANKER", "Upcoming", "./images/analytics.svg"],
        ["Anker Nano 3","05 Sep, 2022, 1:00pm","50", "soundcare", "live", "./images/analytics.svg"],
        ["eufy Security Camera 3","05 Sep, 2022, 1:00pm","350", "eufy", "finished", "./images/analytics.svg"],
        ["Soundcore Space A40","05 Sep, 2022, 1:00pm","50", "ANKER", "finished", "./images/analytics.svg"],
        ["eufy Security Camera 3","05 Sep, 2022, 1:00pm","350", "eufy", "finished", "./images/analytics.svg"],
      
       
        // Add more lists for additional rows
      ];
    return(
        <>
        <p style={{fontSize:"18px"}}>Most Recent Signups</p>
         <table className={styles.table}>
         
        <thead>
          <tr>
           
            <th>Leaderboard title</th>
            <th>Start date</th>
            <th>Total submission</th>
            <th>Created for</th>
            <th>Status</th>
            <th>Analytics</th>
          
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
             
              <td style={{fontSize:"15px"}}>{row[0]}</td>
              <td style={{fontSize:"15px"}}>{row[1]}</td>
              <td style={{fontSize:"15px"}}>{row[2]}</td>
              <td style={{fontSize:"15px"}}>{row[3]}</td>
              <td style={{fontSize:"15px"}}>{row[4]}</td>
              <td>
                <img src={row[5]} alt="Points" className={styles.pointsIcon} />
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
        </>
    )
}