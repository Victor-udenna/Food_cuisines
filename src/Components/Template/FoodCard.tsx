import React, { Fragment, useState} from 'react';
import { dataType } from '../../types/datatypes';
import  '../../styles/modal.scss';
import { CgLoadbar } from 'react-icons/cg';
import { Primarybutton } from '../Atom/Primarybutton';

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
<span className='modal_bar'><CgLoadbar size={40}/></span>
 <div><img src={props.image} className='modal_img'/></div>
 <h3 className='modal_title'>{props.title}</h3>
 <p>Want to veiw recipe detail ? <span className='premium_text'> get premium</span></p>
<Primarybutton text='Download recipe'/>
</div>
    </div>
    </div>
  </Fragment>
  )
}
