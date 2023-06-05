import React from 'react'
import styled from 'styled-components'

const Btn = ({name}) => {
  return (
    <DIV>
      <button className='downloadresumaBTN'>{name}</button>
    </DIV>
  )
}

export default Btn

const DIV=styled.div`
      .downloadresumaBTN {
        width: 140px;  
    height: 40px;
      color: black;
      height: 40px;
      border: 1px solid black;
    background: linear-gradient(to left, #5aff7f  50%, #000000 50%) right;
    background-size: 300%;
    transition: .5s ease-out;
    font-size: 11px;

}
.downloadresumaBTN:hover {
    background-position: left;
    color: #ffffff;
    font-size: 12px;
}
`