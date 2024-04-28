import React, { useEffect, useRef, useState } from 'react'
import PrescriptionForm from '../Components/PrescriptionForm'
import styles from "../Pages/AddPatientPage.module.css"
import SideNavBar from '../Components/SideNavBar';
import PrescriptionList from '../Components/PrescriptionList';
import Profile from '../Components/Profile';
import { useLocation } from 'react-router';
import { findAllByAltText } from '@testing-library/react';
import { addPrescription, FindPatient, getAllPrescription } from '../Api';
import DrawerComp from '../Components/Drawer';
import Header from '../Components/Header';
import toast, { Toaster } from 'react-hot-toast';
import { useFetcher } from 'react-router-dom';

function Patient() {
  

  const [update, setUpdate] = useState(0);

  const [medicin, setMedicin] = useState('');
  
  const [time, setTime] = useState('')
  
  const [patient,setPatient] = useState()
    
  console.log(medicin, time)
  
  const location = useLocation();

  const fetchPatient = async () => {

    try {

      
      const response = await FindPatient(location.state.patientId);
      
      setPatient(response.data.patient)

      
    } catch (error) {

      console.log("error occurred", error)

    }
   
    
  }



  useEffect(() => {

    fetchPatient()

  },[location.state.patientId , update])



  const submitHandler = async (e) => {

    e.preventDefault()

    if(!patient.patient_id || !medicin || !time) return alert("all field are necessaary")

    const add = await addPrescription(medicin, time, patient && patient.patient_id);
    
    if (add.data.status === "success") {


      toast.success("prescription added")

      setUpdate(prev=>prev+1)


    } 

    
  }


  
  return (
    <div className={styles.Container}>
<Toaster/>
      <Header update={update} />
      <div className={styles.flex}>
            <SideNavBar /> 
          <div style={{ display: "flex", width: "100%" }}>
          <Profile patient={patient} />
              <PrescriptionForm
                medicin={medicin}
                time={time}
                setMedicin={setMedicin}
                setTime={setTime}
                submitHandler={submitHandler}
          />
          
          <PrescriptionList list={patient && patient.prescription} update={update} />
            </div>
        </div>   
    </div>
  )
}

export default Patient