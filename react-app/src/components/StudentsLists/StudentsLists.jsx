import React,{useEffect} from 'react'

import { useSelector,useDispatch } from 'react-redux'
import { DataGrid} from '@mui/x-data-grid';
import { fetchStudents } from '../../redux/studentSlice';

const StudentsLists = () => {

  const {lists} = useSelector((state) => state.students) 
  const dispatch = useDispatch()
  

  useEffect(() => {
    dispatch(fetchStudents())
  }, [dispatch])
  
 
  const rows =lists?.map((user) => {
    return {
      id:  user._id,
      pFirstName:  user.firstName,
      pLastName:  user.lastName,
      uRoll:  user.rollno,
      uMobile:  user.mobile,
     
    }
  });

  const columns = [
    { field: 'id', headerName: 'ID', width: 220 },
    { field: 'pFirstName', headerName: 'First Name', width: 200 },
    { field: 'pLastName', headerName: 'Last Name', width: 200 },
    { field: 'uRoll', headerName: 'Roll No', width: 100},
    { field: 'uMobile', headerName: 'Mobile', width: 200},
   
  ];

  return (
        <div style={{ height: 400, width: '100%', marginTop: '50px' }}>
          <h2>Students Lists</h2>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
          />
        </div>
  )
}

export default StudentsLists