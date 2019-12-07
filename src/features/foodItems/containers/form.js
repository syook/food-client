import React from 'react'
import { Form ,Button} from 'semantic-ui-react'


class FoodItemsForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            options:[{text:'Breakfast',value:'breakfast'},{text:'Lunch',value:'lunch'}],
            selectedType:''
    }
}

    handleChange=(e)=>{
        if(e.target) this.setState({[e.target.name]:e.target.value})
        
        else this.setState({selectedType:e})

    }
    handleSubmit=(e)=>{
        e.preventDefault()
        console.log(this.state)

    }


render(){
    return(
            <div>
            <Form>
                <Form.Field>
                <label> Name</label>
                <input name= 'name' placeholder='First Name' type='text' value={this.state.name} onChange={this.handleChange} />
                </Form.Field>
                <Form.Field>
                <Form.Select
                    fluid
                    label='Type'
                    name='selectedType'
                    options={this.state.options}
                    placeholder='Type'
                    onChange={(e,{value})=>this.handleChange(value)}
                />
                </Form.Field>
                <Button onClick={this.props.toggle}>Cancel</Button>
                <Button type='submit' onClick={this.handleSubmit}>Submit</Button>

            </Form>
            </div>
        )
    }
}

export default FoodItemsForm
