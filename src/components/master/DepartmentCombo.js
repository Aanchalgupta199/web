import React, { useEffect, useState } from 'react'
import axios from "../../utils/axiosInstance"

const DepartmentCombo = (props) => {

    const [dept, setDept] = useState();

    const getDepartments = () => {
      axios.get("getDepartments")
      .then((res) => setDept(res.data))
    }

    useEffect(() => {
      getDepartments();
    },[props.renderFlag])


    const deptHandler = (event) => {
        props.setDeptId(event.target.value);
        // props.setDeptName(event.target.name);
    }

  return (
    <>
    Department: 
    <select name="deptId" onChange={deptHandler}>
      <option value="-1">Select Value</option>
      {
      dept && dept.map((dep) => <option key={dep.deptId} value={dep.deptId}>{dep.deptName}</option>)
      }
    </select>
    </>
  )
}

export default DepartmentCombo