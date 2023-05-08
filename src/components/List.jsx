import React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
function List(props) {
   
  return (
    <>
    <div className='liitemsdiv' >
    
       
        <button className='delbtn' onClick={()=>{
            props.onselect(props.id);}}>
            <DeleteForeverIcon className='delbtnicon'/>
        </button>
        <button className='delbtn' onClick={()=>{
            props.onClick(props.id);}}>
          <EditIcon className='delbtnicon'/>
        </button>
        <li className='ol_li'>{props.text}</li>

    </div>
        
    
    </>
    
  )
}

export default List