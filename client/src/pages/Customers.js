import React from "react";
import logo from '../assets/logo.png';
import profile from '../assets/profile.png'
import '../views/App.css';

import { useNavigate, useParams } from "react-router-dom";
import Axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomersList from "./CustomersList";
import UpdateCustomer from "./CustomerUpdate";

function Customers() {

  let navigate = useNavigate();
  let { username } = useParams();
  const [customer_id, setCustomerId] = useState();
  const [customer_fname, setFname] = useState("");
  const [customer_lname, setLname] = useState("");
  const [customer_email, setEmail] = useState("");
  
  
 
  const notify = () => toast.success('New Customer Added!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });;
  
  const [customersList, setCustomersList] = useState([]);

  const addCustomer = () => {
    Axios.post("http://localhost:3001/createCustomer", {
      customer_id: customer_id,
      customer_fname: customer_fname,
      customer_lname: customer_lname,
      customer_email: customer_email,
    }).then(() => {
      getCustomers();
      setCustomersList([
        ...customersList,
        {
          customer_id: customer_id,
          customer_fname: customer_fname,
          customer_lname: customer_lname,
          customer_email: customer_email,
        },
      ]);
    });
  };

  const getCustomers = () => {
    Axios.get("http://localhost:3001/customers").then((response) => {
      setCustomersList(response.data);
      
    });
  };

  const deleteCustomer = (id) => {
    Axios.delete(`http://localhost:3001/deleteCustomer/${id}`).then((response) => {
      getCustomers();
      CustomersList(
        CustomersList.filter((val) => {
          return val.id != id;
        })
      );
    });
  };

  const updateCustomer = (id) => {
    Axios.put("http://localhost:3001/updateCustomer", {customer_fname: customer_fname,
    customer_lname: customer_lname,
    customer_email: customer_email}).then(
      (response) => {
        getCustomers();
        setCustomersList(
          CustomersList.map((val) => {
            return val.customer_id == id
              ? {
                customer_id: customer_id,
                customer_fname: customer_fname,
                customer_lname: customer_lname,
                customer_email: customer_email,
                }
              : val;
          })
        );
      }
    );
  };


useEffect(() => {
  getCustomers();
  
},[]);
  
  
  const newCustomerAdded = () =>
  {
    
    addCustomer();
    
    notify();
    
    
  }
  
  
  return (
    
    <div className="Customers">
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>cs-340-group-121-project</title>
        <link rel="stylesheet" href="./index.css" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <div className="container">
          <aside>
            <div className="top">
              <div className="logo">
              <a href="#" className="logo">
                <img src={logo} className="logo" />
              </a>
                <h2 className="logo-name">Car<span className="danger">Worms</span></h2>
              </div>
              <div className="close" id="close-btn">
                <span className="material-icons">close</span>
              </div>
            </div>
            <div className="sidebar">
              {/*<a href="#">
                        <span class="material-icons">grid_view</span>
                        <h3>Dashboard</h3>
                    </a>*/}
              <button className="option" onClick={() => {
                      navigate("/");
                                          }}>
                <span className="material-icons">person_outline</span>
                <h3>Customers</h3>
              </button>
              <button className="option" onClick={() => {
                      navigate("/vehicles");
                                          }}>
                <span className="material-icons">car_rental</span>
                <h3>Vehicles</h3>
              </button>
              <button className="option" onClick={() => {
                      navigate("/stores");
                                          }}>
                <span className="material-icons">store</span>
                <h3>Stores</h3>
              </button>
              <button className="option" onClick={() => {
                      navigate("/reservations");
                                          }}>
                <span className="material-icons">receipt_long</span>
                <h3>Reservations</h3>
              </button>
              
              <button className="option" onClick={() => {
                      navigate("/employees");
                                          }}>
                <span className="material-icons">badge</span>
                <h3>Employees</h3>
              </button>
              <a href="#" className="option">
                        <span class="material-icons">logout</span>
                        <h3>Logout</h3>
              </a>

            </div>
          </aside>
          {/*------------------------------END OF ASIDE----------------------------*/} 
          <main>
            {/*<h1>Dashboard</h1>

                    <div class="date-curr">
                        <input type="date">
                    </div>
                */}
            <div className="orders reservations-header"> 
              <div>
                <h2 className="res-title">Customers
                </h2>
              </div>
              <div>
              </div>
              <table className="form1">
                <thead>
                  <tr>
                   
                    <th className="text-muted  light">customer_fname</th>
                    <th className="text-muted  light">customer_lname</th>
                    <th className="text-muted  light">customer_email</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    
                    <td><input className="form" type="text" onChange={(event) => {
                      setFname(event.target.value);
                      
                    }}/></td>
                    <td><input className="form" type="text" onChange={(event) => {
                      setLname(event.target.value);
                    }} /></td>
                    <td><input className="form" type="text" onChange={(event) => {
                      setEmail(event.target.value);
                    }} /></td>
                  </tr>
                </tbody>
              </table>
              <div>
              <button className="submit" onClick={newCustomerAdded}>Submit</button>
              
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                />
              </div>
            </div>
            <div className="container">
          
          <main>
            {/*<h1>Dashboard</h1>

                    <div class="date-curr">
                        <input type="date">
                    </div>
                */}
          
            <div className="orders reservations-header"> 
              <div>
                <h2 className="res-title">
                  <span className="search">
                    <input type="text" placeholder="search by id" />
                    <span><a href="#">
                        <span className="material-icons">manage_search</span>
                        
                      </a></span>
                  </span>
                  
                </h2>
              </div>
              <div>
              </div>
              { customersList.map((val,key) => {
          return (
            <div>
            <table>
            <thead>
              <tr>
                <th className="text-muted light">customer_id*</th>
                <th className="text-muted light">customer_fname</th>
                <th className="text-muted light">customer_lname</th>
                <th className="text-muted light">customer_email</th>
                
                <button className="material-icons delete-btn"
                  onClick={() => {
                    deleteCustomer(val.customer_id);
                  }}>
                  delete
                </button>
                  <button className="material-icons edit-btn">
                    edit
                  </button>
                
                
                
                
              </tr>
            </thead>
            
            <tbody>
              <tr>
                <td className="dark">{val.customer_id}</td>
                <td className="light dark">{val.customer_fname}</td>
                <td className="light dark">{val.customer_lname}</td>
                <td className="light dark">{val.customer_email}</td>
              </tr>
            </tbody>
            
          </table>
            
            </div>
          
            );
          })}
          
              
            </div>
          </main>
          {/*-----END OF MAIN------------*/}
         
        </div> 
          </main>
          {/*-----END OF MAIN------------*/}
          <div className="right">
            <div className="top">
              <button id="menu-btn">
                <span className="material-icons">menu</span>
              </button>
              <div className="theme-toggler">
                <span className="material-icons active">light_mode</span>
                <span className="material-icons">dark_mode</span>
              </div>
              <div className="profile">
                <div className="info">
                  <p>Welcome, <b>Adilbek Bazarkulov</b></p>
                  <small className="text-muted">Admin</small>
                </div>
                <div className="profile-photo">
                  <a href="#" className="profile">
                    <img src={profile} className="profile" />
                  </a>
                </div>
              </div>
              
            </div>
            
          </div>
          
        </div>     
                
      
      </div>
    </div>
  
  );
 
}


export default Customers;
