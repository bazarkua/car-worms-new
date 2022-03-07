import React from "react";
import logo from '../assets/logo.png';
import profile from '../assets/profile.png'
import '../views/App.css';
import CustomersList from "./CustomersList";
import { useNavigate, useParams } from "react-router-dom";
import Axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function CustomerUpdate(){

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


    return(
   
        <span>
       
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
      </span>

    );





}

export default CustomerUpdate;