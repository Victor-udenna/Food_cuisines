import React, { Fragment, useEffect, useState} from 'react';
import { dataType } from '../../types/datatypes';
import  '../../styles/modal.scss';
import { CgLoadbar } from 'react-icons/cg';
import {AiOutlineHeart, AiFillHeart} from "react-icons/ai";
import {MdDownloadForOffline} from "react-icons/md";
import axios from 'axios';

export const FoodCard = (props: dataType) => {

const [modal, setmodal] = useState(false);
const [liked, setLiked] = useState<boolean>(true);

const displaymodal = () =>{
setmodal(!modal)
}


const handlelike = ()=>{
 setLiked(!liked)
console.log(liked);

if ( liked === true){
axios.post('http://localhost:3000/liked_foods', {
title: props.title,
difficulty: props.difficulty,
image: props.image
 })
}

if ( liked === false){
  axios.delete(`http://localhost:3000/liked_foods/${props.id}`)
}

}

  return (
  <Fragment>  
    <div className={`card ${modal ? 'active' : 'inactive'}`}>
    <div onClick={displaymodal}><img className="recipe_img" src={props.image}/></div>
    <div className='recipe_text'>
    <h3 className='title recipe_header' onClick={displaymodal}>{props.title}</h3>
    <p className='difficulty'> <b className='recipe_header'>Difficulty:</b>{props.difficulty}</p>
    <span className='card_badge'>Free</span>
    <span className='like_btn' onClick={handlelike}>{ liked ? <AiOutlineHeart  color='red' size={27}/> : <AiFillHeart color='red' size={27}/>}</span>
    <span className='download_icon'><MdDownloadForOffline color='green' size={27}/></span>
    </div>

    <div className='modal_container '>
<div className='modal'>
<span className='modal_bar' onClick={displaymodal}><CgLoadbar size={50}/></span>
 <div onClick={displaymodal}><img src={props.image} className='modal_img'/></div>
 <h3 className='modal_title' onClick={displaymodal}>{props.title}</h3>
 <p className='modal_message'>Want to veiw recipe details ? <span className='premium_text'> get premium</span></p>
<button className='modal_btn'>Download recipe</button>
</div>
    </div>
    </div>
  </Fragment>
  )
}
