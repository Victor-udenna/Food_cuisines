import React, { Fragment, useEffect, useState } from "react";
import { dataType } from "../../types/datatypes";
import "../../styles/modal.scss";
import { CgLoadbar } from "react-icons/cg";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { MdDownloadForOffline } from "react-icons/md";
import axios from "axios";
import { Page, Document, Text, PDFDownloadLink } from "@react-pdf/renderer";
import { Link } from "react-router-dom";

export const FoodCard = (props: dataType) => {
  const [modal, setmodal] = useState(false);
  const [liked, setLiked] = useState<boolean>(true);

  const displaymodal = () => {
    setmodal(!modal);
  };

  const handlelike = () => {
    setLiked(!liked);
    console.log(liked);

    if (liked === true) {
      axios.post("http://localhost:3000/liked_foods", {
        title: props.title,
        difficulty: props.difficulty,
        image: props.image,
      });
    }

    if (liked === false) {
      axios.delete(`http://localhost:3000/liked_foods/${props.id}`);
    }
  };

  return (
    <Fragment>
      <div className={`card ${modal ? "active" : "inactive"}`}>
        <div onClick={displaymodal}>
          <img className="recipe_img pointer" src={props.image} />
        </div>
        <div className="recipe_text">
          <h3 className="title recipe_header pointer" onClick={displaymodal}>
            {props.title}
          </h3>
          <p className="difficulty">
            {" "}
            <b className="recipe_header">Difficulty:</b>
            {props.difficulty}
          </p>
          <span className="card_badge">Free</span>
          <span className="like_btn" onClick={handlelike}>
            {liked ? (
              <AiOutlineHeart color="red" size={27} />
            ) : (
              <AiFillHeart color="red" size={27} />
            )}
          </span>
          <span className="download_icon pointer" onClick={displaymodal}>
            <MdDownloadForOffline color="orange" size={27} />
          </span>
        </div>

        <div className="modal_container">
          <div className="modal">
            <span className="modal_bar pointer" onClick={displaymodal}>
              <CgLoadbar size={50} />
            </span>
            <div onClick={displaymodal}>
              <img src={props.image} className="modal_img pointer" />
            </div>
            <h3 className="modal_title pointer" onClick={displaymodal}>
              {props.title}
            </h3>
            <p className="modal_message">
              Want to view recipe details ?{" "}
              <Link to="/PremiumPage">
                <span className="premium_text"> get premium</span>
              </Link>
            </p>
            <p className="modal_message">
              Downloaded documant will only contain food name and difficulty
              level
            </p>

            <PDFDownloadLink
              fileName="Recipe Document"
              document={
                <Document>
                  <Page>
                    <Text>Food: {props.title}</Text>
                    <Text> </Text>
                    <Text>Difficulty: {props.difficulty}</Text>
                  </Page>
                </Document>
              }
            >
              <button className="modal_btn">Download recipe</button>
            </PDFDownloadLink>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
