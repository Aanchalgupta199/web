import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import BedCombo from './master/BedCombo';
import DepartmentCombo from './master/DepartmentCombo';
import UnitCombo from './master/UnitCombo';
import WardCombo from './master/WardCombo';
import { Button } from '@mui/material';
import axios from "../utils/axiosInstance"

const Admission = () => {

  const [deptId, setDeptId] = useState(-1);
  const [deptName, setDeptName] = useState("");
  const [unitId, setUnitId] = useState(-1);
  const [wardId, setWardId] = useState(-1);
  const [bedId, setBedId] = useState(-1);

  const location = useLocation();

  const {hid, fname, lname, dob, gender, phone, email, city, patStatus} = location.state.r;

  const saveAdm = () => {
    const payload = {
      hid: hid,
      name: fname+" "+lname,
      deptId: deptId,
      unitId: unitId,
      wardId: wardId,
      bedId: bedId
    }
    axios.post("saveAdmission", payload)
    .then((res) => {
      if(res){
        window.alert("Patient Admitted successfully")
      }
      else{
        window.alert("failed to admit")
      }
    })

    axios.post("updateBed", bedId);
  }

  return (
    <div style={{marginLeft: 300}}>
        <h1>Admission</h1>
        <p>HID: {hid}</p>
        <p>Name: {fname+" "+lname}</p>
        <p>DOB: {dob}</p>
        <p>Gender: {gender}</p>
        <p>Phone: {phone}</p>
        <p>Email: {email}</p>
        <p>City: {city}</p>
        {patStatus==="OPD" && <><DepartmentCombo setDeptId={setDeptId} setDeptName={setDeptName}/>
        <UnitCombo deptId={deptId} setDeptId={setDeptId} setUnitId={setUnitId}/>
        <WardCombo deptId={deptId} setDeptId={setDeptId} unitId={unitId} setUnitId={setUnitId} setWardId={setWardId}/>
        <BedCombo deptId={deptId} unitId={unitId} wardId={wardId} setBedId={setBedId}/>
        <br/>
        <Button variant="contained" color="success" onClick={saveAdm}>
          Save
        </Button></>}
    </div>
  )
}

export default Admission