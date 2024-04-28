import React from 'react'

function AllocatedBed({items}) {
  return (
      <div  style={{
                border: "2px solid gray",
                padding: "10px",
                borderRadius: "5px",
                backgroundColor:"lightgray",
                fontSize: "small"
    }}>{items.bed_no}</div>
  )
}

export default AllocatedBed