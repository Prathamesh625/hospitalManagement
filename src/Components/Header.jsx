import React, { useEffect, useState } from 'react'
import Style from "../Components/Header.module.css"
import DrawerComp from './Drawer'
import { BellOutlined } from '@ant-design/icons' 

function Header({update}) {





    return (
      
    <div className={Style.header}>
            <div className={Style.flex}>
                <p>Add Patient </p>
          <DrawerComp update={update} />
            </div>
    </div>
  )
}

export default Header