import React, {useState} from 'react';
import TodoMain from './TodoMain';

function App() {
  let time = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(time);
  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setCurrentTime(time); // currentTime = time
  }
  setInterval(updateTime, 1000);
  return (
    <div className="App">
      Hello Todo List
      <h1 className="clock">{currentTime}</h1>
      <TodoMain />
    </div>
  );
}

export default App;
