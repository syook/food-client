import React,{useState} from "react";
import { Form, Button } from "semantic-ui-react";

function UserForm(props){
  
  const options = [
        { text: "Half Bowl", value: 0.5 },
        { text: "Full Bowl", value: 1 },
        { text: "Double Bowl", value: 2 }
      ]
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [mobile,setMobile] = useState('')
  const [defaultChapati,setDChapati] = useState(2)
  const [ricePortion,setRPortion] = useState(0.5)

  const handleSubmit = e => {
    e.preventDefault();
    console.log(name,email,mobile,defaultChapati,ricePortion)
  };


    return (
      <div className="formSection">
        <Form>
          <Form.Field>
            <label> Name</label>
            <input
              name="name"
              placeholder="First Name"
              type="text"
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input
              name="email"
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Mobile</label>
            <input
              name="mobile"
              placeholder="Mobile"
              type="number"
              value={mobile}
              onChange={(e)=>setMobile(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Default Chapati</label>
            <input
              name="defaultChapati"
              placeholder="Chapatis"
              type="number"
              value={defaultChapati}
              onChange={(e)=>setDChapati(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Default Rice portion</label>
            <Form.Dropdown
              fluid
              name="defaultRice"
              defaultValue={0.5}
              placeholder="Rice"
              options={options}
              onChange={(e, { value }) => setRPortion(value)}
            />
          </Form.Field>
          <Button onClick={props.toggle}>Cancel</Button>
          <Button type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }


export default UserForm;
