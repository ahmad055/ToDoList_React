import React, { useState } from 'react';
import List from '../List';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';

const ToDoList = () => {
    const [items, setItems] = useState();
    const [showItem,setShowItem] = useState([]);
    const [toggleSubmit,setToggleSubmit] = useState('true');
    const [isEditItem,setIsEditItem] = useState(null)

    const inputItems = (event) =>{

        setItems(event.target.value);

    }
    const addItems = ()=>{
        if(!items){
            alert("add some data")

        }
        else if (items && !toggleSubmit){
            setShowItem(
                showItem.map((elem)=>{
                    if(elem.id === isEditItem){
                        return {...elem,name:items}
                    }
                    return elem;
                    
                })
            )
            setToggleSubmit('true');

        
            setItems('');
            setIsEditItem('null');
        }
        else{
            const allInputData = { id: new Date().getTime().toString(), name:items}
        setShowItem((oldItem)=>{
            return([...oldItem ,allInputData]
                ) 

        });
        setItems('');

            
        }
        
     

    }
    const deleteItems= (index) => {
    
        return (
            setShowItem((currentElem)=>{
                return (
                    currentElem.filter((elem)=>{
                        return index !== elem.id;
                    })
                )
            })
        )
    }
    const editItems =(id)=>{
        let newEditItem = showItem.find((elem)=>{
            return elem.id === id
    
        });
        setToggleSubmit('');

        
        setItems(newEditItem.name);
        setIsEditItem(id);
        
        
    
        
    
    }
  return (
    <div className='main_div'>
        <div className='center_div'>
            <h1>TODOLIST</h1>
            <div>
            <input type='text' placeholder='ADD ITEM' className="input_field" onChange={inputItems} value={items} />
            
            
            {
                toggleSubmit ? <button className='add_button' onClick={addItems} ><AddIcon/> </button> :
                <button className='add_button' onClick={addItems} ><EditIcon/> </button> 
            }

            </div>
            
                
            
                <ol className='olitems'>
                {
                    showItem.map((itemVal,ind)=>{
                        return <List 
                        text={itemVal.name}
                        key={itemVal.id}
                        
                        id={itemVal.id}
                    
                        
                        onselect ={deleteItems}
                        onClick={editItems}
                        />

                    })
                }
                </ol>
               
                
            
        </div>
    </div>
  )
}

export default ToDoList