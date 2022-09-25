import React,{useEffect,useContext} from 'react'
import tranContext from '../context/transactions/tranContext'
import './TranItem.css'

function TranItem() {
  const context = useContext(tranContext)
  const {trans,getTrans}= context
    useEffect(() => {
        getTrans()
    }, [])
  return (
    <div>
           <div className="transactions">
              <table className='transaction_table'>
                <thead className='transaction_head'>
                  <tr className='transaction_row'>
                    <th className='transaction_headcol'>Status</th>
                    <th className='transaction_headcol'>Sender</th>
                    <th className='transaction_headcol'>Receiver</th>
                    <th className='transaction_headcol'>Credits</th>
                    <th className='transaction_headcol'>Date</th>
                  </tr>
                </thead>
                <tbody className='transaction_body'>
                  <div className="tran_message">
                {trans.length===0&&"No Transactions Currently"}
                </div>
                {trans.map((s)=>(
                  <tr className='transaction_row'>
                    <td className='transaction_col'>{s.message}</td>
                    <td className='transaction_col'>{s.sender}</td>
                    <td className='transaction_col'>{s.receiver}</td>
                    <td className='transaction_col'>{s.transfer}</td>
                    <td className='transaction_col'>{s.date}</td>
                  </tr>
                  ))} 
                </tbody>
              </table>
           </div>
    </div>
  )
}

export default TranItem