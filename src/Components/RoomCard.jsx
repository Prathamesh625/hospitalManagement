import React, { useEffect, useState } from 'react'
import style from "./RoomCard.module.css"

import { getRooms, getSingleRoom } from '../Api'
import AllocatedBed from './AllocatedBed'

function RoomCard({ room, bed, setBed }) {

  const [beds, setBeds] = useState({
    room: undefined,
    bed: undefined
  })

  const [rooms, setRooms] = useState();
  
  const roomHandler = async () => {
   
    const rooms = await getSingleRoom(JSON.parse(localStorage.getItem("id")),room);

    console.log(rooms.data.rooms)

    setRooms(rooms.data.rooms)
    
  }


  
  useEffect(() => {
    roomHandler()
  }, [])
  


  const onClickHandler = (items) => {

    console.log(items.bed_no, items.room_no)

    setBed({ room: items.room_no, bed: items.bed_no })

  }


  

   const grids =  rooms  && rooms.beds.map((items,index) => {
        return items.isFull ? <AllocatedBed items={items} /> : <div
            style={{
                border: "1px solid rgb(197, 192, 192)",
                padding: "10px",
                borderRadius: "5px",
                backgroundColor:`${(bed.room === room && bed.bed) === index + 1 ?"rgb(178, 241, 178)":"white"}`,
                fontSize: "small"
            }}  onClick={()=>onClickHandler(items)} >
            {items.bed_no}
        </div> 
    })





  return (
      <div className={style.card}>
          <div className={style.CardTitle}>ROOM NO {room}</div>
            <div className={style.grid}>
         {grids}
          </div>
    </div>
  )
}

export default RoomCard

