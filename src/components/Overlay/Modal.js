import React, {useContext,useState}  from 'react'
import TranContext from '../../context/transactions/tranContext'
import './Modal.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Modal({closeModal}) {
    const context = useContext(TranContext)
    const {alluser,transaction}= context
    const [Trans, setTrans] = useState({credit: "", accountNo: ""})

    const onChange=(e)=>{
      setTrans({...Trans,[e.target.name]: e.target.value})
    }

    function checkAccNo(user){
      // eslint-disable-next-line
      if(alluser[user].accountNo==Trans.accountNo && alluser[user].balance > Trans.credit &&Trans.credit!=0){
        return true
      }
      else{
        if(user<(alluser.length-1)){
        return checkAccNo(user+1)}
      }
    }

    const handleClick=(e)=>{
      e.preventDefault()
      if(checkAccNo(0)){
          transaction(Trans.credit,Trans.accountNo)
        closeModal(false)
        toast.success("Amount Transferred Successfully!", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      }
      else{
        toast.error("Please enter correct Account Number and Valid Amount", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
      }
    }

  return (
    <div className='modalBackground'>
      <ToastContainer/>
      <div className='modalContainer'>
        <div className="titleCloseBtn">
        <button onClick={()=> closeModal(false)}>X</button>
        </div>
        <div className="modal_title"><h1>Transfer Money</h1></div>
        <div className="modal_body">
            <form className='modal_form'>
                <div className="modal_acc">
                <label htmlFor="accountNo">Account Number : </label>
                <input type="number" id='accountNo' name='accountNo' onChange={onChange} required />
                </div>
                <div className="modal_cred">
                <label htmlFor="credits">Amount : </label>
                <input type="number" id='credit' name='credit' onChange={onChange} required />
                </div>
            </form>
        </div>
        <div className="modal_footer">
            <button id='transferBtn' onClick={handleClick} >Transfer</button>
        </div>
      </div>
    </div>
  )
}

export default Modal
