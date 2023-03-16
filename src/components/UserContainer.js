import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import { FetchtheUser } from '../redux'
function UserContainer({userData,FetchtheUser}) {
  useEffect(()=>{
    FetchtheUser()
  },[])


  return userData.loading?(
    <h2>Loading</h2>
  ):userData.error?(
    <h2>{userData.error}</h2>
  ):(
    <div>
      <h2>User List</h2>
      <div>
        {
          userData && userData.users && userData.users.map(user=>
          <p key={user.id}>
            {user.name}
          </p>)
        }
      </div>
    </div>
  )
}

const mapStatetoProps=state=>{
  return{
    userData:state.users
  }
}

const DispathtoProps=dispatch=>{
  return{
    FetchtheUser:()=>dispatch(FetchtheUser())
  }
}

export default connect(mapStatetoProps,DispathtoProps)(UserContainer)