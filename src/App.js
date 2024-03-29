import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import CakeContainer from './components/CakeContainer'
import store from './redux/store'
import HooksCakeContainer from './components/HooksCakeContainer'
import IceCremContainer from './components/IceCremContainer'
import NewCakeContainer from './components/NewCakeContainer'
import ItemConatiner from './components/ItemConatiner'
import UserContainer from './components/UserContainer'

function App() {
  return (
   <Provider store={store}>
    <div>
      <UserContainer/>
      {/* <ItemConatiner cake/>
      <ItemConatiner/>
      <HooksCakeContainer/>
      <CakeContainer/>
      <NewCakeContainer/>
      <IceCremContainer/> */}
      </div> 

   </Provider>
  )
}

export default App