import React, { Fragment, useState} from 'react';

import { dataType } from '../../types/datatypes';
import  '../../styles/modal.scss';

export const FoodCard = (props: dataType) => {

const [modal, setmodal] = useState(false);

const displaymodal = () =>{
setmodal(!modal)
console.log(modal)
}

  return (
  <Fragment>  
    <div className={`card ${modal ? 'active' : 'inactive'}`} onClick={displaymodal}>
    <div><img className="recipe_img" src={props.image}/></div>
    <div className='recipe_text'>
    <h3 className='title recipe_header'>{props.title}</h3>
    <p className='difficulty'> <b className='recipe_header'>Difficulty:  </b>{props.difficulty}</p>
    <p className='food_id'><span className='recipe_header'>ID:</span> {props.id}</p>
    </div>


    <div className='modal_container'>
<div className='modal'>
  my name
</div>
    </div>
    </div>
  </Fragment>
  )
}
