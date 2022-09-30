import React from 'react'

import { gql, useQuery } from '@apollo/client'
import {Link} from 'react-router-dom'


const GET_lESSONS_QUERY = gql`
query {
  lessons(orderBy: availableAt_DESC, stage: PUBLISHED) {
    id
    lessonType
    availableAt
    title
    slug
  }
}
`

export  function Sidebar() {
 
  const {data} = useQuery(GET_lESSONS_QUERY)
  console.log(data)


  return (
    <div>
        <div className="accordion  " id="accordionExample">
  <div className="accordion-item bg-dark">
    <h2 className="accordion-header text-white text-center" id="headingOne">
      <button className="accordion-button bg-dark text-white  " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Clases de React Js 
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body text-white">
        {data?.lessons.map(item=>{
          return(
            <Link key={item.id} to={`/event/lesson/${item.slug}`}>{item.title}</Link>
          )
          
        })}
      </div>
    </div>
  </div>

</div>

    </div>
  )
}
