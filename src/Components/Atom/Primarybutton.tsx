import React from 'react'
type Buttontext= {
    text: string
}

export const Primarybutton = (props: Buttontext) => {
  return (
    <button className='primary_btn'>{props.text}</button>
  )
}
