import React from 'react'
import { Header } from '../componets/header'
import { Sidebar } from '../componets/Sidebar'
import { Video } from '../componets/Video'
import Logo from'../assets/Logo.svg'
import {DiscordLogo} from 'phosphor-react'
import {Lightning} from 'phosphor-react'
import { useParams } from 'react-router-dom'



import '../styles/event.css'
export  function Event() {



  const {slug} = useParams();

  return (
    <div id="event" >
        <header className="mx-auto">
<Header/>
        </header>
    <main className="container-fluid">
      <div >
        <div className="row">
          <div className="col-md-8">
           <Video  slug={slug}/> 
          </div>
          <div className="col-md-4">
            <Sidebar/>
          </div>
        </div>
      </div>
    </main>

    <section className="container-fluid mt-5">
      <div className="row">

  
      <div className="col-md-6 mb-3">
        <h1 className="text-white">Introducción a react Js</h1>
        <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nobis adipisci sed fugit facere, magnam, quis provident nesciunt perferendis tempora, odit ex minus! Vitae, facere iure eius quas obcaecati eaque.</p>
        <img src="https://avatars.githubusercontent.com/u/60978634?v=4" alt="" className="rounded-circle" width="80px" />
        <span className="text-white mx-2"> <strong>Kevin Castillo </strong>
         Co-fundador y CTO en yapichance 
        </span>
      </div>

      <div className="col-md-6 mb-3">
      <div class="d-grid gap-2 col-md-4">
       
  <button class="btn btn" style={{ backgroundColor:"#996DFF"}} type="button">

<a  target="_blank" href="https://discord.gg/p9XVanyM" style={{textDecoration:"none"}}>  <DiscordLogo size={40} 
color="white"
/> <strong className="text-white">
Discord</strong></a></button>




<button class="btn btn" style={{ backgroundColor:"#F75A68" }} type="button">
  <Lightning size={40} 
color="white"

/><a  target="_blank" href="https://classroom.google.com/c/NDkwMjg3NzEwNjY5?cjc=qjfkxjr" style={{textDecoration:"none"}}>  <strong className="text-white">
Desafió</strong></a></button>
</div>
      </div>
      </div>
    </section>

<footer>
<div className="container-fluid mt-5 bg-dark">
  <img src={Logo} alt="Logo de la empresa" width="80" height="80"/>

</div>

</footer>


    </div>
  )
}
