import React, { Fragment, useEffect, useState} from "react";
import { AiTwotoneHeart } from "react-icons/ai";
import axios from "axios";
import {useSelector, useDispatch} from  'react-redux';
import {incrementLike} from "../../Redux/count";




 export const Primarybutton = () => {
  const [likedno, setlikedNo] = useState<number>();
  const [resarray, setresarray] = useState([]);

  const {likecount}  = useSelector((state: any ) => state.likecount);
  const dispatch = useDispatch();

  const changeLikenumber = ()=>{
    dispatch(incrementLike(likedno))
        }

  useEffect(() => {
    axios.get("http://localhost:3000/liked_foods").then((response) => {
      setlikedNo(response.data.length);
      setresarray(response.data);
    });
changeLikenumber()
    
  }, [resarray]);



  return (
    <Fragment>
      <button className="primary_btn">
        Favourite{" "}
        <span className="love_icon">
          <AiTwotoneHeart />
        </span>
      </button>
      <button className="like_count">{likecount}</button>
    </Fragment>
  );
};


