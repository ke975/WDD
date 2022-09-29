import React from "react";
import Logo from "../assets/Logo.svg";
import {Link } from 'react-router-dom'
import '../styles/fondo.css'
export function Home() {
  return (
    <div id="Home">

    
    <div className="container">
      <div className="row align-items-center mt-5 ">
        <div className="col col-sm-12 col-md-6 mt-5 m-5 d-none d-sm-block ">
        <img src={Logo} className="img-fluid " width="500px"  alt="" />
          <h2 className="text-white ">Aprendé a crear una <span style={{color:"#81D8F7"}}>aplicación completa</span> desde cero, <span style={{color:"#81D8F7"}}>con React js</span></h2>
          <p className="text-white mt-4 text-justify">En tan solo una semana dominarás en la práctica una de las tecnologías más <br/> utilizadas y con alta demanda para acceder a las mejores oportunidades del mercado.</p>
    
        </div>

        <div
          className="col-md-4 me-2 mt-5 mb-5 rounded-start "
          style={{ backgroundColor: "#0099CC" }}
        >
          <h4 className="text-center text-white mt-3">Regístrate Gratis</h4>
          <form className="mt-5">
            <div class="mb-3 mt-4 col-md-9 mx-auto">
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Nombre Completo"
              />
            </div>
            <div class="mb-3 mt-4 col-md-9 mx-auto">
              <input
                type="Email"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Correo Electronico"
              />
            </div>
            <div className="d-grid gap-2 col-md-6 mx-auto mb-3 mt-4">

                <Link to="/event">
              <button
                type="submit"
                class="btn btn-primary mx-auto col-md-12 "
                style={{ backgroundColor: "#9933CC" }}
              >
                Asegura tu participación
              </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>


    </div>
  );
}
