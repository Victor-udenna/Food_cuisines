import React, {Fragment, useState} from 'react';
import axios from 'axios';
import { dataType } from '../../types/datatypes';
import {AiOutlineHeart, AiFillHeart} from "react-icons/ai";
import "../../styles/Favourite_card.scss";
import {BsThreeDotsVertical} from "react-icons/bs";


export const Favouritefoodcard = (props: dataType) => {

    const [liked, setLiked] = useState<boolean>(false);
    const [popup, setPopup] = useState<boolean>(false)

    const handlelike  =()=>{
        setLiked(!liked)
        // if (liked === true){
        //     axios.delete(`http://localhost:3000/liked_foods/${props.id}`).then((response)=>{
        //         console.log(response.data)
        //     }).catch((error)=>{
        //         console.log(error)
        //     })
        //  }

         console.log(liked);    
    
    }

    const handlepopUp =()=>{
        setPopup(!popup);
        console.log(popup)
    }





  return (
<Fragment>
    <div className='favourite_card'>
        <div className='fav_img_container'><img className='favourite_img' src={props.image}/></div>
<div className='favourite_text'>
    <h5 className='favourite_title'>{props.title}</h5>
    <p className='favourite_difficulty'>{props.difficulty}</p>
    <span className='favourite_like' onClick={handlelike}>{liked ? <AiOutlineHeart color='red' size={27}/>  : <AiFillHeart color='red' size={27}/> }</span>
</div>
<div onClick={handlepopUp}><BsThreeDotsVertical size={20}/></div>

<div className={`popup_container ${popup ? 'active': 'inactive'}`}>
<button className='popup_btn dowload_option'>Download</button>
<button className='popup_btn remove_option'>Remove</button>
</div>
</div>



<div className={`remove_modal_container ${liked ? 'active' : 'inactive'}`}>

<div className='remove_modal'>
<div><img src={props.image}/></div>
<h4>{props.title}</h4>
<p>Are you sure you want to revome this recipe ?</p>
<button className='confirm_btn' onClick={handlelike}>Remove Recipe</button>
<div></div>
</div>


</div>

</Fragment>
  )
}
