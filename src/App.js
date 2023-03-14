import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import CakeContainer from './components/CakeContainer'
import store from './redux/store'

function App() {
  return (
   <Provider store={store}>
    <div>
      <CakeContainer/>
      </div> 

   </Provider>
  )
}

export default App