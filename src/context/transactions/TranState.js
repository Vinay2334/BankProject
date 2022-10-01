import TranContext from "./tranContext";
import { useState } from "react";
const TranState = (props)=>{
    // const host=process.env.PORT || "http://localhost:3000"
    const host=process.env.PORT || "http://localhost:3000"
    const userInitial=[]
    const [users, setusers] = useState(userInitial);
    const [trans, settrans] = useState([]);
    const [alluser,setalluser]= useState(userInitial);

    const getuser = async()=>{
        const response=await fetch(`${host}/api/auth/getuser`,{
            method:'POST',
            headers:{
              'Content-Type': 'application/json',
              'auth-token': localStorage.getItem('token')
            },
            });
        const json=await response.json();
        setusers(json)
    }

    const getuserall = async()=>{
        const response=await fetch(`${host}/api/transactions/view`,{
            method:'GET'
            });
            const json = await response.json();
            setalluser(json)
    }
    const getTrans = async()=>{
        const response=await fetch(`${host}/api/transactions/history`,{
            method:'GET',
            headers:{
              'Content-Type': 'application/json',
              'auth-token': localStorage.getItem('token')
            },
            });
            const json=await response.json();
            settrans(json)
        }
    const transaction = async(credit,accNo)=>{
        const response=await fetch(`${host}/api/transactions/view/transferMoney`,{
            method:'PUT',
            headers:{
              'Content-Type': 'application/json',
              'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({credit,accNo})
            });
            const json= await response.json()
            setalluser(json)
    }

    const depositMoney = async(addMoney)=>{
        const response=await fetch(`${host}/api/transactions/view/depositMoney`,{
            method:'PUT',
            headers:{
              'Content-Type': 'application/json',
              'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({addMoney})
            });
            const json= await response.json()
            setusers(json)
        }

    return(
        <TranContext.Provider value={{alluser,trans,users,getuser,getTrans,getuserall,transaction,depositMoney}}>
            {props.children}
        </TranContext.Provider>
    )
}
export default TranState