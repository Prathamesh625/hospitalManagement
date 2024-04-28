import React from 'react'
import styles  from "./SideNavBar.module.css"
import { useNavigate } from 'react-router'

function SideNavBar() {

    const routes = [
        { route: "Home Page", icon: "" , PATH:'/add/patient' },
        {route: "Patient Manager" , icon:"", PATH:"/manage/patient"}
    ]

    const navigate = useNavigate()

  return (
      <div className={styles.card}>
          {
              routes.map(li => {
                  return <div className={styles.list}
                   onClick={()=>navigate(`${li.PATH}`)}>{li.route}</div>
              })
          }
    </div>
  )
}

export default SideNavBar