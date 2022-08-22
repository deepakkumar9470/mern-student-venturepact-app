import React,{useState} from 'react'

import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import './student.scss'
import { addStudent } from '../../redux/studentSlice'

const CreateStudent = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [firstName,setFirstName] = useState("")    
    const [lastName,setLastName] = useState("")   
    const [rollNo,setRollNo] = useState("")   
    const [mobile,setMobile] = useState("")     
   

    const handleAddStudent = (e) =>{
          e.preventDefault()
          if(!firstName || !lastName || !rollNo || !mobile){
            return alert('Please enter all fields')
          }

          dispatch(addStudent({
            firstName,
            lastName,
            rollNo,
            mobile
          }));
          
          navigate('/')
    }
    
  return (
    <div className="student_container">
    <form className="student_form" onSubmit={handleAddStudent}>
        <h3 className="stud_title">Add Student</h3>
        <div className="form-group">
            <label htmlFor="name">First Name</label>
            <input 
                type="text"
                value={firstName}
                onChange={(e) =>setFirstName(e.target.value)} 
                placeholder="Enter your first name" />
        </div>
        <div className="form-group">
            <label htmlFor="name">Last Name</label>
            <input 
                type="text"
                value={lastName}
                onChange={(e) =>setLastName(e.target.value)} 
                placeholder="Enter your last name" />
        </div>
        <div className="form-group">
            <label htmlFor="name">Roll No</label>
            <input 
                type="number"
                value={rollNo}
                onChange={(e) =>setRollNo(e.target.value)}
                placeholder="Enter your roll no" />
        </div>
        <div className="form-group">
            <label htmlFor="name">Mobile No</label>
            <input 
                type="number"
                value={mobile}
                onChange={(e) =>setMobile(e.target.value)}
                placeholder="Enter your mob no" />
        </div>

        <button type="submit" className="stud_button">Add</button>
        
    </form>
</div>
  )
}

export default CreateStudent