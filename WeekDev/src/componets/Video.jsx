import React from 'react'
import '@vime/core/themes/default.css'
import { DefaultUi, Player, Youtube,DefaultControls } from '@vime/react'
import {gql, useQuery} from"@apollo/client"


const  GET_LESSON_BY_SLUG_QUERY = gql`
query GET_LESSON_BY_SLUG($slug:String) {
  lesson(where: {slug: $slug}) {
    title
    videoId
    description
    teacher {
      avatarURL
      bio
      name
    }
  }
}
`




export function Video(props) {
  const {data} = useQuery(GET_LESSON_BY_SLUG_QUERY,{
    variables:{
      slug:props.lessonSlug
    }
  })


  
console.log(data)



if(!data){
  return(
    <div className='flex-1'> <p>Carregando</p></div>
  )
}

  return (
    <div>
  <Player>
      <Youtube
videoId={data.lesson.videoId}    

/>
<DefaultControls hideOnMouseLeave activeDuration={2000} />
      <DefaultUi/>
    </Player>

    </div>
  )
}
