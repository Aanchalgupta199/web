import React from 'react'
import axios from "../../utils/axiosInstance"
import DepartmentCombo from './DepartmentCombo'

const UnitMaster = (props) => {

  return (
    <div>
        <h1>Unit</h1>
        <DepartmentCombo setDeptId={props.setDeptId} renderFlag={props.renderFlag}/>
        Unit:
        <input type="text" name='unitName'></input>
        <button type='submit'>Add</button>
    </div>
  )
}

export default UnitMaster