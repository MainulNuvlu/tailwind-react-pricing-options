
import { Suspense } from 'react'
import DaisyNav from '../Components/DaisyNav/DaisyNav'
import NavBar from '../Components/NavBar/NavBar'
import './App.css'
import PricingOptions from '../Components/PricingOptions/PricingOptions'


const pricingPromise = fetch('PricingData.json').then(res => res.json());



function App() {


  return (
    <>

      <header>
        <NavBar></NavBar>
        {/* <DaisyNav></DaisyNav> */}
      </header>

      <main>
        <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>
        }>
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>
      </main>


    </>
  )
}

export default App
