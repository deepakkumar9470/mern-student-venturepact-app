import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'

import { addTransaction } from '../../redux/transactionSlice'
import './transaction.scss'


const AddTransaction = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [amount,setAmount] = useState("")    
  const [paymentmode,setPaymentmode] = useState("")   
  const [isPaidOn,setisPaidOn] = useState(false)   
 

  const handleCheckbox = (e) =>{
    e.preventDefault()
    setisPaidOn(!isPaidOn)
  }

  const handleAddTransaction = (e) =>{
        e.preventDefault()
        if(!amount || !paymentmode || !isPaidOn){
          return alert('Please enter all fields')
        }

        dispatch(addTransaction({
          amount,
          paymentmode,
          isPaidOn
        }));
        
        navigate('/')
  }

  return (
    <div className="trans_container">
    <form className="trans_form" onSubmit={handleAddTransaction}>
        <h3 className="trans_title">Add Transaction</h3>
        <div className="form-group">
            <label htmlFor="amount">Amount</label>
            <input 
              type="number"
              value={amount}
              onChange={(e)=>setAmount(e.target.value)} 
              placeholder="Enter your amount" />
        </div>
        <div className="form-group">
            <label htmlFor="paymentmode">Paymentmode</label>
            <input 
              type="text"
              value={paymentmode}
              onChange={(e)=>setPaymentmode(e.target.value)} 
              placeholder="Enter your paymentmode" />
        </div>

        <div className="form-group">
          <input 
            type="checkbox"
            checked= {isPaidOn}
            onChange={handleCheckbox}
            />
          <label htmlFor="isapidon">isPaid</label>
        </div>
        <button type="submit" className="trans_btn">Add</button>
       
    
    </form>
</div>
  )
}

export default AddTransaction