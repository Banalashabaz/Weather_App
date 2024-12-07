import React from 'react'

export default function Humidity(props) {
    const style1={
        marginTop:'0px',
    }
    const style2={
        fontSize:'30px'
    }
    const style3={
        fontSize:'30px'
    }
  return (
    <div>
     <div style={style1}><i class="fa-solid fa-snowflake" style={style2}></i><span style={style3}>  Humidity</span></div><br />
     <div> {props.humidity}%</div>
    </div>
  )
}
