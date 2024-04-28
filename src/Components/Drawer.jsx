import React, { useEffect, useState } from 'react';
import { Button, Drawer, notification } from 'antd';
import { BellOutlined } from '@ant-design/icons';
import { getAllPrescription, getPrescription } from '../Api';
import { useAsyncError } from 'react-router';


const DrawerComp = ({ update }) => {
  


    const [open, setOpen] = useState(false);
    
    const [api, contextHolder] = notification.useNotification();
    const openNotification = (type) => {
    api[type]({
      message: 'Notification Title',
      description:
        'There are some new notifiction , Please check it out',
    });
    };
    


  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  
  const [count,setCount] = useState(0)
  const [time ,setTime] = useState('')
    
  useEffect(() => {

    let date = new Date();

    setTime(date.getHours() + ":" + date.getMinutes())
    
   const id =  setInterval(() => {
     setCount(count=>count+1)
    }, 1000);
    

    return () => clearInterval(id)

  },[count])

  console.log(time)


  const [data, setData] = useState([])
  
  const sendRequest = async () => {

    const response = await getAllPrescription()

    console.log(response.data)

    setData(response.data.prescription)
    
  }

  useEffect(() => {
    sendRequest()
  }, [update])

  
  const filtered = data.filter(value => value.time === time)
  
  const result = filtered.map(value => {


    return <div>
      <p style={{fontSize:"1rem" , fontWeight:"600"}}>{value.patient.patient_name}</p>
      <div style={{ display: "flex", justifyContent: 'space-between' }}>
        <p>{value.prescription}</p>
        <p>{value.time}</p>
      </div>
    </div>;

  })


  

  console.log(time)

  return (
      <>
            {contextHolder}
          <div style={{ position: 'relative' }}>
              <p style={{
                  padding: "5px",
                  fontSize: "0.7rem",
                  backgroundColor: "red",
                  position: "absolute",
                  bottom: "10px",
                  color: 'white',
                  fontWeight: "bold",
                  borderRadius: "50%",
                  left: "10px"
        }}></p>
              <BellOutlined onClick={showDrawer} style={{fontSize:"20px"}}/>
      </div>
      
      <Drawer title="Notification" onClose={onClose} open={open}>
  {result}
      </Drawer>
    </>
  );
};

export default DrawerComp;