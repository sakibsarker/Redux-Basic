import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import CakeContainer from './components/CakeContainer'
import store from './redux/store'
import HooksCakeContainer from './components/HooksCakeContainer'
import IceCremContainer from './components/IceCremContainer'

function App() {
  return (
   <Provider store={store}>
    <div>
      <HooksCakeContainer/>
      <CakeContainer/>
      <IceCremContainer/>
      </div> 

   </Provider>
  )
}

export default App