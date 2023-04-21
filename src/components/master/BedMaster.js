import React from 'react'
import DepartmentCombo from './DepartmentCombo'
import UnitCombo from './UnitCombo'
import WardCombo from './WardCombo'

const BedMaster = (props) => {

  const {setDeptId, deptId, setUnitId, unitId, renderFlag} = props;
  return (
    <>
    <h1>Bed</h1>
    <DepartmentCombo setDeptId={setDeptId} renderFlag={renderFlag}/>
    <UnitCombo deptId={deptId} setUnitId={setUnitId} renderFlag={renderFlag}/>
    <WardCombo deptId={deptId} unitId={unitId} renderFlag={renderFlag}/>
    Bed:
    <input type="text" name='bedCount'></input>
    <button type='submit'>Add</button>
    </>
  )
}

export default BedMaster