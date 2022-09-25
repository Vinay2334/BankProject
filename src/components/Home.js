import React,{useContext, useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import tranContext from '../context/transactions/tranContext'
import './Home.css'
import TranItem from './TranItem'
import Modaldeposit from './Overlay/Modaldeposit'

function Home() {
  const context = useContext(tranContext)
  const {users,getuser}= context
  const [modal, setmodal] = useState(false)
  const navigate= useNavigate()
  useEffect(() => {
    if(localStorage.getItem('token')){
    getuser()
  }
    else{
      navigate('/login')
    }
    // eslint-disable-next-line
  }, [])
  
  return (
    <div className='home'>
        <h1>Your Profile</h1>
        <div className="home_table">
        <table className='home_tableuser'>
          <thead className='home_head'>
            <tr className='home_row'>
              <th className='home_headcol'>Name</th>
              <th className='home_headcol'>Account Number</th>
              <th className='home_headcol'>Balance</th>
              <th className='home_headcol'>Date of Creation</th>
            </tr>
          </thead>
          <tbody className='home_body'>
            <tr className='home_row'>
              <td className='home_bodycol'>{users.name}</td>
              <td className='home_bodycol'>{users.accountNo}</td>
              <td className='home_bodycol'>{users.balance}</td>
              <td className='home_bodycol'>{users.date}</td>
            </tr>
          </tbody>
        </table>
        </div>
        <button className='openModalDeposit' onClick={()=>{setmodal(true)}}>Deposit Money</button>
        {modal && <Modaldeposit closeModal={setmodal}/>}
        <div className="transactions">
          <h1>Transactions</h1>
          <div>
            <TranItem/>
            </div>
        </div>
    </div>
  )
}

export default Home