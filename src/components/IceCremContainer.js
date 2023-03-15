import React from 'react'
import { buyIceCream } from "../redux";
import { connect } from 'react-redux';

function IceCreamContainer(props){
    return(
        <div style={{textAlign:'center'}}>
            <h2>Number of IceCream {props.numOfIceCream}</h2>
            <button onClick={props.buyIceCream}>Buy Icecream</button>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        numOfIceCream:state.iceCream.numOfIceCream
    }
}
const dispathToProps=(dispatch)=>{
   return{
    buyIceCream:()=>dispatch(buyIceCream())
   }

}

export default connect(mapStateToProps,dispathToProps)(IceCreamContainer)