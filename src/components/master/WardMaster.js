import React from 'react'
import DepartmentCombo from './DepartmentCombo'
import UnitCombo from './UnitCombo'

const WardMaster = (props) => {

  const {deptId,setUnitId,setDeptId,renderFlag}=props;
  return (
    <>
    <h1>Ward</h1>
    <DepartmentCombo setDeptId={setDeptId} renderFlag={renderFlag}/>
    <UnitCombo deptId={deptId} setUnitId={setUnitId} renderFlag={renderFlag}/>
    Ward:
    <input type="text" name='wardName'></input>
    <button type='submit'>Add</button>
    </>
  )
}

export default WardMaster