import React from 'react'
import SideNavBar from '../Components/SideNavBar'
import styles from "../Pages/AddPatientPage.module.css"
import PatienTable from '../Components/PatientTable'

import DrawerComp from '../Components/Drawer'
import Header from '../Components/Header'

function PatientManager() {
  return (
    <div className={styles.Container}>
       <Header/>
      <div className={styles.flex}>
        <SideNavBar /> 
            <div className={styles.table}>
                <PatienTable/>
            </div>
        </div>   
    </div>
  )
}

export default PatientManager