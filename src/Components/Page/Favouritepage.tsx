import { Fragment, useState } from "react";
import { Footer } from "../Template/Footer";
import { Navbar } from "../Template/Navbar";
import { Favouritebanner } from "../Template/Favouritebanner";
import { useQuery } from "react-query";
import { Favouritefoodcard } from "../Template/Favouritefoodcard";
import { Favouritelazyload } from "../Template/Favouritelazyload";
import {BsHeartbreakFill} from "react-icons/bs";
import {HiArrowCircleDown} from "react-icons/hi";
import axios from "axios";
import { PageTitle } from "../Atom/PageTitle";
import { Nodata } from "../Template/Nodata";


type deleteData = {
  title : string
  image: string
  difficulty: string
  id: string
}


export const Favouritepage = () => {
  const [likedFood, setLikedfood] = useState<any>([]);
  const [deleteicon, setDeleteicon] = useState(false);
  const [deletemodal, setdeletemodal] = useState(false);
  const [btntext, setBtntext] = useState("Delete")

  const getlikedFood = () => {
    axios
      .get("http://localhost:3000/liked_foods")
      .then((response) => {
        setLikedfood(response.data);
        if(response.data.length === 0){
          setDeleteicon(true)
        } else(
          setDeleteicon(false)
        )
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const confirmDelete =()=>{
    setdeletemodal(!deletemodal)
  }





  const { status, data } = useQuery(["liked_food"], getlikedFood);
  console.log(status);
  console.log(data);


  const handledelete =()=>{

    axios.get("http://localhost:3000/liked_foods")
    .then((res)=>{
     res.data.map((item : deleteData)=>{
       console.log(item.id)
       console.log(typeof(item.id))
           axios.delete(`http://localhost:3000/liked_foods/${item.id}`)
     })
    })

    setBtntext("deleting...")
    setInterval(()=>{
      window.location.reload()
    }, 1000)
   
     }



  return (
    <Fragment>
      <Navbar />
      <Favouritebanner />


  <div className="test">
  <PageTitle pagetitle="Your Favourite Food"/>
<button className="delete_all_btn">
{deleteicon ? <HiArrowCircleDown size={35} color="grey"/>  : <HiArrowCircleDown size={35} color="green" onClick={confirmDelete}/>}
</button>

  </div>
      <section className="">
        <div className="card_container">
          {status === "success" &&
            likedFood.map((item: any) => {
              return (
                <Favouritefoodcard
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  id={item.id}
                  difficulty={item.difficulty}
                />
              );
            })}

          {status === "loading" && <Favouritelazyload />}
        </div>

        {likedFood.length === 0 && <Nodata/>}

        {status === "error" && <div>Error</div>}
      </section>


<div className={`remove_all_container ${deletemodal ? 'active': 'inactive'}`}>
<div className="remove_all_modal">
          <div>
            <BsHeartbreakFill size={50} color="red"/>
          </div>
        <p>Are you sure you want to remove all liked items</p>
        <div>
          <button className="cancel" onClick={confirmDelete}>Cancel</button>

        <button className="confirm" onClick={handledelete}>{btntext}</button>
        </div>
      </div>
</div>
      <Footer />
    </Fragment>
  );
};
