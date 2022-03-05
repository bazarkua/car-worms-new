import logo from '../assets/logo.png';
import profile from '../assets/profile.png'
import '../views/App.css';
import VehiclesList from '../pages/VehiclesList';
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Vehicles() {
  let navigate = useNavigate();
  const [vehicle_id, setId] = useState(0);
  const [store_id, setStoreID] = useState("");
  const [vehicle_make, setMake] = useState("");
  const [vehicle_mod, setMod] = useState("");
  const [vehicle_price, setPrice] = useState("");
  const [vehicle_status, setStatus] = useState("");

  return (
    
    <div className="Vehicles">
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
                <h2 className="res-title">Vehicles
                </h2>
              </div>
              <div>
              </div>
              <table className="form1">
                <thead>
                  <tr>
                    <th className="text-muted light">vehicle_id*</th>
                    <th className="text-muted light">store_id</th>
                    <th className="text-muted light">vehicle_make</th>
                    <th className="text-muted light">vehicle_mod</th>
                    <th className="text-muted light">vehicle_status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><input className="form" type="text" onChange={(event) => {
                      setId(event.target.value);
                    }}/></td>
                    <td><input className="form" type="text" /></td>
                    <td><input className="form" type="text" /></td>
                    <td><input className="form" type="text" /></td>
                    <td><input className="form" type="text" /></td>
                  </tr>
                </tbody>
              </table>
              <a className="submit" href="#">Submit</a>
            </div>
            <VehiclesList /> 
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


export default Vehicles;
