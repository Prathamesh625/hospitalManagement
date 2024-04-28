import React, { useState } from 'react'
import style from "../Components/input.module.css"


function SignUpForm({patient,setPatient, onSubmitHandler}) {


    return (
        <form className={style.card} onSubmit={onSubmitHandler} >
          <h2 className={style.title}>Add Patient</h2>
            <input
              className={style.input}
              value={patient.name}
              onChange={(e)=>setPatient({...patient,name:e.target.value})}
              placeholder='Enter Patient Name'

          />
          
          {/* username */}
          <input
              className={style.input}
                value={patient.age}
                type='number'
                
              onChange={(e)=>setPatient({...patient,age:e.target.value})}
              placeholder='Enter Patient Age'
          />

         
          <input
                className={style.input}
                type='number'
              value={patient.contact}
              onChange={(e)=>setPatient({...patient,contact:e.target.value})}
              placeholder='Enter Contact No'

            />
            <input
              className={style.input}
              value={patient.address}
              onChange={(e)=>setPatient({...patient,address:e.target.value})}
              placeholder='Enter Patient Address'

          />
          <input
              className={style.button}
              type='submit'
                value="Add"
            />
      </form>
  )
}

export default SignUpForm