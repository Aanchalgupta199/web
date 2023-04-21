/** @jsxImportSource @emotion/react */
import { Button, Form, FieldDiv, TextField, RadioDiv} from "../css/CustomCss";
import { HeadDiv, Label } from "../css/CustomCss";

const Registration = () => {

  const register = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());
    console.log(value.dob);
    console.log((new Date()-new Date(value.dob))/(365*24*60*60*1000))
    fetch("http://localhost:8080/savePatient", {method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(value)})
    .then((res) => res.json())
    .then((res) => {
      if(res)
        window.alert("Successfully registered")
      else
        window.alert("falied to register") 
    })
  }

  return (
    <>
    <Form method={"POST"} onSubmit={register}>
      <HeadDiv>
        <h1>Registration</h1>
      </HeadDiv>
      <FieldDiv>
        <Label>First Name</Label>
        <TextField type="text" name="fname"/>
      </FieldDiv>
      <FieldDiv>
        <Label>Middle Name</Label>
        <TextField type="text" name="mname"/>
      </FieldDiv>
      <FieldDiv>
        <Label>Last Name</Label>
        <TextField type="text" name="lname"/>
      </FieldDiv>
      <FieldDiv>
        <Label>DOB</Label>
        <TextField type={"date"} style={{width: 195}} name="dob"/>
      </FieldDiv>
      <FieldDiv>
        <Label>Phone</Label>
        <TextField type="text" name="phone"/>
      </FieldDiv>
      <FieldDiv>
        <Label>Email</Label>
        <TextField type={"email"} name="email"/>
      </FieldDiv>
      <RadioDiv>
        <Label>Gender</Label>
        <div><input type="radio" value="male" name="gender"/>
        <Label>Male</Label></div>
        <div><input type="radio" value="female" name="gender"/>
        <Label>Female</Label></div>
        <div><input type="radio" value="trans" name="gender"/>
        <Label>Trans</Label></div>
      </RadioDiv>
      <RadioDiv>
        <Label>Marital Status</Label>
        <div style={{marginLeft: -46}}><input type="radio" value="married" name="marital_status"/>
        <Label>Married</Label></div>
        <div style={{marginLeft: -22}}><input type="radio" value="unmarried" name="marital_status"/>
        <Label>Unmarried</Label></div>
        <div style={{marginLeft: -28}}><input type="radio" value="divorced" name="marital_status"/>
        <Label>Divorced</Label></div>
      </RadioDiv>
      <FieldDiv>
        <Label>Father's Name</Label>
        <TextField type="text" name="father_name"/>
      </FieldDiv>
      <FieldDiv>
        <Label>Mother's Name</Label>
        <TextField type="text" name="mother_name"/>
      </FieldDiv>
      <FieldDiv>
        <Label>Address</Label>
        <TextField type="text" name="address"/>
      </FieldDiv>
      <FieldDiv>
        <Label>City</Label>
        <TextField type="text" name="city"/>
      </FieldDiv>
      <FieldDiv>
        <Label>Pincode</Label>
        <TextField type="text" name="pincode"/>
      </FieldDiv>
      <FieldDiv>
        <Label>State</Label>
        <TextField type="text" name="state"/>
      </FieldDiv>
      <FieldDiv>
        <Label>Country</Label>
        <TextField type="text" name="country"/>
      </FieldDiv>
      <FieldDiv>
        <Label>Caste</Label>
        <TextField type="text" name="caste"/>
      </FieldDiv>
      <FieldDiv>
        <Label>Department</Label>
        <TextField type="text" name="department"/>
      </FieldDiv>
      <FieldDiv>
        <Label>Unit</Label>
        <TextField type="text" name="unit"/>
      </FieldDiv>
      <FieldDiv>
        <Label>Insurance</Label>
        <div style={{marginLeft: -46}}><input type="radio" value="yes" name="insured"/>
        <Label>Insured</Label></div>
        <div style={{marginLeft: -46}}><input type="radio" value="no" name="insured"/>
        <Label>Not Insured</Label></div>
      </FieldDiv>
      <FieldDiv>
        <Label>Registration Mode</Label>
        <div><input type="radio" value="online" name="reg_mode"/>
        <Label>Online</Label></div>
        <div><input type="radio" value="offline" name="reg_mode"/>
        <Label>Offline</Label></div>
      </FieldDiv>
      <Button type={"submit"}>Register</Button>
    </Form>
    </>
  );
};

export default Registration;

