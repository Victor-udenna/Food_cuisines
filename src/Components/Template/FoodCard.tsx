import React, { Fragment} from 'react';

type foodProp = {
  image: string
  title: string
  id: string
  difficulty: string
}

export const FoodCard = (props: foodProp) => {
  return (
  <Fragment>
        
    <div className="card">
    <div><img className="recipe_img" src={props.image}/></div>
    
    <div className='recipe_text'>
    <h3 className='title recipe_header'>{props.title}</h3>
    <p className='difficulty'> <b className='recipe_header'>Difficulty:  </b>{props.difficulty}</p>
    <p className='food_id'><span className='recipe_header'>ID:</span> {props.id}</p>

    </div>
    </div>
  </Fragment>
  )
}