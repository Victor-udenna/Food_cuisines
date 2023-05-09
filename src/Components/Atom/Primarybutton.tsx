import React, { Fragment, useEffect, useState, useCallback } from "react";
import { AiTwotoneHeart } from "react-icons/ai";
import axios from "axios";

export const Primarybutton = () => {
  const [likedno, setlikedNo] = useState(0);
  const [resarray, setresarray] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/liked_foods").then((response) => {
      setlikedNo(response.data.length);
      setresarray(response.data);
    });
  }, [resarray]);

  return (
    <Fragment>
      <button className="primary_btn">
        Favourite{" "}
        <span className="love_icon">
          <AiTwotoneHeart />
        </span>
      </button>
      <button className="like_count">{likedno}</button>
    </Fragment>
  );
};
