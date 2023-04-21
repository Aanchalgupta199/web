/** @jsxImportSource @emotion/react */
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Button, Form, FieldDiv, TextField, RadioDiv} from "../css/CustomCss";
import { HeadDiv, Label } from "../css/CustomCss";

const UpdatePatient = () => {

  let location = useLocation();

  const update = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());
    axios.put("http://localhost:8080/updatePatient", value)
    .then((res) => {
        if(res)
            window.alert("data updated successfully");
        else
            window.alert("failed to update");
    })
  }

  return (
    <>
    <Form method={"POST"} onSubmit={update}>
      <HeadDiv>
        <h1>Patient Details</h1>
      </HeadDiv>
      <FieldDiv>
        <Label>HID</Label>
        <TextField type="text" name="hid" value={location.state.r.hid}/>
      </FieldDiv>
      <FieldDiv>
        <Label>First Name</Label>
        <TextField type="text" name="fname" defaultValue={location.state.r.fname}/>
      </FieldDiv>
      <FieldDiv>
        <Label>Middle Name</Label>
        <TextField type="text" name="mname" defaultValue={location.state.r.mname}/>
      </FieldDiv>
      <FieldDiv>
        <Label>Last Name</Label>
        <TextField type="text" name="lname" defaultValue={location.state.r.lname}/>
      </FieldDiv>
      <FieldDiv>
        <Label>DOB</Label>
        <TextField type={"date"} style={{width: 195}} name="dob" defaultValue={location.state.r.dob}/>
      </FieldDiv>
      <FieldDiv>
        <Label>Phone</Label>
        <TextField type="text" name="phone" defaultValue={location.state.r.phone}/>
      </FieldDiv>
      <FieldDiv>
        <Label>Email</Label>
        <TextField type={"email"} name="email" defaultValue={location.state.r.email}/>
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
        <TextField type="text" name="father_name" defaultValue={location.state.r.father_name}/>
      </FieldDiv>
      <FieldDiv>
        <Label>Mother's Name</Label>
        <TextField type="text" name="mother_name" defaultValue={location.state.r.mother_name}/>
      </FieldDiv>
      <FieldDiv>
        <Label>Address</Label>
        <TextField type="text" name="address" defaultValue={location.state.r.address}/>
      </FieldDiv>
      <FieldDiv>
        <Label>City</Label>
        <TextField type="text" name="city" defaultValue={location.state.r.city}/>
      </FieldDiv>
      <FieldDiv>
        <Label>Pincode</Label>
        <TextField type="text" name="pincode" defaultValue={location.state.r.pincode}/>
      </FieldDiv>
      <FieldDiv>
        <Label>State</Label>
        <TextField type="text" name="state" defaultValue={location.state.r.state}/>
      </FieldDiv>
      <FieldDiv>
        <Label>Country</Label>
        <TextField type="text" name="country" defaultValue={location.state.r.country}/>
      </FieldDiv>
      <FieldDiv>
        <Label>Caste</Label>
        <TextField type="text" name="caste" defaultValue={location.state.r.caste}/>
      </FieldDiv>
      <FieldDiv>
        <Label>Department</Label>
        <TextField type="text" name="department" defaultValue={location.state.r.department}/>
      </FieldDiv>
      <FieldDiv>
        <Label>Unit</Label>
        <TextField type="text" name="unit" defaultValue={location.state.r.unit}/>
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
      <Button type={"submit"}>Update</Button>
    </Form>
    </>
  );
};

export default UpdatePatient;

