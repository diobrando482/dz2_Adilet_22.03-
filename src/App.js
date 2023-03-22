import { useState } from 'react';
import './App.css';
import Modal from './components/Modal/Modal';
import Button from './components/Button/Button';
import Input from "./components/Input/Input";
function App() {
    const tasks = [
        {
            id:1 ,
            task: 'coding'
        },
        {
            id:2,
            task: 'eat'
        },
        {
            id:3,
            task: 'sleep'
        }
    ]
  const [ show, setShow ] = useState(false)
  const handleShow  = () => setShow(!show)
  return (
    <div className="App">
      {show && <Modal 
      handleShow={handleShow}  />}
      <Button handleClick={handleShow}>
        Открыть модалку
      </Button>
        <ul>
            {tasks.map((task, key) => <li key={key}>{task.task}</li>)}
        </ul>
        <Input name={'hello'} placeholder={'noname'} />
    </div>
  );
}

export default App;
