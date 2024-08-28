import styles from './table.module.css'
export default function Table (){
    const tableData = [
        ["Bibash Khadka","Bibash@testing.com.au","./images/profileicon.svg", "User", "07 Sep, 2022", "JB Hi-Fi", "Moore Park","8", "./images/points.svg", "01"],
        ["Scott Singh","Bibash@testing.com.au","./images/profileicon.svg", "Admin", "07 Sep, 2022", "Noel Leeming", "Blacktown Mega Centre", "4","./images/points.svg", "01"],
        ["Conor Keogh","Bibash@testing.com.au","./images/profileicon.svg", "Admin", "07 Sep, 2022", "Harvey Norman", "Hurstville", "3","./images/points.svg", "01"],
        ["Bibash khadka","Bibash@testing.com.au","./images/profileicon.svg", "User", "07 Sep, 2022", "JB Hi-Fi", "Hurstville","8", "./images/points.svg", "01"],
      
       
        // Add more lists for additional rows
      ];
    return(
        <>
        <p style={{fontSize:"18px"}}>Most Recent Signups</p>
         <table className={styles.table}>
         
        <thead>
          <tr>
           
            <th>Username</th>
            <th>Account type</th>
            <th>Account created</th>
            <th>Retailer</th>
            <th>Store name</th>
            <th>Course started</th>
            <th style={{textAlign:"center"}}>Points</th>
            <th>Total redemption</th>
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
              <td style={{fontSize:"15px"}}>{row[4]}</td>
              <td style={{fontSize:"15px"}}>{row[5]}</td>
              <td style={{fontSize:"15px"}}>{row[6]}</td>
              <td style={{textAlign:"center",fontSize:"15px"}}>{row[7]}</td>
              <td>
                <img src={row[8]} alt="Points" className={styles.pointsIcon} />
              </td>
              <td style={{textAlign:"center",fontSize:"15px"}}>{row[9]}</td>
            </tr>
          ))}
        </tbody>
      </table>
        </>
    )
}