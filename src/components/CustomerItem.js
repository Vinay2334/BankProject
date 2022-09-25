import React,{useContext,useEffect} from 'react'
import tranContext from '../context/transactions/tranContext'
import './CustomerItem.css'
function CustomerItem() {
    const context  = useContext(tranContext)
  const {alluser,getuserall} = context
  useEffect(() => {
        getuserall()
  }, [])
  
  return (
    <div className='items'>
        {alluser.map((user)=>(
    <div className="Item_container">
            <div className="details">
                <p className='item_detail'>Name&nbsp;&nbsp;&nbsp;:</p>
                <p className='item_detail'>Account Number&nbsp;&nbsp;: </p>
                <p className='item_detail'>Available Balance&nbsp;&nbsp;: </p>
            </div>
            <div className="acc_details">
                <p className='acc_detail'>{user.name}</p>
                <p className='acc_detail'>{user.accountNo}</p>
                <p className='acc_detail'>{user.balance}</p>
            </div>
            </div>
      ))}
      </div>
  )
}

export default CustomerItem
