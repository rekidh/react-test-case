import React from 'react'

const styles:React.CSSProperties= {
   display:'flex',
   flexDirection: 'column',
   alignItems: 'center',
   background:'black',
   color: 'white',
}

export default function Footer() {
  return (
    <div style={styles}>
      <p>All Rights Reserved © 2023 | Rekidh</p>
    </div>
  )
}
