
import React from 'react'
import FoodItemsForm from './form'

export default class FoodItems  extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }

    render(){
        return(
            <div style={{marginTop:"80px"}}>
                <FoodItemsForm/>
            </div>
        )
    }
}