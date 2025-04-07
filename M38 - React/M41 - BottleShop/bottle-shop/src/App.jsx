
import { Suspense } from 'react'
import './App.css'
import Bottles from './Components/Bottles/Bottles'

const bottlesPromise = fetch('bottles.json').then(res => res.json());

function App() {

  return (
    <>
      <h1>Wellcome To Bottle Shop</h1>
      <Suspense>
        <Bottles bottlesPromise={bottlesPromise}>

        </Bottles>
      </Suspense>
     
    </>
  )
}

export default App
