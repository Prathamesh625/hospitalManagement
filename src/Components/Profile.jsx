import React from 'react'

function Profile({ patient }) {
    console.log(patient)
    return (
        <>{ patient?<div style = {{ background: 'white', padding: '20px', width: '400px', height: "50vh", marginLeft: '10px', marginRight: "10px", borderRadius: '10px' } } >
        <p style={{ fontSize: "medium", fontWeight: "600",fontSize: 'larger' , fontWeight: '400',color: 'rgb(99, 96, 96)' }}>Profile</p>
        <div style={{marginTop:"20px"}}>
            <p style={{ textAlign: "center", fontSize: "larger", marginTop: "20px" }}>{patient.patient_name}</p>
            <p style={{textAlign:"center", fontSize:"medium",marginTop:"20px"}}>ID - {patient.patient_id}</p>
            <p style={{ textAlign: "center", fontSize: "medium", marginTop: "20px" }}>Age - {patient.age}</p>
            <p style={{textAlign:"center",fontSize:"medium",marginTop:"20px"}}>pending</p>
        </div>
    </div> : <div>nothing is here</div>
}</>
)
}

export default Profile