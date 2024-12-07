import React from 'react'

export default function Location(props) {
    const style1={
        fontSize:'40px',
        fontWeight:'500',
        marginTop:'0px'
    }
  return (
    <div>
      <h1 style={style1}>{props.name}</h1>
    </div>
  )
}
