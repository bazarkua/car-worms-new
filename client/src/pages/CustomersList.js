import '../views/App.css';
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Axios from "axios";
import { render } from 'react-dom';

function CustomersList() {

  
  const [customersList, setCustomersList] = useState([]);
  
  

  const getCustomers = () => {
    Axios.get("http://localhost:3001/customers").then((response) => {
      setCustomersList(response.data);
      
    });
  };

 
  
  
    return (
     
        <div>
          
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>cs-340-group-121-project</title>
        <link rel="stylesheet" href="./index.css" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
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
                    <input type="text" placeholder="search" />
                    <span><a href="#">
                        <span className="material-icons">manage_search</span>
                        
                      </a></span>
                  </span>
                </h2>
              </div>
              <div>
              </div>
              {customersList.map((val, key) => {
          return (
            
            <table>
            <thead>
              <tr>
                <th className="text-muted light">customer_id*</th>
                <th className="text-muted light">customer_fname</th>
                <th className="text-muted light">customer_lname</th>
                <th className="text-muted light">customer_email</th>
                <th>
                  <a href="#">
                    <span className="material-icons">update</span>
                  </a>
                </th>
                <th>
                  <a href="#">
                    <span className="material-icons">edit</span>
                  </a>
                </th>
                <th>
                  <a href="#">
                    <span className="material-icons">delete</span>
                  </a>
                </th>
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
          
            );
          })}
              
            </div>
          </main>
          {/*-----END OF MAIN------------*/}
         
        </div>         
      </div>

    );
}



export default CustomersList;