
import { Suspense } from 'react';
import './App.css'
import Batsman from './batsman';
import Counter from './counter';
import Users from './User';
import Friends from './Friend';


const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())


const fetchFriends = async() =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/users');

  return res.json();

}
 
function App() { 

  function handleClick(){
    alert('Im clicked')
  }

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  }

  const friendsPromise = fetchFriends();

  return (
    <>

    <h3>Vite + React</h3>

    <Counter></Counter>

    <button onClick={handleClick}>Click Me</button>

    <button onClick={ () => handleAdd5(12)}>Add5</button>

    <Batsman></Batsman>

    <Suspense fallback={<h3>Loading...</h3>}>
          <Users fetchUsers ={fetchUsers}></Users>
    </Suspense>



    <Suspense fallback={<h3>Frinds Loading</h3>}>
      <Friends friendsPromise={friendsPromise}></Friends>
    </Suspense>



    </>
  )
}

export default App
