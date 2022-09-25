import React, {useContext,useState}  from 'react'
import TranContext from '../../context/transactions/tranContext'
import './Modal.css'
import 'react-toastify/dist/ReactToastify.css';

function Modal({closeModal}) {
    const context = useContext(TranContext)
    const {depositMoney}= context
    const [Trans, setTrans] = useState("")

    const onChange=(e)=>{
      setTrans(e.target.value)
    }
    const handleClick=(e)=>{
      e.preventDefault()
      depositMoney(Trans)
      closeModal(false)
        window.location.reload()
      }

  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
        <div className="titleCloseBtn">
        <button onClick={()=> closeModal(false)}>X</button>
        </div>
        <div className="modal_title"><h1>Deposit Money</h1></div>
        <div className="modal_body">
            <form className='modal_form'>
                <div className="modal_cred">
                <label htmlFor="credits">Amount : </label>
                <input type="number" id='credit' name='addMoney' onChange={onChange} required />
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
