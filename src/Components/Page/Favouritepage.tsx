import {Fragment, useState} from "react";
import { Footer } from "../Template/Footer";
import { Navbar } from "../Template/Navbar";
import { Favouritebanner } from "../Template/Favouritebanner";
import { useQuery } from "react-query";
import { Favouritefoodcard } from "../Template/Favouritefoodcard";
import axios from "axios";



export const Favouritepage = () => {

  const [likedFood, setLikedfood] = useState<any>([])

const getlikedFood = () =>{
  axios.get('http://localhost:3000/liked_foods')
  .then((response)=>{
    console.log(response.data)
    setLikedfood(response.data)
  }).catch((error)=>{
 console.log(error)
  })
}


const { status, data} = useQuery(["liked_food"], getlikedFood);
console.log(status)
console.log(data)

  return (
  <Fragment>
    <Navbar/>
    <Favouritebanner/>
    <section>
      <h1 className="favourite_h1">Your Favourite Food</h1>
    </section>
    <section className="">
    <div className="card_container">
    {
        status === "success" && likedFood.map((item: any)=>{
          return(
            <Favouritefoodcard
            key={item.id}
              image={item.image}
              title={item.title}
              id={item.id}
              difficulty={item.difficulty}

            />
          )
        })
      }
    </div>

      { status === "loading" && <div>Loading...</div>}
      {status === 'error' && <div>Error</div>}
    </section>
    {/* <Favouritefoodcard/> */}
<Footer/>
  </Fragment>
  )
}
