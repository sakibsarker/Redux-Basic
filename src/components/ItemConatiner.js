import React from 'react'
import {connect} from 'react-redux'
import { buyCake,buyIceCream } from '../redux'
function ItemConatiner(props) {
  return (
    <div style={{textAlign:"center"}}>
        <h2>Item- {props.item}</h2>
        <button onClick={props.buyItem}>Buy Item</button>
    </div>
  )
}

const mapStateToProps=(state,ownProps)=>{
    const itemState
    =ownProps.cake?state.cake.numOfCakes:state.iceCream.numOfIceCream
    return{
        item:itemState
    }
}

const mapDispatchToProps=(dispatch,ownProps)=>{
    const dispathcFunction=ownProps.cake
    ?()=>dispatch(buyCake())
    :()=>dispatch(buyIceCream())
    return{
        buyItem:dispathcFunction
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (ItemConatiner)