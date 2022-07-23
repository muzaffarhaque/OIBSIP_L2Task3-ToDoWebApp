import React, {useEffect, useState} from 'react';

import './App.css';

import FormData from './Components/FormData';


const getdatafromlocsto = () => {
    const data = localStorage.getItem("tasks");
    if (data) {
        return JSON.parse(data)
    } else {
        return []
    }
}
window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
    if (window.innerWidth <= 900) {
        alert("This application is a WEB-APPLICATION ,For better exprience open it on large screen or destop etc..")
    }
});

function App() {
//      const [width, setWidth]   = useState(window.innerWidth);
//     if(width<=900){
//         alert("This application is a WEB-APPLICATION ,For better exprience open it on large screen or destop etc..")
//     }
    //main arry of object state
    const [tasks,
        setTasks] = useState(getdatafromlocsto());

    //input fild statement
    const [title,
        setTitle] = useState("");
    const [description,
        setDescription] = useState("");

 

    const save = () => {
        //creating an object
if(title!==""||description!=="" ){
        let task = {
            title,
            description
        }
        setTasks([...tasks,task]);

        setDescription("")
        setTitle("")
    }else{
        alert("Enter the input filed .")
    }

    }
    //deleating item 
    const deletiterm = (id) => {
      console.log("index no ",id)

      const filtertaskread=tasks.filter((el,index)=>{
        return index !== id
      })
      setTasks(filtertaskread);
  }


  

    //saving data to loacal storage
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks])
    return (
        <div className="main-container">
            <header className="header">
                {/* <Todo name="josous" age="34"/> */}
                <h2>TO-DO List Web App</h2>
            </header>
            <div className="container">
                <div className="colum1">
                    <div className="box1">
                        <input
                            autoFocus
                            type="text"
                            name='Title'
                            value={title}
                            onChange={(e) => {
                            setTitle(e.target.value)
                        }}
                            className='fist-input'
                            required
                            placeholder='Title'/>
                        <textarea

                            className="text-area"
                            name='Description'
                            onChange={(e) => {
                            setDescription(e.target.value)
                        }}
                            placeholder='Description'
                            value={description}></textarea>
                        <button className='submit' onClick={save}>Save</button>

                    </div>
                </div>
                <div className="colum2">

                    <div className="col-header">
                        <div className="child">{'\u00A0'}{'\u00A0'}{'\u00A0'}Title</div>
                        <div className="child">Description</div>
                        <div className="child">Delete {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}</div>
                    </div>

                    {tasks.length < 1 && <div className='enteranytask'>NO ANY TASK ENTER YET</div>}
                    {tasks.map((item, i) =>
                     <FormData key={i} id={i} tasks={tasks} item={item}
                     onslect={deletiterm}
                     
                     />
                     )
}

                </div>
            </div>

        </div>
    );
}

export default App;
