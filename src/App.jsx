
import './App.css'
import Counter from './country';
import Friends from './friends';
import Team from './team';
import Users from './users';

function App() {
  function handleClick(){
    alert('button clicked');
  }

const handleClick2=()=>{
  alert('button 2 clicked');
}


const addToFive=(num)=>{
  alert('button 2 clicked')
}

  return (
    <>
      
      <h1>React Core Concepts 2</h1>

      <Friends></Friends>

      <Users></Users>
      <Counter></Counter>
      <Team></Team>



      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={()=>{alert('third clicked')}}>Third</button>
      <button onClick={()=>addToFive(3)}>Four</button>
     
    </>
  )
}

export default App
