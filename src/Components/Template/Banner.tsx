import React from 'react'

type Bannerprop = {
    styles: React.CSSProperties
    header: string
    text: string   
}

export const Banner = (props: Bannerprop) => {
  return (
    <header className='Banner' style={props.styles}>
<div>
<h1 className='banner_header'>{props.header}</h1>
        <p className='banner_text'>{props.text}</p>
</div>
    </header>
  )
}
