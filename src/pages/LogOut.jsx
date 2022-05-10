import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { userLoginAction } from '../actions/auth-action'
 
export default function LogOut({history}) {
    const dispatch = useDispatch()
    const { userInfo } = useSelector(state => state.user)
    const [count ,setCount]=useState(5)
    useEffect(() => {
        if (userInfo) {
            dispatch( userLoginAction()) 
            setTimeout(() => {
                clearInterval(rem)
                history.push("/login")
            }, 5000)
           const rem= setInterval(() => {
               setCount(pre=> pre-1)
           }, 1000)  
        } else {
           history.push("/login")
        }
    },[])
  return (
      <>
           <div className='row'>
               <div className='col col-sm-6 offset-3 mt-5'>
                    <div className='alert alert-success'>
                    <h5>You have Logout Successully</h5>
                    <h5>You will be Redirted after  {count} Sec on login page </h5>
                    </div>
               </div>

           </div>
    </>
  )
}
