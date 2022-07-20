import React from 'react'
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faEdit, faTrash} from '@fortawesome/free-solid-svg-icons'

export default function FormData(props) {
   
  return (
    <div className="list-container">
               
                
    <div className="a">{props.id+1}){" "}{props.item.title}</div>
    <div className="b">{props.item.description}</div>
    <div className="c">
    {/* <FontAwesomeIcon  icon={faEdit}  className="editicon" onClick={()=>{props.onEdit(props.id)}} />  */}
    {/* <FontAwesomeIcon  icon={faTrash}  className="coffiicon" onClick={()=>{props.onslect(props.id)}} />  */}
    <i class="fa-solid fa-trash" onClick={()=>{props.onslect(props.id)}}></i>
    {/* <i class="fa-solid fa-copy"></i> */}
    </div>
   </div>
  )
}
