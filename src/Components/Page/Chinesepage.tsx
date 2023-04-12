import React, { Fragment, useState } from 'react'
import axios from 'axios';
import { Navbar } from '../Template/Navbar'
import { Banner } from '../Template/Banner'
import { Footer } from '../Template/Footer'
import { Topchinese } from '../Template/Topchinese'
// import fooddata from '../../data/Topfood.json';
import { FoodCard } from '../Template/FoodCard';
import { DownloadInput } from '../Organism/DownloadInput';
// import { dataType } from '../../types/datatypes';
import { useQuery } from 'react-query';



export const Chinesepage = () => {
   
const [foodData, setfoodData] = useState<any>([])
    const options = {
    method: 'GET',
    url: 'https://chinese-food-db.p.rapidapi.com/',
    headers: {
      'X-RapidAPI-Key': '2eb9578c9emsh80336b04e9b9b41p1b565ajsnec3d31f4b6b2',
      'X-RapidAPI-Host': 'chinese-food-db.p.rapidapi.com'
      // X-RapidAPI-Key': '5312ed048amsh03ba71e9c5ebb31p10336djsnc538ae0495e9
      // X-RapidAPI-Key': '5312ed048amsh03ba71e9c5ebb31p10336djsnc538ae0495e9
      // 'X-RapidAPI-Key': '2eb9578c9emsh80336b04e9b9b41p1b565ajsnec3d31f4b6b2',
    }
  };

const getchinese =()=>{
  axios.request(options).then(function (response) {
    console.log(response.data);
    setfoodData(response.data)
  }).catch(function (error) {
    console.error(error);
  });
}
  const {data, status} = useQuery(["food"], getchinese, {
    staleTime: 20 * (60 * 1000),      // staletime
  });
  console.log(status)
  console.log(data)
  return (
    <Fragment>
        <Navbar/>
        <Banner
        header='Chinese food'
        text='Nǐ xǐhuān chī shénme? 你喜欢吃什么？'
        styles={{backgroundImage: `url(https://images.unsplash.com/photo-1525755662778-989d0524087e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2hpbmVzZSUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60)`}}/>
        <Topchinese/>
        <section className=''>
          <h2 className='food_header'>Our chinese Recipes</h2>
        <div className="card_container">
          {  status === 'success' && foodData?.map((item: any, i:number)=>{
if ( i <= 30){
  return(
    <FoodCard
    key={item.id}
    title={item.title}
    difficulty={item.difficulty}
    image={item.image}
    id={item.id}
    />
      )
}
          })}
          { status === "loading" && <div>loading....</div>}
          { status === "error" && <div>An error occured</div>}
          <DownloadInput/>
        </div>
        </section>
        <Footer/>
    </Fragment>
  )
}
