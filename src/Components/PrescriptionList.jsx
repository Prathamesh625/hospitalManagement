import React from 'react'
import style from "../Components/Prescription.module.css"

function PrescriptionList({list}) {

  console.log(list)

    const prescriptions = list && list.map(li => <div className={style.list}><p>{li.prescription}</p><p>{li.time}</p></div>)

  return (
      <div className={style.scroll}>
          <h2 className={style.title}>Prescription List</h2>
          { prescriptions && prescriptions.reverse()}
    </div>
  )
}

export default PrescriptionList