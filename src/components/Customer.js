import React, {useState} from 'react'
import CustomerItem from './CustomerItem'
import './Customer.css'
import Modal from './Overlay/Modal'
function Customer() {
  const [modal, setmodal] = useState(false)
  return (
    <div className='customerContainer'>
      <h1>Customers</h1>
      <button className='openModalBtn' onClick={()=>{setmodal(true)}}>Transfer Money</button>
      {modal && <Modal closeModal={setmodal}/>}
     <CustomerItem/>
    </div>
  )
}

export default Customer