import React from 'react'
import { Header } from '../componets/header'
import { Sidebar } from '../componets/Sidebar'
import { Video } from '../componets/Video'
import Logo from'../assets/Logo.svg'

import { useParams } from 'react-router-dom'



import '../styles/event.css'
export  function Event() {



  const {slug} = useParams();
  return (
    <div id="event" >
        <header className="mx-auto">
<Header/>
        </header>
    <main >
      <div className="container-fluid mt-3">
        <div className="row">
     
          <div className="col-md-9 col-lg-8 order-md-first">
           <Video  lessonSlug={slug}/> 
          </div>
          <div className="col-md-3 col-lg-4 order-sm-first order-xs-first d-none d-sm-block">
            <Sidebar/>
          </div>
        </div>
      </div>
    </main>



<footer>
<div className="container-fluid mt-5 bg-dark">
  <img src={Logo} alt="Logo de la empresa" width="80" height="80"/>

</div>

</footer>


    </div>
  )
}
