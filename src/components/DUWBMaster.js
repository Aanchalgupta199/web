import axios from "../utils/axiosInstance"
import React, { useEffect, useState } from 'react'
import DeptMaster from "./master/DeptMaster"
import UnitMaster from "./master/UnitMaster"
import WardMaster from "./master/WardMaster"
import BedMaster from "./master/BedMaster"

const Department = () => {

  const [renderFlag, setRenderFlag] = useState(false);
  const [deptId, setDeptId] = useState(-1);
  const [unitId, setUnitId] = useState(-1);

  const addDept = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());
    console.log(value);
    axios.post("saveDepartment", value)
    .then((res) => {
        if(res){
        setRenderFlag(!renderFlag);
        window.alert("Department added successfully")
        }
        else
        window.alert("falied to add") 
    })
  }

  const addUnit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());
    console.log(value);
    axios.post("saveUnit", value)
    .then((res) => {
      if(res){
        setRenderFlag(!renderFlag);
        window.alert("Unit added successfully")
      }
      else
        window.alert("falied to add") 
    })
  }

  const addWard = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());
    console.log(value);
    axios.post("saveWard", value)
    .then((res) => {
      if(res){
        window.alert("Ward added successfully")
        setRenderFlag(!renderFlag);
      }
      else
        window.alert("falied to add") 
    })
  }

  const addBed = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());
    console.log(value);
    axios.post("saveBed", value)
    .then((res) => {
      if(res){
        setRenderFlag(!renderFlag);
        window.alert("Bed added successfully")
      }
      else
        window.alert("falied to add") 
    })
  }

  return (
    <>
      <form method={"POST"} onSubmit={addDept}>
        <DeptMaster/>
      </form>

      <form method={"POST"} onSubmit={addUnit}>
        <UnitMaster deptId={deptId} setDeptId={setDeptId} renderFlag={renderFlag}/>
      </form>

      <form method={"POST"} onSubmit={addWard}>
        <WardMaster deptId={deptId} setDeptId={setDeptId} unitId={unitId} setUnitId={setUnitId} renderFlag={renderFlag}/>
      </form>

      <form method={"POST"} onSubmit={addBed}>
        <BedMaster deptId={deptId} setDeptId={setDeptId} unitId={unitId} setUnitId={setUnitId} renderFlag={renderFlag}/>
      </form>
    </>
  )
}

export default Department