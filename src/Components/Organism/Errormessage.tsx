import React, { Fragment } from 'react';
import errorimg from "../../assets/images/errorbg.avif";

export const Errormessage = () => {
  return (
<Fragment>
    <section className='error_component'>
        <div><img src={errorimg} alt='ee'/></div>
    <h1>An error occured</h1>
    </section>
</Fragment>
  )
}
