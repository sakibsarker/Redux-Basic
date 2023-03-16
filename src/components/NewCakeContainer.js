import React, { useState } from "react";
import { buyCake } from "../redux";
import { connect } from 'react-redux'
function newCakeContainer(props){
    const [number,setNumber]=useState(1)
    return(
        <div>
            <h2>New cake {props.numOfCakes} </h2>
            <input type="text" value={number} onChange={(e)=>setNumber(e.target.value)}/>
            <button onClick={()=>props.buyCake(number)}>Buy{number} Cake</button>
        </div>
    )
}


const mapStatetoProps=state=>{
    return{
        numOfCakes:state.cake.numOfCakes
    }
}

const mapdispatchToProps=dispatch=>{
    return{
        buyCake:(number)=>dispatch(buyCake(number))
    }
}

export default connect(mapStatetoProps,mapdispatchToProps) (newCakeContainer)