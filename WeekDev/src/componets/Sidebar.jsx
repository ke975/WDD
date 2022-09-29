import React from 'react'

export  function Sidebar() {
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
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>

</div>

    </div>
  )
}
