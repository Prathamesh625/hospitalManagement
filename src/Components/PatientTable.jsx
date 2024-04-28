import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'
import { GetPatientsList } from '../Api'

function PatienTable() {

  const navigate = useNavigate()

  const [patients ,setPatients] = useState()


  const getPatients = async () => {

    try {
      
       const response = await GetPatientsList();
       setPatients(response.data.patients)

    } catch (error) {
      alert("error occcured" , error)
    }
   
  }

  useEffect(() => {
    getPatients()
  },[])

 



  const list =patients && patients.map(items =>  <tr onClick={()=>navigate("/patient", {state:{patientId:items.patient_id}})}>
      <td style={{padding:"20px", textAlign:'center', background:"white"}}>{items.patient_id }</td>
      <td style={{padding:"20px", textAlign:'center', background:"white"}}> {items.patient_name} </td>
      <td style={{padding:"20px", textAlign:'center', background:"white"}}>{items.age}</td>
      <td style={{padding:"20px", textAlign:'center', background:"white"}}>{items.room_no}</td>
      <td style={{padding:"20px", textAlign:'center', background:"white"}}>{items.bed_no}</td>
        </tr>
  )


  return (
   <>
      
<table style={{color:"black", tableLayout: "fixed" ,width:"100%"}}>
        <thead style={{position:"sticky", top:0,}}>
          <tr style={{border:"10px solid black"}}>
    <th style={{padding:"20px", textAlign:'center', background:"white"}}>Patient Id</th>
    <th style={{padding:"20px", textAlign:'center', background:"white"}}>Patient Name</th>
        <th style={{padding:"20px", textAlign:'center', background:"white"}}>Patient Age</th>
        <th style={{padding:"20px", textAlign:'center', background:"white"}}>Room No </th>
         <th style={{padding:"20px", textAlign:'center', background:"white"}}>Bed No</th>
      </tr>
        </thead>
    <tbody>
        {list}
 </tbody>
      </table>
  
      </>
  )
}

export default PatienTable