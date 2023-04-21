import { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { patientData } from '../store/PatientStore';
import { useNavigate } from 'react-router-dom';


const GetPatients = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const patientselector = useSelector(state => state.patient.data)

  const getData = async () => {
    axios.get("http://localhost:8080/getAllPatient")
    .then((res) => dispatch(patientData(res.data))
    )
  }

  useEffect(() => {
    getData();
  },[])

  const columns = [
      { field: 'hid', headerName: 'HID'},
      { field: 'fname', headerName: 'First name' },
      { field: 'mname', headerName: 'Middle name' },
      { field: 'lname', headerName: 'Last name' },
      { field: 'dob',headerName: 'DOB',type: 'date'},
      { field: 'gender', headerName: 'Gender' },
      { field: 'marital_status', headerName: 'Marital Status' },
      { field: 'phone', headerName: 'Phone' },
      { field: 'email', headerName: 'Email' },
      { field: 'father_name', headerName: 'Father Name' },
      { field: 'mother_name', headerName: 'Mother Name' },
      { field: 'address', headerName: 'Address' },
      { field: 'city', headerName: 'City' },
      { field: 'pincode', headerName: 'Pincode' },
      { field: 'state', headerName: 'State' },
      { field: 'country', headerName: 'Country' },
      { field: 'caste', headerName: 'Caste' },
      { field: 'department', headerName: 'Department' },
      { field: 'unit', headerName: 'Unit' },
      { field: 'insured', headerName: 'Insured' },
      { field: 'reg_mode', headerName: 'Registration Mode' },
      { field: 'patStatus', headerName: 'Admission Status' },
      {
        field: 'action',
        headerName: 'Actions',
        sortable: false,
        renderCell: (params) => {
          const redirect = (e, r) => {
            e.stopPropagation();
            navigate('/admission',{
              state: {r}
            })
          };

          const deletePatient = (e, r) => {
            e.stopPropagation();
            axios.delete("http://localhost:8080/deletePatient", {data :r})
            .then((res) => {
                if(res){
                    window.alert("data deleted successfully");
                    getData();
                }
                else
                    window.alert("failed to delete");
            })
          };
    
          return <><IconButton aria-label="update" size="small" onClick={(event) => redirect(event,params.row)}>
                    <AddIcon fontSize="inherit"/>
                  </IconButton>
                  <IconButton aria-label="delete" size="small" onClick={(event) => deletePatient(event,params.row)}>
                    <DeleteIcon fontSize="inherit" />
                  </IconButton></>
        },
      },
    ];
      
  return (
    <div style={{height: 500, width: '63vw', marginInline: 'auto', marginTop: 100}}>
      <DataGrid 
        rows={patientselector}
        getRowId={(row) => row.hid}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  )
}

export default GetPatients