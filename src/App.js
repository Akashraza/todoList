import React,{useState,useEffect} from 'react'
import './App.css';
import TodoList from './TodoList'

function App() {

  const getLocalStorage =()=>{
    let list = localStorage.getItem('items');
    if (list) {
      return JSON.parse(localStorage.getItem('items'));
    }else{
      return [];
    }
  }
  const [state, setState] = useState();
  const [items, setItem] = useState(getLocalStorage())

  const changeValue =(e) =>{
    
   
   setState(e.target.value);
  }
const addValue = (e) =>{
  e.preventDefault();
    setItem((oldItem) =>{
     return [...oldItem,state]
    })
    setState("");
}

const removeItem = (id) =>{
  setItem((oldItem) =>{
     return oldItem.filter((erEl,index)=>{
      return index !== id;
     })
    })
}

useEffect(()=>{
    localStorage.setItem('items',JSON.stringify(items));
} ,[items])

  return (
    <div className="container">
     <div className="InputItem">
           <input type="text"  onChange={changeValue} placeholder="Enetr items" /><button onClick={addValue}>+</button>
     </div>
     <div className="list">
       <ul>
            {
              items.map((valiItem,index) =>{
                return <TodoList id={index} key={index} onSelect={removeItem} text={valiItem} />
              })
            }
       </ul>
     </div>
    </div>
  );
}

export default App;
