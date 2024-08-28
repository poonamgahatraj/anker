import styles from './table2.module.css'


export default function Table2 (){
    const tableData = [
        ["Bibash Khadka","Bibash@testing.com.au","../images/profileicon.svg", "Anker multi-Device fast chanrging lineup", "./images/points.svg", "Store 1"],
        ["Scott Singh","Bibash@testing.com.au","./images/profileicon.svg", "Eufy security camera 3","./images/points.svg", "Store 2"],
        ["Conor Keogh","Bibash@testing.com.au","./images/profileicon.svg", "Soundcore space A40", "./images/points.svg", "Store 3"],
        ["Bibash khadka","Bibash@testing.com.au","./images/profileicon.svg", "Eufy security camera 3", "./images/points.svg", "Store 4"],
        ["Bibash Khadka","Bibash@testing.com.au","./images/profileicon.svg", "Anker multi-Device fast chanrging lineup", "./images/points.svg", "Store 1"],
        ["Scott Singh","Bibash@testing.com.au","./images/profileicon.svg", "Eufy security camera 3","./images/points.svg", "Store 2"],
        ["Conor Keogh","Bibash@testing.com.au","./images/profileicon.svg", "Soundcore space A40", "./images/points.svg", "Store 3"],
        ["Bibash khadka","Bibash@testing.com.au","./images/profileicon.svg", "Eufy security camera 3", "./images/points.svg", "Store 4"],
        ["Bibash Khadka","Bibash@testing.com.au","./images/profileicon.svg", "Anker multi-Device fast chanrging lineup", "./images/points.svg", "Store 1"],
        ["Scott Singh","Bibash@testing.com.au","./images/profileicon.svg", "Eufy security camera 3","./images/points.svg", "Store 2"],
        ["Conor Keogh","Bibash@testing.com.au","./images/profileicon.svg", "Soundcore space A40", "./images/points.svg", "Store 3"],
        ["Bibash khadka","Bibash@testing.com.au","./images/profileicon.svg", "Eufy security camera 3", "./images/points.svg", "Store 4"],
       
        // Add more lists for additional rows
      ];
    return(
        <>
        
         <table className={styles.table}>
         
        <thead>
          <tr>
           
            <th>Username</th>
            <th>Leaderboard</th>
            <th>Submission point</th>
            <th>Store name</th>
          
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td style={{display:"flex",alignItems:"center",gap:"20px"}}>
              
                <img src={row[2]} alt="Profile" className={styles.profileIcon} />
               
                <div style={{textAlign:"justify",fontSize:'14px'}}>
                  {row[0]}<br />
                  {row[1]}
                </div>
              </td>
              <td style={{textAlign:"center",fontSize:"15px"}}>{row[3]}</td>
              <td>
                <img src={row[4]} alt="Points" className={styles.pointsIcon} />
              </td>
              <td style={{fontSize:"15px"}}>{row[5]}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
        </>
    )
}