import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom'
import{useDispatch,useSelector} from 'react-redux'
 
 
export default function Navbar({history}) {
    const dispatch=useDispatch()
     
    const {userInfo}=useSelector(state=>state.user)
     
     
    
  return <div  >
          <nav className="navbar navbar-expand-sm navbar-light bg-primary">
              <div className="container-fluid">
                  <a className="navbar-brand" href="#">Task</a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarID"
                      aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>                  
                  <div className="collapse navbar-collapse" id="navbarID">
                      <div className="navbar-nav">
                           <ul className='navbar-nav ms-auto'>
                            
                           {
                                userInfo? 
                                <div className='dropdown'>
                                    <button  className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">{userInfo.name}</button>
                                    <ul className="dropdown-menu bg-info " aria-labelledby="dropdownMenuButton1">
                      
                      <li><Link className="dropdown-item text-dark" to="/profile">Profile</Link></li>
                      <li><Link className="dropdown-item text-dark" to='/logout' >Logout</Link></li>
                      {userInfo?.info?.inAdmin?
                        <div>
                        <li><Link className="dropdown-item text-dark" to='/dashboard'>Dashboard</Link></li>
                        {/* <li><Link className="dropdown-item text-dark" to='/add-product' >Add Product</Link></li>
                        <li><Link className="dropdown-item text-dark" to='/adminOrders' >Admin orders</Link></li> */}
                       </div>
                        :<li><Link className="dropdown-item text-dark" to='/order-history' >Order history</Link></li>}
                        </ul>
                                </div>
                                :
                                <Link className="nav-link active" aria-current="page" to='/login'>Login</Link>
                            }
                           </ul>
                           
                      </div>
                  </div>
              </div>
          </nav>
  </div>;
}
