import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'

import './fees.scss'
import { addFees } from '../../redux/feeSlice'

const AddFees = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [amount,setAmount] = useState(null)    
  const [feename,setFeename] = useState("")   
  const [isPaidOn,setisPaidOn] = useState(false)   
 

  const handleCheckbox = (e) =>{
    e.preventDefault()
    setisPaidOn(!isPaidOn)
  }
  
  const handleAddFee = (e) =>{
        e.preventDefault()
        console.log(e.target.value)
        if(!amount || !feename || !isPaidOn){
          return alert('Please enter all fields')
        }

        dispatch(addFees({
          amount,
          feename,
          isPaidOn
        }));
        
        navigate('/')
  }

  return (
    <div className="fee_container">
    <form className="fee_form" onSubmit={handleAddFee}>
        <h3 className="fee_title">Add Fees</h3>
        <div className="form-group">
            <label htmlFor="amount">Amount</label>
            <input 
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)} 
                placeholder="Enter your amount" />
        </div>
        <div className="form-group">
            <label htmlFor="feename">Fee Name</label>
            <input 
                type="text"
                value={feename}
                onChange={(e) => setFeename(e.target.value)} 
                placeholder="Enter your feename" />
        </div>

      <div className="form-group">
      <label htmlFor="ispaidon">isPaid
        <input 
            type="checkbox"
            checked= {isPaidOn}
            onChange={handleCheckbox}  
            name="feespaid"/>
        </label>
        
      </div>
        <button type="submit" className="fee_button">Add</button>
       
    
    </form>
</div>
  )
}

export default AddFees
