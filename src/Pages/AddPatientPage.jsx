import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router'
import SideNavBar from '../Components/SideNavBar'
import styles from "./AddPatientPage.module.css"
import SignUpForm from '../Components/Input'
import RoomCard from '../Components/RoomCard'
import { CreateNewPatient, getAllPrescription, getPrescription, getRooms } from '../Api'
import {toast,Toaster} from 'react-hot-toast'
import Header from '../Components/Header'
import DrawerComp from '../Components/Drawer'
import { notification } from 'antd'



function AddPatientPage() {





  const [update ,setUpdate] = useState(0)

  const [bed, setBed] = useState({
        room_no: undefined,
        bed_no :undefined
  })
    
    const [patient, setPatient] = useState({
        name: '',
        age: Number,
        contact: Number,
        address:''
    })
  
  // react-hot-toast

  const success = () => toast.success(" Patient Added Succesfully!")
    const error = () => toast.error("error occured while adding patient")
  
  

    const onSubmitHandler = async (e) => {

        e.preventDefault();

        if(!patient.name || !patient.age || !patient.contact || !patient.address  ) return alert("Please fill all details")

       const response = await CreateNewPatient(patient,bed)

      if (response.data.status === "success") {

        success()
     
        
      }
      else {

        error()

      }
       
  }
  





  return (
    <div className={styles.Container}>
      <Header  />
      <Toaster/>
        <div className={styles.flex}>
            <SideNavBar /> 
        <div className={styles.width}>
          <RoomCard room={1} bed={bed} setBed={setBed} />
          <RoomCard room={2} bed={bed} setBed={setBed} />
        </div>
            <SignUpForm patient={patient} setPatient={setPatient} bed={bed} onSubmitHandler={onSubmitHandler} />
      </div>   
    </div>
)
}

export default AddPatientPage