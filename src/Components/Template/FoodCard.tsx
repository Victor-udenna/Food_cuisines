import React, { Fragment, useState} from 'react';
import { dataType } from '../../types/datatypes';
import  '../../styles/modal.scss';
import { CgLoadbar } from 'react-icons/cg';

export const FoodCard = (props: dataType) => {

const [modal, setmodal] = useState(false);

const displaymodal = () =>{
setmodal(!modal)
}

  return (
  <Fragment>  
    <div className={`card ${modal ? 'active' : 'inactive'}`} onClick={displaymodal}>
    <div><img className="recipe_img" src={props.image}/></div>
    <div className='recipe_text'>
    <h3 className='title recipe_header'>{props.title}</h3>
    <p className='difficulty'> <b className='recipe_header'>Difficulty:  </b>{props.difficulty}</p>
    <span className='card_badge'>Free</span>
    </div>



    <div className='modal_container'>
<div className='modal'>
<span className='modal_bar'><CgLoadbar size={50}/></span>
 <div><img src={props.image} className='modal_img'/></div>
 <h3 className='modal_title'>{props.title}</h3>
 <p className='modal_message'>Want to veiw recipe details ? <span className='premium_text'> get premium</span></p>
<button className='modal_btn'>Download recipe</button>
</div>
    </div>
    </div>
  </Fragment>
  )
}
