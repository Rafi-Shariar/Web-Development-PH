
import { Suspense } from 'react'
import './App.css'
import Bottle from './components/bottle/bottle'
const bottlePromise = fetch('../public/bottles.json').then(res => res.json())

function App() {

  return (
    <>
      <h1>Wellcome To Bottle Shop</h1>
      <Suspense fallback={<h3>Bottles Are Loading...</h3>}>
         <Bottle bottlePromise={bottlePromise}></Bottle>
      </Suspense>

    </>
  )
}

export default App
