import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import CakeContainer from './components/CakeContainer'
import store from './redux/store'
import HooksCakeContainer from './components/HooksCakeContainer'

function App() {
  return (
   <Provider store={store}>
    <div>
      <HooksCakeContainer/>
      <CakeContainer/>
      </div> 

   </Provider>
  )
}

export default App