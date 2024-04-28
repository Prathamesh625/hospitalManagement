import React from 'react'
import Style from "../Components/input.module.css"

function PrescriptionForm(props) {
  const { medicin, setMedicin, time, setTime, submitHandler } = props
  
  return (
      <form className={Style.card} onSubmit={submitHandler}>
          <h2 className={Style.title}>Add Prescription</h2>
            <input
              className={Style.input}
              value={medicin}
              onChange={(e)=>setMedicin(e.target.value)}
              placeholder='Enter medicine'

          />
          
        
          <input
              className={Style.input}
              value={time}
              onChange={(e)=>setTime(e.target.value)}
              placeholder='Enter Time when to take'
          />

  
         
          <input
              className={Style.button}
              type='submit'
              value="Add" />
      </form>
  )
}

export default PrescriptionForm