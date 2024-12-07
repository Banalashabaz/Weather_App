import React from 'react'

export default function Windspeed(props) {
    const style1={
        marginTop:'0px',
    }
    const style2={
        fontSize:'30px',
    }
    const style3={
        fontSize:'30px'
    }
  return (
    <div>
       <div>
     <div style={style1}><i class="fa-solid fa-wind" style={style2} ></i><span style={style3}>  Wind Speed</span></div><br />
     <div>{props.wind} km/h</div>
    </div>
    </div>
  )
}
