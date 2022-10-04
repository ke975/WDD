import {Link, useParams} from 'react-router-dom'
import { CheckCircle,Lock} from 'phosphor-react'


export  function Lessons(props) {

const {slug} = useParams();



  return (
    <div>
    <div className=" mt-3 pt-5  text-center ">
        <div className="row">
            <div className="col-md-8  ">
            <Link style={{textDecoration:"none" , color:"white", }} to={`/event/lesson/${props.slug}`} className="mx-auto btn btn-outline-primary"> <h5>{props.title} </h5></Link>
            {props.description}
            </div>
        <div className="col-md-3">
        <CheckCircle size={32}/>
        </div>
    </div>
    </div>
        


    </div>
  )
}
