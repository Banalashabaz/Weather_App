import React from 'react'

export default function Temparature(props) {
    const style1={
        fontSize:'60px',
        fontWeight:'300',
        marginTop:'0px'
    }
  return (
    <div>
      <h1 style={style1}>{props.temp}&#xb0;C</h1>
    </div>
  )
}
