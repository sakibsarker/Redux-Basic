import React from 'react'
import { buyCake } from '../redux'
import { connect } from 'react-redux'

function CakeContainer(props) {
  return (
    <div style={{textAlign:'center'}}>
        <h2>Cake Container {props.numOfCakes}</h2>
    <button onClick={props.buyCake}>Buy cake</button></div>
  )
}

const mapStatetoProps=state=>{
    return{
        numOfCakes:state.cake.numOfCakes
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        buyCake:()=>dispatch(buyCake())
    }
}

export default connect(
    mapStatetoProps,mapDispatchToProps)
    (CakeContainer)